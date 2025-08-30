import { useState } from "react";
import { validateEmail } from "../../../utils";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../../hooks";

const TEST_USER = {
  email: "mohan@gmail.com",
  password: "123456"
};

const TEST_USER_DATA= {
  name: "Mohan",
  address: "Delhi",
  id: 123,
}

export default function LoginPage() {
  const { signIn } =  useAuth()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      // await new Promise(resolve => setTimeout(resolve, 1500));

      if(formData.email === TEST_USER.email && formData.password === TEST_USER.password){
        signIn(TEST_USER_DATA);
        setSubmitSuccess(true);
        resetForm();
        navigate("/");
      }else{
        setErrors({ submit: 'Invalid email or password' });
      }
    } catch (err) {
      console.log(err);
      setErrors({ submit: 'Failed to create user. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ email: '', password: '' });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6 tracking-tight">Login</h1>
        {submitSuccess && <div className="text-green-600 text-center mb-2">Login successful</div>}
        {isSubmitting && <div className="text-blue-500 text-center mb-2">Submitting...</div>}
        {errors.submit && <div className="text-red-500 text-center mb-2">{errors.submit}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInputChange}
              value={formData.email}
              autoComplete="email"
            />
            <div className="text-xs text-gray-400 mt-1">eg. mohan@gmail.com</div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInputChange}
              value={formData.password}
              autoComplete="current-password"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <div className="flex justify-between mt-4">
            <NavLink to="/auth/register" className="text-blue-500 hover:underline">Register</NavLink>
            <NavLink to="/auth/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
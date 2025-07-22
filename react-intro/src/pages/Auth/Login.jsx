import { useState } from "react";
import loginStyles from "./login.module.css";
import { validateEmail } from "../../utils";
import { NavLink } from "react-router";

export default function LoginPage() {
	const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});


	const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
			return {
				...prev,
				[name]: value
			}
		});

    // Clear error when user starts typing
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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login successful:', formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitSuccess(false);
				resetForm();
      }, 3000);
      
    } catch (error) {
      console.error('Error creating user:', error);
      setErrors({ submit: 'Failed to create user. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
				email: '',
				password: ''
    });
    setErrors({});
    setSubmitSuccess(false);
  };




	return (
		<>
			<h1 className={`${loginStyles['loginPageTitle']} text-2xl font-bold mb-4`}>Login</h1>
			{submitSuccess && <div className="text-green-500">Login successful</div>	}
			{isSubmitting && <div className="text-blue-500">Submitting...</div>}
			{errors.submit && <div className="text-red-500">{errors.submit}</div>}
			<form onSubmit={handleSubmit} className={`${loginStyles['login-form']} flex flex-col gap-4`}>

				<div className={loginStyles['formGroup']}>
					<label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
					<input type="email" placeholder="Email" name="email" className="border border-gray-300 rounded-md p-2" id="email" onChange={handleInputChange} value={formData.email} />
					<div className="textHint">eg.mohan@gmail.com</div>
					{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
				</div>

				<div className={loginStyles['formGroup']}>
					<label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
					<input type="password" placeholder="Password" name="password" className="border border-gray-300 rounded-md p-2" id="password" onChange={handleInputChange} value={formData.password} />
					{errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
				</div>

				<div className="flex justify-center">
					<NavLink to="/auth/register" className="text-blue-500">Register</NavLink>
				</div>
			</form>
		</>
	);
}
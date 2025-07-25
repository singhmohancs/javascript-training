import { NavLink } from 'react-router';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="text-2xl font-extrabold text-center text-blue-700 mb-2 tracking-tight">Forgot Password</h1>
          <p className="text-center text-gray-600 mb-4">Enter your email to reset your password</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {submitted && <div className="text-green-600 text-center">Reset link sent to your email!</div>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200"
          >
            Reset Password
          </button>
          <div className="flex justify-center mt-4">
            <NavLink to="/auth/login" className="text-blue-500 hover:underline">Back to Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
import React, { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Contact Us</h1>
      <p className="mb-10 text-center text-gray-700">
        Have questions or want to work together? Fill out the form below or email us at{" "}
        <a href="mailto:contact@business.com" className="text-blue-600 hover:underline">
          contact@business.com
        </a>
        .
      </p>

      {isSubmitted && (
        <div className="mb-8 rounded-md bg-green-100 border border-green-400 text-green-800 px-4 py-3">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-2">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
        </div>
        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block font-semibold mb-2">
            Subject<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.subject && <p className="text-red-600 mt-1 text-sm">{errors.subject}</p>}
        </div>
        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            Message<span className="text-red-600">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
}

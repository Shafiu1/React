import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setMessage("সব ফিল্ড পূরণ করুন।");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না।");
      return;
    }

    setMessage(`ধন্যবাদ, ${name}! আপনি সফলভাবে রেজিস্টার করেছেন।`);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">রেজিস্টার</h2>

        {message && (
          <div
            className="mb-4 p-3 text-white bg-green-500 rounded"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">নাম</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="আপনার নাম লিখুন"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="আপনার ইমেইল লিখুন"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="পাসওয়ার্ড দিন"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="পুনরায় পাসওয়ার্ড দিন"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            রেজিস্টার
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

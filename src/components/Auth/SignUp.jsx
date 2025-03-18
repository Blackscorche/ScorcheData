import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert("Signup successful!");
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D11] px-6">
      <div className="w-full max-w-sm bg-[#13131A] p-6 rounded-xl">
        <div className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text pt-2 font-extrabold text-2xl">
            Scorche<span className='text-white/80'>Pay</span>
          </span>
        </div>

        <h2 className="mt-6 text-lg font-semibold text-white">Sign up to ScorchePay</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md"
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Link to={"/userdashboard"}>
            <button className="w-full py-3 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">
              Sign Up
            </button>
          </Link>


          <p className="text-center text-sm text-gray-400 mt-3">
            Have an account already?{" "}
            <Link to="/signin" className="text-orange-500 font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

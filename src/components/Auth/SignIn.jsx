import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D11] px-6">
      <div className="w-full max-w-sm bg-[#13131A] p-6 rounded-xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-md"></div>
          <h1 className="text-xl font-bold text-white">ScorcheNet</h1>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-lg font-semibold text-white">Log in to ScorcheNet</h2>

        {/* Form */}
        <form className="mt-4 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <a href="/forgotpassword" className="text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Log In Button */}
          <button className="w-full py-3 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">
            Log In
          </button>

          {/* Don't have an account? */}
          <p className="text-center text-sm text-gray-400 mt-3">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange-500 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

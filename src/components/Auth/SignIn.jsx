import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login (replace with real API call)
    console.log("Logging in with:", email, password);

    // Navigate to the dashboard after login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D11] px-6">
      <div className="w-full max-w-sm bg-[#13131A] p-6 rounded-xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text pt-2 text-2xl font-bold">
            Scorche<span className="text-white/80">Pay</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-lg font-semibold text-white">
          Log in to ScorcheNet
        </h2>

        {/* Form */}
        <form className="mt-4 space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#1E1E29] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[38px] text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link to="/forgotpassword" className="text-orange-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-3 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
          >
            Log In
          </button>

          {/* Don't have an account? */}
          <p className="text-center text-sm text-gray-400 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D11] px-6">
      <div className="w-full max-w-sm bg-[#13131A] p-6 rounded-xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text pt-2 text-2xl font-bold">
            Scorche<span className='text-white/80'>Pay</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-lg font-semibold text-white">
          Forgot Your Password?
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Enter your email address, and we'll send you a link to reset your password.
        </p>

        {/* Form */}
        {!emailSent ? (
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setEmailSent(true);
            }}
          >
            {/* Email Input */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 bg-[#1E1E29] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Send Reset Link Button */}
            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
            >
              Send Reset Link
            </button>

            {/* Back to Login */}
            <p className="text-center text-sm text-gray-400 mt-3">
              Remember your password?{" "}
              <a href="/SignIn" className="cursor-pointer text-orange-500 font-medium">
                Log in
              </a>
            </p>
          </form>
        ) : (
          <div className="mt-4 text-center text-green-400">
            ✅ A password reset link has been sent to your email.
          </div>
        )}
      </div>
    </div>
  );
}

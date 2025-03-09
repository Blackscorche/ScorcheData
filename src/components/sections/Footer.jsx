import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-center">
      {/* Logo & Intro */}
      <div className="mb-6">
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Transforming businesses with innovative web and tech solutions, tailored for your needs.
        </p>
      </div>

      {/* Footer Sections */}
      <div className="flex flex-wrap justify-center md:justify-between max-w-4xl mx-auto text-left">
        {/* About Section */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">About Us</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-red-500">About</a></li>
            <li><a href="/team" className="hover:text-red-500">Team</a></li>
            <li><a href="/blog" className="hover:text-red-500">Blog</a></li>
            <li><a href="/success-stories" className="hover:text-red-500">Success Stories</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/faq" className="hover:text-red-500">FAQ</a></li>
            <li><a href="/contribute" className="hover:text-red-500">Contribute</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Guides Section */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Guides</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/community-guides" className="hover:text-red-500">Community Guides</a></li>
            <li><a href="/installation-guides" className="hover:text-red-500">Installation Guides</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/terms" className="hover:text-red-500">Terms</a></li>
            <li><a href="/privacy" className="hover:text-red-500">Privacy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} ScorcheTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

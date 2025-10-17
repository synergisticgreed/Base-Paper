// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">EduPapers</h3>
          <p>Access all past year papers in one place. Organized, fast, and easy to use.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul>
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#papers" className="hover:text-blue-400">Papers</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p>Email: support@edupapers.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        &copy; 2025 EduPapers. All rights reserved.
      </div>
    </footer>
  );
}

// src/components/Navbar.jsx
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">EduPapers</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#papers" className="hover:text-blue-400">Papers</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a href="#login" className="bg-blue-400 text-gray-900 px-4 py-2 rounded hover:bg-blue-500 transition">Login</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-200 text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#papers" className="block hover:text-blue-400">Papers</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
          <a href="#login" className="block bg-blue-400 text-gray-900 px-4 py-2 rounded hover:bg-blue-500 transition">Login</a>
        </div>
      )}
    </nav>
  );
}

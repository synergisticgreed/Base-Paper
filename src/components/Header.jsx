// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 py-20">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Access All Your Past Year Papers
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Organized, fast, and easy to use. Browse and download all university papers in one place.
        </p>
        <a
          href="#papers"
          className="bg-blue-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition"
        >
          Browse Papers
        </a>
      </div>
    </header>
  );
}

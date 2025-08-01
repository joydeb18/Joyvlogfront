// components/Header.jsx

"use client"; // agar aap Next.js 13+ m ho tab likhna

import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* 👽 Left Side: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logrocket-logo.png" // 👈 isko public folder m rakhna
            alt="LogRocket"
            className="h-8"
          />
          <span className="text-xl font-bold text-purple-700">LogRocket</span>
        </div>

        {/* 🧭 Center Links */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-purple-700">Blog</a>
          <a href="#" className="hover:text-purple-700">Features</a>
          <a href="#" className="hover:text-purple-700">Solutions</a>
        </nav>

        {/* 🔘 Right Side: Buttons */}
        <div className="space-x-4 text-sm">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            START MONITORING FOR FREE
          </button>
          <button className="text-purple-700 font-semibold hover:underline">
            SIGN IN
          </button>
        </div>
      </div>
    </header>
  );
}

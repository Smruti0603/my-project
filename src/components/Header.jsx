import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full h-16 bg-black z-40 flex justify-between items-start px-12 pt-3 border-t border-b border-white border-opacity-10"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <Link
        to="/"
        className="text-white text-2xl font-semibold tracking-wide cursor-pointer"
        style={{ lineHeight: "1.4" }}
      >
        Smruti Dawale
      </Link>

      <nav className="flex space-x-8 text-white text-xl font-light tracking-wide cursor-pointer" style={{ lineHeight: '1.4' }}>
        {/* About */}
        <Link
            to="/about"
            className="px-4 py-1 rounded-xl transition-colors duration-300 hover:bg-gray-700 hover:text-yellow-400"
        >
            About Me
        </Link>

        {/* Resume with arrow */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-1 rounded-xl transition-colors duration-300 hover:bg-gray-700 hover:text-yellow-400"
          style={{ gap: '6px' }}
        >
          My Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </nav>
    </header>
  );
}

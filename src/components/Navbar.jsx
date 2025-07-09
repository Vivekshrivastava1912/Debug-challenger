import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-gray-900 text-white shadow-lg rounded-2xl m-2 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-2xl font-extrabold text-blue-400 tracking-wide">
          Debug Challenger
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-300 transition text-lg">Home</a>
          <a href="#" className="hover:text-blue-300 transition text-lg ">Challenges</a>
          <a href="#" className="hover:text-blue-300 transition text-lg">Profile</a>
          <a href="#" className="hover:text-blue-300 transition text-lg">Settings</a>
          <a href="#" className="hover:text-blue-300 transition text-lg">Help</a>
        </div>

        {/* Mobile Menu Button (Text-based toggle) */}
        <button
          className="md:hidden border px-3 py-1 text-sm rounded hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <a href="#" className="block hover:text-blue-300">Home</a>
          <a href="#" className="block hover:text-blue-300">Challenges</a>
          <a href="#" className="block hover:text-blue-300">Profile</a>
          <a href="#" className="block hover:text-blue-300">Settings</a>
          <a href="#" className="block hover:text-blue-300">Help</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import logo from '../../assets/images/logo-modified.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="GameVerse Logo"
              className="h-14 w-14 rounded-full shadow-lg ring-4 ring-indigo-500 hover:scale-110 transition duration-300"
            />
            <span className="text-3xl font-extrabold text-indigo-600 tracking-wide">GameVerse</span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10 items-center text-lg">
            <a href="/" className="font-medium text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="/about" className="font-medium text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="/features" className="font-medium text-gray-700 hover:text-indigo-600">
              Features
            </a>
            <a href="/pricing" className="font-medium text-gray-700 hover:text-indigo-600">
              Pricing
            </a>
            <a href="/login" className="ml-4 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-6 rounded-xl transition duration-300">
              Login
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 text-lg">
              <a href="/" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="/features" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <a href="/login" className="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md inline-block" onClick={() => setIsMenuOpen(false)}>
                Login
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

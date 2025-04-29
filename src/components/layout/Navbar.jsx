import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-indigo-600">
              GameVerse
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="/features" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Features
            </a>
            <a href="/pricing" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Pricing
            </a>
            <a href="/login" className="text-sm font-medium bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Login
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-base font-medium text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="/about" className="text-base font-medium text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="/features" className="text-base font-medium text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="/pricing" className="text-base font-medium text-gray-700 hover:text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <a href="/login" className="text-base font-medium bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 inline-block" onClick={() => setIsMenuOpen(false)}>
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
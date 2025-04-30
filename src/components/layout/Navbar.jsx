import React, { useState } from 'react';
import logo from '../../assets/images/logo-modified.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // TODO: Add login logic here (API call etc.)
    setShowLoginModal(false);
  };
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="GameVerse Logo"
              className="h-14 w-14 rounded-full shadow-lg ring-4 ring-indigo-500 hover:scale-110 transition duration-300"
            />
            <span className="text-3xl font-extrabold text-indigo-600 tracking-wide">GameVerse</span>
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
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

          <nav className="hidden md:flex space-x-10 items-center text-lg">
            <button onClick={() => navigate("/")} className="font-medium text-gray-700 hover:text-indigo-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-medium text-gray-700 hover:text-indigo-600">About</button>
            <button onClick={() => scrollToSection('features')} className="font-medium text-gray-700 hover:text-indigo-600">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="font-medium text-gray-700 hover:text-indigo-600">Pricing</button>
            <button onClick={() => scrollToSection('blogs')} className="font-medium text-gray-700 hover:text-indigo-600">Blogs</button>
            <button onClick={() => setShowLoginModal(true)} className="ml-4 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-6 rounded-xl transition duration-300">
              Login
            </button>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 text-lg">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 py-2">About</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-indigo-600 py-2">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-indigo-600 py-2">Pricing</button>
              <button onClick={() => scrollToSection('blogs')} className="text-gray-700 hover:text-indigo-600 py-2">Blogs</button>
              <button onClick={() => { setIsMenuOpen(false); setShowLoginModal(true); }} className="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md inline-block">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

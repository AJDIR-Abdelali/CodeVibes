import React from 'react';
import Navbar from './components/layout/Navbar';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home';
function App() {
  return (
    <div className="min-h-screen">
    
      <Navbar />
    <Home/>
      <Layout/>
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Welcome to GameVerse</h1>
          <p className="text-lg text-gray-700">
            Your ultimate gaming platform for endless entertainment and community connection.
          </p>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 GameVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
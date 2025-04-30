import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import BlogSection from './pages/BlogSection';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import AllBlogs from './pages/AllBlogs';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
      <Navbar />      
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Features/>
                <Pricing />
                <BlogSection />
                <main className="py-8">
                  <div className="container mx-auto px-4">
                    <p className="text-lg text-gray-700">
                      Your ultimate gaming platform for endless entertainment and community connection.
                    </p>
                  </div>
                </main>
              </>
            }
          />

          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
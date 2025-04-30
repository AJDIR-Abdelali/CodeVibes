// src/pages/AllBlogs.jsx
import React from 'react';

// Réutilise les imports d'images
import blog1 from '../assets/images/indie games.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';
import blog5 from '../assets/images/blog5.jpg';
import blog6 from '../assets/images/blog6.jpg';

const blogs = [
  { id: 1, title: 'Top 10 Indie Games in 2025', description: 'Explore the most anticipated indie games...', image: blog1 },
  { id: 2, title: 'How Gaming Builds Skills', description: 'Discover how games improve your skills...', image: blog2 },
  { id: 3, title: 'VR: The Next Big Thing?', description: 'Virtual Reality is evolving fast...', image: blog3 },
  { id: 4, title: 'Esports in Morocco', description: 'A look into competitive gaming in Morocco...', image: blog4 },
  { id: 5, title: 'Retro Gaming is Back', description: 'Why the classics never die...', image: blog5 },
  { id: 6, title: 'How to Build a Gaming PC', description: 'Step-by-step guide for building your setup...', image: blog6 },
];

const AllBlogs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">All Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;

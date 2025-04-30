import React from 'react';
import blog1 from '../assets/images/indie games.jpg'; // adjust path if needed

const Blog1Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <img src={blog1} alt="Top 10 Indie Games in 2025" className="rounded-lg shadow-lg mb-8 w-full object-cover h-96" />
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Top 10 Indie Games in 2025</h1>
      <p className="text-gray-700 text-lg mb-4">
        In 2025, indie games are taking the spotlight like never before. Developers around the world are pushing the limits of creativity...
      </p>
      <p className="text-gray-600 text-base leading-relaxed">
        [You can add the full blog content here... for now it's placeholder text]
      </p>
    </div>
  );
};

export default Blog1Page;

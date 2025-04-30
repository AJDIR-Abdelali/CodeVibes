import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your local images
import blog1 from '../assets/images/indie games.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';
import blog5 from '../assets/images/blog5.jpg';
import blog6 from '../assets/images/blog6.jpg';

// Blog data array with imported images
const blogs = [
  {
    id: 1,
    title: 'Top 10 Indie Games in 2025',
    description: 'Explore the most anticipated indie games for this year with stunning visuals and gameplay.',
    image: blog1,
  },
  {
    id: 2,
    title: 'How Gaming Builds Skills',
    description: 'Discover how games improve your reflexes, strategy, and teamwork.',
    image: blog2,
  },
  {
    id: 3,
    title: 'VR: The Next Big Thing?',
    description: 'Virtual Reality is evolving fast—here’s how it’s changing the gaming landscape.',
    image: blog3,
  },
  {
    id: 4,
    title: 'Esports in Morocco',
    description: 'A look into how Morocco is becoming a hub for competitive gaming.',
    image: blog4,
  },
  {
    id: 5,
    title: 'Retro Gaming is Back',
    description: 'Why the classics never die—celebrating the return of retro titles.',
    image: blog5,
  },
  {
    id: 6,
    title: 'How to Build a Gaming PC',
    description: 'Step-by-step guide for building a high-performance setup.',
    image: blog6,
  },
];

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3); // Show first 3 initially

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => {
      const newCount = prev + 3;
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
      return newCount;
    });
  };

  const allBlogsVisible = visibleBlogs >= blogs.length;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Latest Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.slice(0, visibleBlogs).map(blog => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8">
          <button
            onClick={loadMoreBlogs}
            disabled={allBlogsVisible}
            className={`px-6 py-3 rounded-md focus:outline-none transition font-semibold ${
              allBlogsVisible
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-indigo-600 text-white hover:bg-indigo-500'
            }`}
          >
            {allBlogsVisible ? 'No More Posts' : 'Load More'}
          </button>
        </div> */}

<div className="mt-8">
  <Link 
    to="/blogs"
    className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 focus:outline-none transition"
  >
    Load More
  </Link>
</div>
      </div>
    </section>
  );
};

export default BlogSection;


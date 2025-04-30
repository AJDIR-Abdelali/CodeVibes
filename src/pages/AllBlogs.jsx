// src/pages/AllBlogs.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Réutilise les imports d'images
import blog1 from '../assets/images/indie games.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';
import blog5 from '../assets/images/blog5.jpg';
import blog6 from '../assets/images/blog6.jpg';
import axiosInstance from '../utils/axiosInstance';






const blogs = [
  { id: 1, title: 'Top 10 Indie Games in 2025', description: 'Explore the most anticipated indie games...', image: blog1 },
  { id: 2, title: 'How Gaming Builds Skills', description: 'Discover how games improve your skills...', image: blog2 },
  { id: 3, title: 'VR: The Next Big Thing?', description: 'Virtual Reality is evolving fast...', image: blog3 },
  { id: 4, title: 'Esports in Morocco', description: 'A look into competitive gaming in Morocco...', image: blog4 },
  { id: 5, title: 'Retro Gaming is Back', description: 'Why the classics never die...', image: blog5 },
  { id: 6, title: 'How to Build a Gaming PC', description: 'Step-by-step guide for building your setup...', image: blog6 },
];

const AllBlogs = () => {
  const navigate = useNavigate();
  const goToCreateBlog = () => {
    navigate('/create-blog');
  };
  const [blogs, setBlogs] = React.useState([]);
  const goToBlog = (id) => {
    navigate(`/blogs/${id}`)
  }
  async function fetchBlogs() {
    // Fetch blogs from the API
    const resp = await axiosInstance.get('/api/posts')
    const data = resp.data;
    console.log(data);
    // Assuming the API returns an array of blog objects
    // You can set the blogs state here if you want to use dynamic data
    setBlogs(data);
    
  }

  useEffect(() => {

    fetchBlogs();
    
  }, []);

  
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">All Blog Posts</h2>

        <button
            onClick={goToCreateBlog}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 float-right"
          >
            Create Blog
          </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} onClick={() => goToBlog(blog.id)} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={blog.image || blog1} alt={blog.title} className="h-48 w-full object-cover" />
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



// src/pages/AllBlogs.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';

// // You can keep default images if blog.image is not available
// import blog1 from '../assets/images/indie games.jpg';

// const AllBlogs = () => {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([]);

//   const goToCreateBlog = () => {
//     navigate('/create');
//   };

//   const goToBlog = (id) => {
//     navigate(`/blogs/${id}`);
//   };

//   async function fetchBlogs() {
//     try {
//       const resp = await axiosInstance.get('/api/posts');
//       setBlogs(resp.data);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     }
//   }

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
        
//         {/* Button aligned to the right */}
//         <div className="flex justify-end mb-8">
//           <button
//             onClick={goToCreateBlog}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             + Create Blog
//           </button>
//         </div>

//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           All Blog Posts
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div
//               key={blog._id || blog.id}
//               onClick={() => goToBlog(blog._id || blog.id)}
//               className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
//             >
//               <img
//                 src={blog.image || blog1}
//                 alt={blog.title}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
//                 <p className="text-gray-600 text-sm">{blog.description || blog.content?.slice(0, 100) + '...'}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllBlogs;

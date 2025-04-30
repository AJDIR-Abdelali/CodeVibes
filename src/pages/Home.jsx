


import React from 'react';
import home from '../assets/images/home.jpg'; // Replace with your image path
const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-white"
      style={{
        backgroundImage:
          `url(${home})`, // Replace with your gaming image
      }}
    >



      <div className="absolute inset-0  bg-opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold sm:text-5xl mb-4 text-gray-700">
          Join Our Quest — We’re Hiring!
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-700">
          Passionate about gaming, storytelling, or coding? Team up with GameVerse and help us build the ultimate gaming blog experience.
        </p>
        <a
          href="/careers"
          className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold hover:bg-indigo-500 transition"
        >
          Explore Open Roles
        </a>
      </div>
    </section>
  );
};

export default Home;

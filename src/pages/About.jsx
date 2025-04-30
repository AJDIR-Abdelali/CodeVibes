import React from "react";
import about1 from '../assets/images/about_1.jpg'
import about2 from '../assets/images/about_2.jpg'
import about3 from'../assets/images/about_3.jpg'
import about4 from'../assets/images/about4.jpg'
 
const About = () => {
  return (
    <section id = "about" className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-[#1e1e2f] to-[#292942] text-white">
      <div className="lg:w-1/2 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to GameVerse</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          GameVerse is your ultimate gateway to immersive, competitive, and thrilling gaming experiences.
          Whether you're a casual player or a seasoned pro, our platform connects gamers worldwide to
          discover new games, join epic tournaments, and level up their journey. Join us as we change
          the way people play, connect, and grow in the world of gaming.
        </p>
      </div>

      {/* Images à droite - disposition décalée */}
      <div className="lg:w-1/2 flex gap-4 mb-10 lg:mb-0">
        <div className="flex flex-col gap-4">
          <img src={about1} alt="About 1" className="rounded-2xl shadow-lg w-full" />
          <img src={about3} alt="About 3" className="rounded-2xl shadow-lg w-full mt-6" />
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <img src={about4} alt="About 4" className="rounded-2xl shadow-lg w-3/4 self-center"  />
          <img src={about2} alt="About 2" className="rounded-2xl shadow-lg w-3/4 self-center" />
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
// **********************************
// import React from "react";

// const About = () => {
//   return (
//     <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-[#1e1e2f] to-[#292942] text-white">
//       <div className="lg:w-1/2 max-w-xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to GameVerse</h1>
//         <p className="text-lg leading-relaxed text-gray-300">
//           GameVerse is your ultimate gateway to immersive, competitive, and thrilling gaming experiences.
//           Whether you're a casual player or a seasoned pro, our platform connects gamers worldwide to
//           discover new games, join epic tournaments, and level up their journey. Join us as we change
//           the way people play, connect, and grow in the world of gaming.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 gap-4 lg:w-1/2 mb-10 lg:mb-0">
//         <img src="http://localhost:3000/about_1.jpg" alt="Gaming 1" className="rounded-2xl shadow-lg" />
//         <img src="http://localhost:3000/about_2.jpg" alt="Gaming 2" className="rounded-2xl shadow-lg" />
//         <img src="http://localhost:3000/about_3.jpg" alt="Gaming 3" className="rounded-2xl shadow-lg" />
//         <img src="http://localhost:3000/about_4.jpg" alt="Gaming 4" className="rounded-2xl shadow-lg" />
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import blog1 from '../assets/images/indie games.jpg'; // adjust path if needed

const Blog1Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <img src={blog1} alt="Top 10 Indie Games in 2025" className="rounded-lg shadow-lg mb-8 w-full object-cover h-96" />
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Top 10 Indie Games in 2025</h1>
      <p className="text-gray-700 text-lg mb-4">
      The year 2025 marks a turning point for the independent video game scene, with an impressive wave of innovative titles captivating both casual players and hardcore fans. Unlike AAA blockbusters, these indie games stand out for their originality, refined artistic direction, and their ability to explore deep themes with great sensitivity.

Among the most anticipated games, Eclipse Hollow immerses us in a dreamlike world with hand-painted graphics, blending poetic exploration and environmental puzzles. Pixel Nomad, on the other hand, reinvents the roguelike genre with a survival system based on ecosystems and dynamic seasons. Other titles like Echoes of Dust and Whispers in the Fog explore introspective narratives about solitude, memory, or the consequences of technology on society, offering immersive and unforgettable experiences.

What makes these games so unique in 2025 is their ability to blend innovative gameplay, atmospheric soundtracks, and profound storytelling. Thanks to crowdfunding platforms and the rise of accessible game engines like Unity and Unreal Engine 5, indie developers have more tools than ever to bring their visions to life.

In short, these ten indie games are not just promising — they are redefining the boundaries of what video games can express. 2025 isn’t just a good year for indie games; it’s the year they take center stage.      </p>
      <p className="text-gray-600 text-base leading-relaxed">
       
      </p>
    </div>
  );
};

export default Blog1Page;

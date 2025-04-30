import React from 'react';
import img1 from '../assets/images/multiplayer.png'

const Features = ( )=>{
  const features = [
    { image: img1,
      title: 'Multiplayer Lobby',
      description: 'Create or join public and private lobbies to play with friends in real-time.',
    },
    { image: 'https://images.pexels.com/photos/7562427/pexels-photo-7562427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Game Reviews & Ratings',
      description: 'Read and post reviews about the latest games and rate your favorites.',
    },
    { image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      title: 'News & Updates',
      description: 'Stay updated with the latest news, releases, and gaming trends.',
    },
    { image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Community Forum',
      description: 'Join discussions, share tips, and connect with fellow gamers around the world.',
    }, 
    {  image: 'https://images.pexels.com/photos/7915389/pexels-photo-7915389.jpeg',
      title: 'Tournaments & Leaderboards',
      description: 'Compete in tournaments and climb the global rankings.'},
    {  image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Personalized Game Suggestions',
      description: 'Receive game recommendations based on your preferences and play history.',
    },

  ];

  return (
    <section id = "features" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
                <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold text-center text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

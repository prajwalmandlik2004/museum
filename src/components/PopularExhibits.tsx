import React from 'react';
import ExhibitCard from './ExhibitCard';

const PopularExhibits = () => {
  const exhibits = [
    {
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66",
      title: "Ancient Egypt Unveiled",
      museum: "British Museum",
      duration: "45 min",
      viewers: "2.5k watching"
    },
    {
      image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af",
      title: "Renaissance Masterpieces",
      museum: "Uffizi Gallery",
      duration: "60 min",
      viewers: "1.8k watching"
    },
    {
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
      title: "Modern Art Evolution",
      museum: "MoMA",
      duration: "30 min",
      viewers: "3.2k watching"
    },
    {
      image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af",
      title: "Impressionist Collection",
      museum: "Musée d'Orsay",
      duration: "40 min",
      viewers: "1.5k watching"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Popular Right Now</h2>
            <p className="text-gray-400">Discover trending virtual exhibitions</p>
          </div>
          <button className="text-purple-400 hover:text-purple-300">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exhibits.map((exhibit, index) => (
            <ExhibitCard key={index} {...exhibit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularExhibits;
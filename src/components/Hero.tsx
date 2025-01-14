import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80"
          alt="Museum Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Museum Journey,<br />
            <span className="text-purple-400">Anytime, Anywhere</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Experience world-class museums and exhibits from the comfort of your home. 
            Dive into interactive virtual tours, AR experiences, and educational content.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#C2AD8A] text-white px-8 py-3 rounded-full hover:bg-purple-700 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10">
              View Exhibits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
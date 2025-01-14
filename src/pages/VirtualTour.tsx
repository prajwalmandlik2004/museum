import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, MinusCircle, PlusCircle, RotateCcw, Share2 } from 'lucide-react';

const VirtualTour = () => {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">The Night Watch - Rembrandt</h1>
            <p className="text-gray-400">Rijksmuseum, Amsterdam</p>
          </div>
          <button className="flex items-center gap-2 text-[#C2AD8A] hover:text-[#9A8B70]">
            <Share2 className="w-5 h-5" />
            Share Tour
          </button>
        </div>

        <div className="relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden mb-8">
          <motion.img
            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
            alt="Virtual Tour"
            className="w-full h-full object-cover"
            style={{
              scale: zoom / 100,
              rotate: rotation,
            }}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
          />
          
          <div className="absolute bottom-4 right-4 flex gap-4">
            <div className="bg-black/70 rounded-full p-2 flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(50, zoom - 10))}
                className="text-white hover:text-[#C2AD8A]"
              >
                <MinusCircle className="w-6 h-6" />
              </button>
              <span className="text-white min-w-[3ch]">{zoom}%</span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 10))}
                className="text-white hover:text-[#C2AD8A]"
              >
                <PlusCircle className="w-6 h-6" />
              </button>
            </div>
            <button
              onClick={() => setRotation(rotation + 90)}
              className="bg-black/70 rounded-full p-2 text-white hover:text-[#C2AD8A]"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
            <button className="bg-black/70 rounded-full p-2 text-white hover:text-[#C2AD8A]">
              <Maximize2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">About This Masterpiece</h2>
            <p className="text-gray-300 mb-4">
              The Night Watch is Rembrandt's largest and most famous painting, completed in 1642.
              The painting depicts a group of civic guardsmen led by Captain Frans Banninck Cocq
              and Lieutenant Willem van Ruytenburch.
            </p>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Interactive Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🔍 Zoom in to explore intricate details</li>
                <li>🖱️ Drag to pan across the painting</li>
                <li>🔄 Rotate for different perspectives</li>
                <li>📱 Compatible with touch gestures</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Facts</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-400">Year</p>
                <p className="text-white font-semibold">1642</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-400">Dimensions</p>
                <p className="text-white font-semibold">363 × 437 cm</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-400">Medium</p>
                <p className="text-white font-semibold">Oil on canvas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
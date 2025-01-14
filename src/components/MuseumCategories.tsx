import React, { useState } from 'react';
import { MapPin, Clock, Users, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Museum {
  name: string;
  location: string;
  hours: string;
  visitors: string;
  contact: string;
  image: string;
}

interface Category {
  name: string;
  description: string;
  museums: Museum[];
}

const categories: Category[] = [
  {
    name: "Art Museums",
    description: "Explore world-renowned collections of paintings, sculptures, and decorative arts",
    museums: [
      {
        name: "Metropolitan Museum of Art",
        location: "New York City, USA",
        hours: "10:00 AM - 5:30 PM",
        visitors: "6.2M annually",
        contact: "+1 (212) 535-7710",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
      },
      {
        name: "Louvre Museum",
        location: "Paris, France",
        hours: "9:00 AM - 6:00 PM",
        visitors: "9.6M annually",
        contact: "+33 1 40 20 50 50",
        image: "https://images.unsplash.com/photo-1565060169194-19fabf37c0ce"
      }
    ]
  },
  {
    name: "Natural History",
    description: "Discover Earth's history through fossils, minerals, and wildlife exhibits",
    museums: [
      {
        name: "Smithsonian Natural History",
        location: "Washington DC, USA",
        hours: "10:00 AM - 5:30 PM",
        visitors: "4.2M annually",
        contact: "+1 (202) 633-1000",
        image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af"
      }
    ]
  },
  {
    name: "Science Museums",
    description: "Interactive exhibits showcasing technological innovations and scientific discoveries",
    museums: [
      {
        name: "Science Museum London",
        location: "London, UK",
        hours: "10:00 AM - 6:00 PM",
        visitors: "3.3M annually",
        contact: "+44 20 7942 4000",
        image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66"
      }
    ]
  }
];

const MuseumCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Museums by Category</h2>
          <p className="text-xl text-gray-600">Discover the world's finest museums across various disciplines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedCategory?.name === category.name
                  ? "bg-[#C2AD8A] text-white"
                  : "bg-white hover:bg-[#C2AD8A]/10"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className={`${
                selectedCategory?.name === category.name
                  ? "text-white/90"
                  : "text-gray-600"
              }`}>{category.description}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {selectedCategory.museums.map((museum) => (
                <div key={museum.name} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-[16/9]">
                    <img src={museum.image} alt={museum.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-4">{museum.name}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.hours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.visitors}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="w-5 h-5 text-[#C2AD8A]" />
                        <span>{museum.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MuseumCategories;
import React, { useState } from 'react';
import { Calendar, Filter, MapPin, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  category: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Renaissance Art Workshop",
    type: "Workshop",
    date: "2024-03-25",
    time: "14:00 - 16:00",
    location: "Metropolitan Museum of Art",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
    description: "Join our expert curators for an immersive workshop exploring Renaissance masterpieces.",
    category: "Art History"
  },
  {
    id: "2",
    title: "Ancient Egypt Exhibition Opening",
    type: "Exhibition",
    date: "2024-03-28",
    time: "10:00 - 20:00",
    location: "British Museum",
    image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af",
    description: "Be among the first to experience our new Ancient Egypt exhibition featuring never-before-seen artifacts.",
    category: "Ancient History"
  },
  {
    id: "3",
    title: "Modern Art Symposium",
    type: "Conference",
    date: "2024-04-02",
    time: "09:00 - 17:00",
    location: "MoMA",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66",
    description: "A day-long symposium featuring leading experts discussing modern art movements.",
    category: "Modern Art"
  }
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'Art History', 'Ancient History', 'Modern Art'];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
            <p className="text-xl text-gray-600">Discover exhibitions, workshops, and cultural events</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white rounded-lg p-2">
            <Filter className="w-5 h-5 text-[#C2AD8A]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border-none bg-transparent focus:ring-0 text-gray-600"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#C2AD8A] text-white px-3 py-1 rounded-full text-sm">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-[#C2AD8A]" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-[#C2AD8A]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#C2AD8A]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-[#C2AD8A] hover:text-white transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No events found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
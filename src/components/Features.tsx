import React from 'react';
import { Compass, Glasses, BookOpen, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Virtual Tours",
      description: "Explore world-renowned museums with our immersive 360° virtual tours"
    },
    {
      icon: <Glasses className="w-8 h-8" />,
      title: "AR/VR Experiences",
      description: "Step inside masterpieces with cutting-edge augmented and virtual reality"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Resources",
      description: "Access curriculum-aligned content and interactive learning materials"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Connect with art enthusiasts and educators worldwide"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Museums Like Never Before
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our innovative features that bring the world's greatest collections to your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#C2AD8A] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
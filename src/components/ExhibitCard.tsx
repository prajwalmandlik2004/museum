import React from 'react';
import { Clock, Users } from 'lucide-react';

interface ExhibitCardProps {
  image: string;
  title: string;
  museum: string;
  duration: string;
  viewers: string;
}

const ExhibitCard: React.FC<ExhibitCardProps> = ({ image, title, museum, duration, viewers }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden">
      <div className="aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300 mb-2">{museum}</p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {viewers}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitCard;
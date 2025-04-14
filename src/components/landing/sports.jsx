import React from 'react';
import {
  FaTrophy,
  FaFutbol,
  FaBaseballBall,
  FaHockeyPuck,
  FaVolleyballBall
} from 'react-icons/fa';

function Sports({ activeSport, setActiveSport }) {
  const sports = [
    { id: 'all', name: 'All Sports', icon: <FaTrophy size={24} /> },
    { id: 'soccer', name: 'Football', icon: <FaFutbol size={24} /> },
    { id: 'baseball', name: 'Baseball', icon: <FaBaseballBall size={24} /> },
    { id: 'hockey', name: 'Hockey', icon: <FaHockeyPuck size={24} /> },
    { id: 'volleyball', name: 'Volleyball', icon: <FaVolleyballBall size={24} /> },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      <div className="w-full flex justify-around items-center px-4 py-4 lg:justify-evenly lg:px-8">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setActiveSport(sport.id)}
            className={`flex flex-col items-center justify-center space-y-1 transition 
              ${activeSport === sport.id ? 'text-green-600 font-bold' : 'text-gray-600 hover:text-black'}
              lg:flex-row lg:space-y-0 lg:space-x-2 lg:text-base`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 lg:w-16 lg:h-16">
              {React.cloneElement(sport.icon, { size: 28 })}
            </div>
            <span className="text-sm font-bold lg:text-base">{sport.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sports;

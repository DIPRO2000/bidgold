import React, { useState } from 'react';

function Sports({ activeSport, setActiveSport }) {

  const sports = [
    { id: 'all', name: 'All Sports', icon: '🏆' },
    { id: 'soccer', name: 'FOOTBALL', icon: '⚽' },
    { id: 'baseball', name: 'BASEBALL', icon: '⚾' },
    { id: 'hockey', name: 'HOCKEY', icon: '🏒' },
    { id: 'volleyball', name: 'VOLLEYBALL', icon: '🏐' },
  ];

  return (
    <div className="bg-[#47B67C] rounded-md p-6 w-full max-w-screen-lg mx-auto shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">
        Fixtures of all Upcoming Matches
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => setActiveSport(sport.id)}
            className={`w-full flex flex-col items-center justify-center px-4 py-6 min-h-[120px] rounded-lg shadow-black transition
              ${activeSport === sport.id
                ? 'bg-[#208C53] text-white shadow-inner'
                : 'bg-white text-black shadow-md hover:bg-gray-200 dark:bg-[#7C7C7C]'}
            `}
          >
            <span className="text-3xl grayscale">{sport.icon}</span>
            <span className="mt-2 text-sm">{sport.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sports;

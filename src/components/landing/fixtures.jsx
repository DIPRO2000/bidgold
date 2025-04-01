import React, { useState } from "react";

const MatchCard = ({ league, time, team1, team2, score1, score2, odds, extraValue }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full sm:w-[95%] flex flex-col mx-auto mb-4 bg-white dark:bg-[#4C4C4C] dark:border-[#7C7C7C] transition-all">
      <div className="font-bold text-lg mb-2 text-gray-900 dark:text-[#7C7C7C]">{league}</div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        
        {/* Time Column */}
        <div className="flex flex-col items-center text-xs text-gray-500 dark:text-[#7C7C7C] w-full sm:w-1/6 mb-2 sm:mb-0">
          <span className="material-icons">schedule</span>
          <span>{time}</span>
        </div>

        {/* Team & Score Column */}
        <div className="flex flex-col w-full sm:w-2/6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-gray-300 dark:bg-[#7C7C7C] rounded-full"></span>
            <span className="font-semibold text-gray-900 dark:text-white">{team1}</span>
            <span className="ml-auto font-bold text-gray-900 dark:text-white">{score1}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-6 h-6 bg-gray-300 dark:bg-[#7C7C7C] rounded-full"></span>
            <span className="text-gray-600 dark:text-[#7C7C7C]">{team2}</span>
            <span className="ml-auto font-bold text-gray-900 dark:text-white">{score2}</span>
          </div>
        </div>

        {/* Odds Column */}
        <div className="flex justify-center w-full sm:w-2/6 gap-2 mt-2 sm:mt-0">
          {odds.map((odd, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-md text-sm font-semibold ${
                index === 0 ? "border border-green-500 text-green-500" : 
                index === 1 ? "border border-gray-400 text-gray-600 dark:text-[#7C7C7C]" : 
                "border border-red-500 text-red-500"
              }`}
            >
              {odd}
            </span>
          ))}
        </div>

        {/* Extra Column */}
        <div className="w-full sm:w-1/6 text-right font-semibold text-gray-700 dark:text-[#7C7C7C] mt-2 sm:mt-0">
          {extraValue}
        </div>
      </div>
    </div>
  );
};

const MatchFixtures = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Live", "Upcoming", "Finished"];

  const matchData = {
    "Live": [
      {
        league: "UEFA Champions League",
        time: "24 NOV 9:22 AM",
        team1: "Manchester United",
        team2: "Real Madrid",
        score1: 1,
        score2: 0,
        odds: ["2.45", "3.20", "2.80"],
        extraValue: "33 >"
      }
    ],
    "Upcoming": [
      {
        league: "La Liga",
        time: "26 NOV 8:00 PM",
        team1: "Barcelona",
        team2: "Atletico Madrid",
        score1: "-",
        score2: "-",
        odds: ["2.30", "3.40", "2.70"],
        extraValue: "21 >"
      }
    ],
    "Finished": [
      {
        league: "Bundesliga",
        time: "27 NOV 6:30 PM",
        team1: "Bayern Munich",
        team2: "Dortmund",
        score1: 4,
        score2: 2,
        odds: ["2.10", "3.50", "2.90"],
        extraValue: "37 >"
      }
    ]
  };

  matchData["All"] = [...matchData["Live"], ...matchData["Upcoming"], ...matchData["Finished"]];

  return (
    <div className="p-4 h-72 w-full max-w-5xl mx-auto overflow-y-scroll bg-gray-100 dark:bg-[#2D2D2D] transition-all">
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4 overflow-x-hidden">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-3 py-1 rounded-lg whitespace-nowrap ${
              selectedFilter === filter ? "bg-green-500 text-white" : "bg-white dark:bg-[#4C4C4C] dark:text-white"
            } transition-all`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Matches List */}
      <div className="overflow-hidden space-y-4">
        {matchData[selectedFilter].map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
    </div>
  );
};

export default MatchFixtures;

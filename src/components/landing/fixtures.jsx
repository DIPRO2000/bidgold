import { useState, useEffect } from "react";

const MatchCard = ({ league, sport, time, team1, team2, score1, score2, odds, extraValue }) => {
  return (
<<<<<<< HEAD
    <div className="border rounded-lg p-4 shadow-md w-full sm:w-[95%] flex flex-col mx-auto mb-4 bg-white dark:bg-[#4C4C4C] dark:border-[#7C7C7C] transition-all">
      <div className="font-bold text-lg mb-2 text-gray-900 dark:text-[#7C7C7C]">{league}</div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        
=======
    <div className="border rounded-lg p-4 shadow-md w-[95%] flex flex-col mx-auto mb-4">
      <div className="font-bold text-lg mb-2">{league} &nbsp;&nbsp;&nbsp;&nbsp; Sport: {sport.toUpperCase()}</div>
      <div className="flex flex-row justify-between items-center">
>>>>>>> cc8d5f520655e74c6ac24323bddc3089540f7dc8
        {/* Time Column */}
        <div className="flex flex-col items-center text-xs text-gray-500 dark:text-[#7C7C7C] w-full sm:w-1/6 mb-2 sm:mb-0">
          <span className="material-icons">schedule</span>
          <span>{time}</span>
        </div>

        {/* Team & Score Column */}
        <div className="flex flex-col w-full sm:w-2/6">
          <div className="flex items-center gap-2">
<<<<<<< HEAD
            <span className="w-6 h-6 bg-gray-300 dark:bg-[#7C7C7C] rounded-full"></span>
            <span className="font-semibold text-gray-900 dark:text-white">{team1}</span>
            <span className="ml-auto font-bold text-gray-900 dark:text-white">{score1}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-6 h-6 bg-gray-300 dark:bg-[#7C7C7C] rounded-full"></span>
            <span className="text-gray-600 dark:text-[#7C7C7C]">{team2}</span>
            <span className="ml-auto font-bold text-gray-900 dark:text-white">{score2}</span>
=======
            <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
            <span className="font-semibold">{team1}</span>
            <span className="ml-auto font-bold">{score1 ?? '-'}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
            <span className="text-gray-600">{team2}</span>
            <span className="ml-auto font-bold">{score2 ?? '-'}</span>
>>>>>>> cc8d5f520655e74c6ac24323bddc3089540f7dc8
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

<<<<<<< HEAD
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
=======
const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [filter, setFilter] = useState("all");
  const [bookmaker, setBookmaker] = useState("pinnacle");
  const [bookmakers, setBookmakers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/odds")
      .then((response) => response.json())
      .then((data) => {
        setMatches(data);
        const uniqueBookmakers = Array.from(new Set(data.flatMap(match => match.bookmakers.map(bm => bm.key))));
        setBookmakers(uniqueBookmakers);
      })
      .catch((error) => console.error("Error fetching matches:", error));
  }, []);

  const filteredMatches = matches.filter((match) => {
    if (filter === "all") return match.status !== "finished";
    const now = new Date();
    const matchTime = new Date(match.commence_time);
    return filter === "live" ? matchTime <= now : matchTime > now;
  });

  return (
    <div className="p-4 w-full max-w-5xl mx-auto">
      <div className="flex gap-2 mb-4 items-center">
        {['All', 'Live', 'Upcoming'].map((filterType) => (
          <button
            key={filterType}
            className={`px-3 py-1 rounded-lg ${filter === filterType.toLowerCase() ? "bg-green-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter(filterType.toLowerCase())}
>>>>>>> cc8d5f520655e74c6ac24323bddc3089540f7dc8
          >
            {filterType}
          </button>
        ))}
        
        {/* Bookmaker Selection */}
        <select
          className="px-3 py-1 rounded-lg bg-gray-200"
          value={bookmaker}
          onChange={(e) => setBookmaker(e.target.value)}
        >
          {bookmakers.map((bm) => (
            <option key={bm} value={bm}>{bm.charAt(0).toUpperCase() + bm.slice(1)}</option>
          ))}
        </select>
      </div>
<<<<<<< HEAD

      {/* Matches List */}
      <div className="overflow-hidden space-y-4">
        {matchData[selectedFilter].map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
=======
      <div className="overflow-x-auto h-[300px]  space-y-4">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => {
            const sport = match.sport_key.split("_")[0];
            const selectedBookmaker = match.bookmakers.find(bm => bm.key === bookmaker);
            return (
              <MatchCard
                key={match.id}
                league={match.sport_title}
                sport={sport}
                time={new Date(match.commence_time).toLocaleString()}
                team1={match.home_team}
                team2={match.away_team}
                score1={match.score1}
                score2={match.score2}
                odds={selectedBookmaker?.markets[0]?.outcomes.map((outcome) => outcome.price) || []}
                extraValue="-"
              />
            );
          })
        ) : (
          <p className="text-4xl text-center mt- font-bold">No {filter} matches found.</p>
        )}
>>>>>>> cc8d5f520655e74c6ac24323bddc3089540f7dc8
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MatchFixtures;
=======
export default MatchList;
>>>>>>> cc8d5f520655e74c6ac24323bddc3089540f7dc8

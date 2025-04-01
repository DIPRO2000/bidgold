import { useState, useEffect } from "react";

const MatchCard = ({ league, sport, time, team1, team2, score1, score2, odds, extraValue }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-[95%] flex flex-col mx-auto mb-4">
      <div className="font-bold text-lg mb-2">{league} &nbsp;&nbsp;&nbsp;&nbsp; Sport: {sport.toUpperCase()}</div>
      <div className="flex flex-row justify-between items-center">
        {/* Time Column */}
        <div className="flex flex-col items-center text-xs text-gray-500 w-1/6">
          <span className="material-icons">schedule</span>
          <span>{time}</span>
        </div>
        
        {/* Team & Score Column */}
        <div className="flex flex-col w-2/6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
            <span className="font-semibold">{team1}</span>
            <span className="ml-auto font-bold">{score1 ?? '-'}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
            <span className="text-gray-600">{team2}</span>
            <span className="ml-auto font-bold">{score2 ?? '-'}</span>
          </div>
        </div>
        
        {/* Odds Column */}
        <div className="flex justify-center w-2/6 gap-2">
          {odds.map((odd, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-md text-sm font-semibold ${index === 0 ? "border border-green-500 text-green-500" : index === 1 ? "border border-gray-400 text-gray-600" : "border border-red-500 text-red-500"}`}
            >
              {odd}
            </span>
          ))}
        </div>
        
        {/* Extra Column */}
        <div className="w-1/6 text-right font-semibold text-gray-700">
          {extraValue}
        </div>
      </div>
    </div>
  );
};

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
      <div className="overflow-x-auto max-h-[400px] space-y-4">
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
          <p>No {filter} matches found.</p>
        )}
      </div>
    </div>
  );
};

export default MatchList;

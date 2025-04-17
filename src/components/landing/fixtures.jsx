import { useState, useEffect } from "react";

const MatchCard = ({ league, time, team1, team2, score1, score2, odds }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full flex flex-col mb-4">
      <div className="font-bold text-lg mb-2 text-center md:text-left">
        {league}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Time Column */}
        <div className="flex flex-col items-center text-xs text-gray-500 w-full md:w-1/6 mb-2 md:mb-0">
          <span className="material-icons">schedule</span>
          <span>{time}</span>
        </div>

        {/* Team & Score Column */}
        <div className="flex flex-col w-full md:w-2/6">
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
        <div className="flex justify-center w-full md:w-2/6 gap-2 mt-2 md:mt-0">
          {odds.map((odd, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-md text-sm font-semibold ${
                index === 0
                  ? "border border-green-500 text-green-500"
                  : index === 1
                  ? "border border-gray-400 text-gray-600"
                  : "border border-red-500 text-red-500"
              }`}
            >
              {odd}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MatchList = ({ sport = "all" }) => {
  const [matches, setMatches] = useState([]);
  const [scores, setScores] = useState({}); // Score useState
  const [odds, setOdds] = useState([]); // Odds useState
  const [filter, setFilter] = useState("all");
  const [bookmaker, setBookmaker] = useState("unibet_eu");
  const [bookmakers, setBookmakers] = useState([]);

  useEffect(() => {
    // Set up WebSocket connection
    const socket = new WebSocket("ws://localhost:3000"); // Assuming WebSocket is running on port 3000

    socket.onopen = () => {
      console.log("🔗 WebSocket Connected");
    };

    socket.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data);
      
      if (type === "odds") {
        setMatches(data); // Update odds (matches)
      } else if (type === "scores") {
        setScores((prev) => ({
          ...prev,
          [data.sportKey]: data.scores,
        }));
      }
    };

    socket.onclose = () => {
      console.log("❌ WebSocket Disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  const filteredMatches = matches.filter((match) => {
    const matchSport = match.sport_key.split("_")[0];

    const matchesSport = sport === "all" || matchSport === sport;
    

    const now = new Date();
    const matchTime = new Date(match.commence_time);
    const matchesTime =
      filter === "all"
        ? match.status !== "finished"
        : filter === "live"
        ? matchTime <= now
        : matchTime > now;

    return matchesSport && matchesTime;
  });

  const handleBookmakerChange = (e) => {
    setBookmaker(e.target.value);
  };

  return (
    <div className="p-4 w-full max-w-7xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex flex-col md:flex-row gap-2 mb-4 items-center">
        {["All", "Live", "Upcoming"].map((filterType) => (
          <button
            key={filterType}
            className={`px-3 py-1 rounded-lg w-full dark:bg-[#4C4C4C] dark:text-white md:w-auto ${
              filter === filterType.toLowerCase()
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setFilter(filterType.toLowerCase())}
          >
            {filterType}
          </button>
        ))}

        {/* Bookmaker Selection */}
        <select
          className="px-3 py-1 dark:bg-[#4C4C4C] dark:text-white rounded-lg bg-gray-200 w-full md:w-auto"
          value={bookmaker}
          onChange={handleBookmakerChange}
        >
          {bookmakers.map((bm) => (
            <option key={bm} value={bm}>
              {bm.charAt(0).toUpperCase() + bm.slice(1)}
            </option>
          ))}
        </select>
      </div>


      {/* Horizontal Scrollable Match Cards */}
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => {
              const matchSport = match.sport_key.split("_")[0];
              const selectedBookmaker = match.bookmakers.find(
                (bm) => bm.key === bookmaker
              );

              const scoreData = scores[match.sport_key]?.find(
                (item) =>
                  item.home_team === match.home_team &&
                  item.away_team === match.away_team
              );

              // Optional chaining to avoid undefined errors
              const score1 = scoreData?.scores?.[0]?.score ?? "-";
              const score2 = scoreData?.scores?.[1]?.score ?? "-";

              return (
                <div key={match.id} className="min-w-full">
                  <MatchCard
                    league={match.sport_title}
                    time={new Date(match.commence_time).toLocaleString()}
                    team1={match.home_team}
                    team2={match.away_team}
                    score1={score1}
                    score2={score2}
                    odds={
                      selectedBookmaker?.markets[0]?.outcomes.map(
                        (outcome) => outcome.price
                      ) || []
                    }
                  />
                </div>
              );
            })
          ) : (
            <p className="text-4xl text-center w-full">
              No {filter !== "all" ? filter : ""}{" "}
              {sport !== "all"
                ? sport.charAt(0).toUpperCase() + sport.slice(1)
                : ""}{" "}
              matches found.
            </p>
          )}
        </div>
      
    </div>
    </div>
  );
};

export default MatchList;



import { useState, useEffect } from "react";

const MatchCard = ({ league, sport, time, team1, team2, score1, score2, odds, extraValue }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full md:w-[95%] flex flex-col mx-auto mb-4">
      <div className="font-bold text-lg mb-2 text-center md:text-left">
        {league} &nbsp;&nbsp;&nbsp;&nbsp; Sport: {sport.toUpperCase()}
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

        {/* Extra Column */}
        <div className="w-full md:w-1/6 text-right font-semibold text-gray-700 mt-2 md:mt-0">
          {extraValue}
        </div>
      </div>
    </div>
  );
};

const MatchList = ({ sport = "all" }) => {
  const [matches, setMatches] = useState([]);
  const [scores, setScores] = useState({});       //Score useState
  const [filter, setFilter] = useState("all");
  const [bookmaker, setBookmaker] = useState("unibet_eu");
  const [bookmakers, setBookmakers] = useState([]);
  let matchesSport;

  useEffect(() => {
    fetch("http://localhost:3000/api/odds")
      .then((response) => response.json())
      .then((data) => {
        setMatches(data);
        const uniqueBookmakers = Array.from(
          new Set(data.flatMap((match) => match.bookmakers.map((bm) => bm.key)))
        );
        setBookmakers(uniqueBookmakers);
      })
      .catch((error) => console.error("Error fetching matches:", error));
  }, []);

  //Score Fetching from Backend
  useEffect(() => {
    const liveSportKeys = [...new Set(
      matches
        .filter((match) => {
          const now = new Date();
          const matchTime = new Date(match.commence_time);
          return matchTime <= now; // live
        })
        .map((match) => match.sport_key)
    )];

   console.log("Live Sport Keys:", liveSportKeys);
  
    liveSportKeys.forEach((key) => {
      fetch(`http://localhost:3000/api/scores/${key}`)
        .then((res) => res.json())
        .then((data) => {
          setScores(prev => ({ ...prev, [key]: data }));
        })
        .catch((err) => console.error(`Score fetch failed for ${key}:`, err));
    });
  }, [matches]);


  

  const filteredMatches = matches.filter((match) => {
    const matchSport = match.sport_key.split("_")[0];

    matchesSport = sport === "all" || matchSport === sport;

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

  return (
    <div className="p-4 w-full max-w-5xl mx-auto">
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
          onChange={(e) => setBookmaker(e.target.value)}
        >
          {bookmakers.map((bm) => (
            <option key={bm} value={bm}>
              {bm.charAt(0).toUpperCase() + bm.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto h-full min-h-40 space-y-4">
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
              <MatchCard
                key={match.id}
                league={match.sport_title}
                sport={matchSport}
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
                extraValue="-"
              />
            );
          })
        ) : (
          <p className="text-4xl text-center">No {filter!== "all" ? filter : ""} {sport !== "all" ? sport.charAt(0).toUpperCase() + sport.slice(1) : ""} matches found.</p>

        )}
      </div>
    </div>
  );
};

export default MatchList;

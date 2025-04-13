import { useState, useEffect } from "react";

const MatchList = ({ sport = "all" }) => {
  const [matches, setMatches] = useState([]);
  const [scores, setScores] = useState({});
  const [filter, setFilter] = useState("all");
  const [bookmaker, setBookmaker] = useState("unibet_eu");
  const [bookmakers, setBookmakers] = useState([]);
  const [socket, setSocket] = useState(null); // State to store WebSocket connection

  let matchesSport;

  // Fetch odds and bookmakers initially
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

  // Fetch scores through WebSocket
  useEffect(() => {
    const socketConnection = new WebSocket("ws://localhost:8080"); // Your WebSocket server URL

    socketConnection.onopen = () => {
      console.log("WebSocket connection established!");
    };

    socketConnection.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data);

      if (type === "odds") {
        setMatches(data); // Update odds
      } else if (type === "scores") {
        setScores((prevScores) => ({
          ...prevScores,
          [data.sportKey]: data.scores,
        })); // Update scores
      }
    };

    socketConnection.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketConnection.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Store the WebSocket connection in state
    setSocket(socketConnection);

    // Cleanup WebSocket on component unmount
    return () => {
      if (socketConnection) {
        socketConnection.close();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Filtering the matches based on sport and filter (live/upcoming)
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
          <p className="text-4xl text-center">No {filter !== "all" ? filter : ""} {sport !== "all" ? sport.charAt(0).toUpperCase() + sport.slice(1) : ""} matches found.</p>
        )}
      </div>
    </div>
  );
};

export default MatchList;

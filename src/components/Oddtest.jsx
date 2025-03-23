import { useState, useEffect } from "react";
import axios from "axios";

const Oddtest = () => {
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/odds"); // Fetch from backend
        setOdds(response.data);
      } catch (err) {
        setError("Failed to fetch odds");
      } finally {
        setLoading(false);
      }
    };

    fetchOdds();
  }, []);

  if (loading) return <p>Loading odds...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Betting Odds</h2>
      {odds.length === 0 ? (
        <p>No odds available</p>
      ) : (
        odds.map((match) => (
          <div key={match.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h3>{match.sport_title}</h3>
            <p>
              <strong>{match.home_team}</strong> vs <strong>{match.away_team}</strong>
            </p>
            <p>Start Time: {new Date(match.commence_time).toLocaleString()}</p>

            {match.bookmakers.map((bookmaker) => (
              <div key={bookmaker.key}>
                <h4>📌 {bookmaker.title}</h4>
                {bookmaker.markets.map((market) =>
                  market.key === "h2h" ? (
                    <div key={market.key}>
                      <h5>Head-to-Head Odds:</h5>
                      {market.outcomes.map((outcome) => (
                        <p key={outcome.name}>
                          {outcome.name}: <strong>{outcome.price}</strong>
                        </p>
                      ))}
                    </div>
                  ) : null
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Oddtest;

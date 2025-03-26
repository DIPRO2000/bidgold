import { useState, useEffect } from "react";

const BettingOdds = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    fetch("https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=YOUR_API_KEY&regions=us&markets=h2h,totals,spreads")
      .then(response => response.json())
      .then(data => setOdds(data))
      .catch(error => console.error("Error fetching odds:", error));
  }, []);

  return (
    <div>
      <h2>Betting Odds</h2>
      {odds.map((match, index) => (
        <div key={index}>
          <h3>{match.bookmaker}</h3>
          {match.markets.map((market) => (
            <div key={market.key}>
              {market.outcomes.map((outcome) => (
                <p key={outcome.name}>{outcome.name}: {outcome.price}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BettingOdds;

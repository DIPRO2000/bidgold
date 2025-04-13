import WebSocket, { WebSocketServer } from 'ws';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
const SCORE_BASE_URL = 'https://api.the-odds-api.com/v4/sports';
const ODDS_URL = 'https://api.the-odds-api.com/v4/sports/upcoming/odds';

const connectedClients = new Set();
let latestOdds = [];
let latestScores = {};
let previousOdds = [];
let previousScores = {};

const REGIONS = ['eu', 'us', 'uk'];
const ALLOWED_SPORTS = ['soccer', 'baseball', 'volleyball', 'hockey'];

const broadcast = (type, data) => {
  const payload = JSON.stringify({ type, data });
  for (const client of connectedClients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  }
};

const hasOddsChanged = (newOdds, oldOdds) =>
  JSON.stringify(newOdds) !== JSON.stringify(oldOdds);

const hasScoresChanged = (newScores, oldScores) =>
  JSON.stringify(newScores) !== JSON.stringify(oldScores);

const fetchOdds = async () => {
  try {
    const allRegionData = await Promise.all(
      REGIONS.map(region =>
        axios
          .get(ODDS_URL, {
            params: {
              apiKey: API_KEY,
              regions: region,
              markets: 'h2h',
              oddsFormat: 'decimal',
              dateFormat: 'iso',
            },
          })
          .then(res => res.data)
          .catch(() => [])
      )
    );

    const combined = allRegionData.flat();
    const uniqueMatchesMap = new Map();

    combined.forEach(match => {
      if (!uniqueMatchesMap.has(match.id)) {
        uniqueMatchesMap.set(match.id, match);
      }
    });

    const filtered = Array.from(uniqueMatchesMap.values()).filter(game =>
      ALLOWED_SPORTS.some(sport => game.sport_key.includes(sport))
    );

    if (hasOddsChanged(filtered, previousOdds)) {
      latestOdds = filtered;
      previousOdds = filtered;
      broadcast('odds', latestOdds);
      console.log(`[🟢] Odds updated: ${filtered.length} matches`);
    } else {
      console.log(`[✅] Odds have not changed`);
    }
  } catch (err) {
    console.error('[❌] Failed to fetch odds:', err.message);
  }
};


//Fetch Live Scores
const fetchScores = async () => {
  const now = new Date();

  // Step 1: Filter live matches based on commence_time
  const liveMatches = latestOdds.filter(match => {
    const matchTime = new Date(match.commence_time);
    return matchTime <= now; // Match has started
  });

  // Step 2: Get unique sportKeys from live matches
  const liveSportKeys = [...new Set(liveMatches.map(match => match.sport_key))];

  for (const sportKey of liveSportKeys) {
    try {
      const url = `${SCORE_BASE_URL}/${sportKey}/scores/?apiKey=${API_KEY}`;
      const response = await axios.get(url);
      const allScores = response.data;

      // Step 3: Filter only live (not completed) matches
      const liveScores = allScores.filter(match => match.completed === false);

      latestScores[sportKey] = liveScores;

      // Log the scores to the console for debugging
      console.log(`[🟢] Live scores for ${sportKey}:`);
liveScores.forEach(match => {
  if (match.scores !== null) {
    console.log(
      `Match: ${match.home_team} vs ${match.away_team}, ` +
      `Score: ${match.scores.home} - ${match.scores.away}`
    );
  }
});

      if (hasScoresChanged(liveScores, previousScores[sportKey])) {
        previousScores[sportKey] = liveScores;
        broadcast('scores', { sportKey, scores: liveScores });
        console.log(`[🟢] Scores updated for ${sportKey}: ${liveScores.length}`);
      } else {
        console.log(`[✅] Scores for ${sportKey} have not changed`);
      }
    } catch (err) {
      console.error(`[❌] Failed to fetch scores for ${sportKey}:`, err.message);
    }
  }

  if (liveSportKeys.length === 0) {
    console.log("[ℹ️] No live matches found to fetch scores.");
  }
};


// ✅ This is the missing piece:
const setupWebSocket = (server) => {
  const wss = new WebSocketServer({ server });

  wss.on('connection', ws => {
    console.log('🔗 New client connected');
    connectedClients.add(ws);

    ws.send(JSON.stringify({ type: 'odds', data: latestOdds }));
    ws.send(JSON.stringify({ type: 'scores', data: latestScores }));

    ws.on('close', () => {
      console.log('❌ Client disconnected');
      connectedClients.delete(ws);
    });
  });

  setInterval(fetchOdds, 60 * 1000);
  setInterval(fetchScores, 40 * 1000);

  console.log('🌐 WebSocket setup initialized on same server');
};

// ✅ Export the function to be used in server.js
export { setupWebSocket };

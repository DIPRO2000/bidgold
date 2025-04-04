import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

const API_URL = "https://api.the-odds-api.com/v4/sports/upcoming/odds";
const API_KEY = process.env.API_KEY;

const ALLOWED_SPORTS = ["soccer", "baseball", "volleyball", "hockey"];

const TOP_LEAGUES = [
  "FIFA", "UEFA Champions League", "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Eredivisie",
  "MLB", "NPB", "KBO",
  "NHL", "KHL", "SHL", "Liiga",
  "FIVB", "CEV Champions League", "Volleyball Nations League"
];

const REGIONS = ["eu", "uk", "us"];

export const getOdds = async () => {
  try {
    const allRegionData = await Promise.all(
      REGIONS.map(region =>
        axios.get(API_URL, {
          params: {
            apiKey: API_KEY,
            regions: region,
            markets: "h2h",
            oddsFormat: "decimal",
            dateFormat: "iso",
          }
        }).then(res => res.data)
          .catch(err => {
            console.error(`❌ Error fetching data for region ${region}:`, err.message);
            return [];
          })
      )
    );

    // 🔄 Combine all region data into a single array
    let combinedMatches = allRegionData.flat();

    console.log(`🔹 Total Matches Fetched: ${combinedMatches.length}`);

    // ✅ Deduplicate matches based on `id`
    const uniqueMatchesMap = new Map();
    combinedMatches.forEach(match => {
      if (!uniqueMatchesMap.has(match.id)) {
        uniqueMatchesMap.set(match.id, match);
      }
    });

    let uniqueMatches = Array.from(uniqueMatchesMap.values());

    // ✅ Filter for allowed sports only
    const filteredMatches = uniqueMatches.filter((game) =>
      ALLOWED_SPORTS.some(sport => game.sport_key.includes(sport))
    );

    console.log("✅ Filtered Matches:", filteredMatches.length);

    // ✅ Prioritize top leagues
    filteredMatches.sort((a, b) => {
      const aPriority = TOP_LEAGUES.some(league => a.sport_title.includes(league)) ? 1 : 0;
      const bPriority = TOP_LEAGUES.some(league => b.sport_title.includes(league)) ? 1 : 0;
      return bPriority - aPriority;
    });

    return filteredMatches.length > 0 ? filteredMatches : [{ message: "No upcoming games for allowed sports." }];
  } catch (error) {
    console.error("❌ Error fetching odds:", error.message);
    return [{ error: "Failed to fetch data" }];
  }
};

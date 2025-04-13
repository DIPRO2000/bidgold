import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.the-odds-api.com/v4/sports/upcoming/odds";
const API_KEY = process.env.API_KEY;

const ALLOWED_SPORTS = ["soccer", "baseball", "volleyball", "hockey"];

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

    return filteredMatches.length > 0 ? filteredMatches : [{ message: "No upcoming games for allowed sports." }];
  } catch (error) {
    console.error("❌ Error fetching odds:", error.message);
    return [{ error: "Failed to fetch data" }];
  }
};

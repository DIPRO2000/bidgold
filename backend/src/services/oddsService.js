import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.the-odds-api.com/v4/sports/upcoming/odds";
const API_KEY = process.env.API_KEY;

// ✅ Allowed Sports
const ALLOWED_SPORTS = ["soccer", "baseball", "volleyball", "hockey"];

// ✅ Prioritized Top Leagues (Will Appear First)
const TOP_LEAGUES = [
    "FIFA", "UEFA Champions League", "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Eredivisie", // ⚽ Soccer
    "MLB", "NPB", "KBO", // ⚾ Baseball
    "NHL", "KHL", "SHL", "Liiga", // 🏒 Hockey
    "FIVB", "CEV Champions League", "Volleyball Nations League" // 🏐 Volleyball
];

export const getOdds = async () => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY,
                regions: "eu", // ✅ Europe only
                markets: "h2h",
                oddsFormat: "decimal",
                dateFormat: "iso",
            }
        });

        let allGames = response.data;
        console.log("🔹 API Response:", allGames.length, "matches received");

        // ✅ Filter for allowed sports only
        let filteredSports = allGames.filter((game) =>
            ALLOWED_SPORTS.some(sport => game.sport_key.includes(sport))
        );

        console.log("✅ Filtered Matches:", filteredSports.length, "matches found");

        // ✅ Sort: Move Top Leagues to the Front
        filteredSports.sort((a, b) => {
            const aPriority = TOP_LEAGUES.some(league => a.sport_title.includes(league)) ? 1 : 0;
            const bPriority = TOP_LEAGUES.some(league => b.sport_title.includes(league)) ? 1 : 0;
            return bPriority - aPriority; // Move top leagues first
        });

        return filteredSports.length > 0 ? filteredSports : [{ message: "No upcoming games for soccer, baseball, volleyball, or hockey." }];
    } catch (error) {
        console.error("❌ Error fetching odds:", error.message);
        return [{ error: "Failed to fetch data" }];
    }
};

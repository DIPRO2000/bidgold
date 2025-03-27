import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.the-odds-api.com/v4/sports/upcoming/odds";
const API_KEY = process.env.API_KEY;

export const getOdds = async () => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY,
                regions: "us",
                markets: "h2h",
                oddsFormat: "decimal",    //ODDS TYPE:DECIMAL or AMERICAN
                dateFormat: "iso",
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching odds:", error.message);
        return null;
    }
};

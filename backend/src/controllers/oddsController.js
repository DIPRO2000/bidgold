import { getOdds } from "../services/oddsService.js";

export const fetchOdds = async (req, res) => {
    try {
        const games = await getOdds();
        if (!games) return res.status(500).json({ message: "Failed to fetch odds" });

        res.json(games);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

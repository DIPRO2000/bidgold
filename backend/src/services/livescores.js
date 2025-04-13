import express from "express";
import dotenv from "dotenv"
const router = express.Router();

dotenv.config()
const API_KEY =process.env.API_KEY

// GET /api/scores/:sportKey
router.get('/:sportKey', async (req, res) => {
  const { sportKey } = req.params;

  if (!sportKey) {
    return res.status(400).json({ error: "sportKey is required" });
  }

  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sportKey}/scores/?daysFrom=1&apiKey=${API_KEY}`
    );
    const data = await response.json();

    console.log(`[${sportKey}] Fetched ${data.length} scores`);

    // Read headers
    const remaining = response.headers.get('x-requests-remaining');
    const used = response.headers.get('x-requests-used');
    const last = response.headers.get('x-requests-last');

    console.log("Usage → Remaining:", remaining, "Used:", used, "Last Cost:", last);

    res.json(data);
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ error: "Failed to fetch scores" });
  }
});

export default router;

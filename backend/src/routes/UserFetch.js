import express from "express";
import User from "../models/User.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/userfetch", async (req, res) => {
  const { agentId } = req.body;

  if (!agentId) {
    return res.status(400).json({ message: "agentId is required" });
  }

  try {
    // Convert agentId to ObjectId correctly using 'new'
    const agentObjectId = new mongoose.Types.ObjectId(agentId);

    // Fetch users where createdBy matches the agentId
    const users = await User.find({ createdBy: agentObjectId });

    // If no users are found
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found for this agent" });
    }

    // Send the list of users as a response
    res.json(users);
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

export default router;

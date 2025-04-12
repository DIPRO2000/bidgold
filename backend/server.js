import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./src/routes/auth.js";      
import oddsRoutes from "./src/routes/oddsRoutes.js";  // Import new odds route
import scoreRoutes from "./src/services/livescores.js"  //Import Scores of Live Matches
import feedbackRoutes from "./src/routes/feedbackRoutes.js"   //Import new Feedbacks
import userSettingsRoute from "./src/routes/settings.js"      //Import User Edit Settings
import AgentAuthRoutes from "./src/routes/AgentAuth.js"


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // Allow both React and Vite
  credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/odds", oddsRoutes);  // New odds route
app.use("/api/scores",scoreRoutes);
app.use("/api",feedbackRoutes);    //New Feedbacks from Users
app.use("/api/user",userSettingsRoute);   //Edit User Profil
app.use("/api/agent",AgentAuthRoutes);    //Agent Login and Registration



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Database Connection Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port:${PORT}`));

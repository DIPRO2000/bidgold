import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import http from "http"; // 🔄 Needed for WebSocket
import { setupWebSocket } from "./src/services/realtime.js"; // 🔌 WebSocket setup

// Routes
import authRoutes from "./src/routes/auth.js";
import oddsRoutes from "./src/routes/oddsRoutes.js";
import scoreRoutes from "./src/services/livescores.js";
import feedbackRoutes from "./src/routes/feedbackRoutes.js";
import userSettingsRoute from "./src/routes/settings.js";
import AgentAuthRoutes from "./src/routes/AgentAuth.js";
import UserFetch from "./src/routes/UserFetch.js";

// Load environment variables
dotenv.config();

const app = express();

// 🔧 Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // React & Vite
  credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));

// 📦 Routes
app.use("/api/auth", authRoutes);
app.use("/api/odds", oddsRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api", feedbackRoutes);
app.use("/api/user", userSettingsRoute);
app.use("/api/agent", AgentAuthRoutes);
app.use("/api",UserFetch);

// 🌐 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// 🚀 HTTP + WebSocket Server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app); // ⬅️ Create HTTP server

// Attach WebSocket functionality to the server
setupWebSocket(server);  // ⬅️ Set up WebSocket for the server

// Start the HTTP server (Express API)
server.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});

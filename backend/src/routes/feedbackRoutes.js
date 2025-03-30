import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { feedback } from "../controllers/feedController.js";

const router = express.Router();

router.post("/feedback", authMiddleware, feedback); // Protected feedback route

export default router;
  
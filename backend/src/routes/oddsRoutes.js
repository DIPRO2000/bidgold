import express from "express";
import { fetchOdds } from "../controllers/oddsController.js";

const router = express.Router();

router.get("/", fetchOdds);

export default router;

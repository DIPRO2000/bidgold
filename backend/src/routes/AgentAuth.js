import express from "express";
import { AgentRegister,AgentLogin } from "../controllers/AgentAuthController.js";

const router=express.Router();

router.post("/register",AgentRegister);
router.post("/login",AgentLogin);

export default router;
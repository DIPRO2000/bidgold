import express from "express"
import { AgentUserTransaction , getTransactionsOfUser } from "../controllers/AgentTransactionController.js";

const router=express.Router();

router.post("/agentuser",AgentUserTransaction);
router.get("/usertransdetails/:userId",getTransactionsOfUser);

export default router;

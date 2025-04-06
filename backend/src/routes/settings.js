import express from "express";
const router = express.Router();
import updateUser from "../controllers/userController.js";

// PUT request to update user info
router.patch("/update", updateUser);

export default router;
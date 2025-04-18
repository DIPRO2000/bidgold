import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import crypto from "crypto";
import dotenv from "dotenv";
 
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables!");
}

export const register = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // 👈 Log full body

    const { firstName, lastName, username, password, agentId } = req.body;

    const createdBy = agentId;
    if (!createdBy) {
      return res.status(401).json({ message: "Unauthorized. Agent ID missing." });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User with this username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      username,
      password: hashedPassword,
      createdBy,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error("Registration error:", error); // 👈 Print full error
    res.status(500).json({ error: "Internal server error YES" });
  }
};



// User Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });
    

    
    

    // Return user info with token
    res.json({
      token: `Bearer ${token}`, // Adding Bearer prefix
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

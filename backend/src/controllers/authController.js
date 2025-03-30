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

// User Registration
export const register = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, phone, gender, username, email, password } = req.body;

    // Validate password
    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // Convert "DD-MMM-YYYY" format to Date
    const dobParts = dateOfBirth.split(" ");
    const formattedDOB = new Date(`${dobParts[1]} ${dobParts[0]}, ${dobParts[2]}`);
    if (isNaN(formattedDOB)) {
      return res.status(400).json({ message: "Invalid date format. Use DD-MMM-YYYY (e.g., 15-Mar-1995)" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email or phone number already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({
      firstName,
      lastName,
      dateOfBirth: formattedDOB,
      phone,
      gender,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
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

    // Generate Gravatar URL
    const emailHash = crypto.createHash("md5").update(user.email.trim().toLowerCase()).digest("hex");
    const profilePic = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;

    // Return user info with token
    res.json({
      token: `Bearer ${token}`, // Adding Bearer prefix
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePic,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

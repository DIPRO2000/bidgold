import Feedback from "../models/feedback.js";
import User from "../models/User.js";

export const feedback = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find user email from the database
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { feedback } = req.body;

    // Create feedback entry (Allow multiple feedbacks)
    const newFeedback = new Feedback({
      username: user.username,
      email: user.email, // Ensure email is saved
      feedback,
    });

    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Feedback error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

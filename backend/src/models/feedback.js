import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    username: { type: String, required: true }, // Remove unique constraint
    email: { type: String, required: true }, // Add email field
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", FeedbackSchema);

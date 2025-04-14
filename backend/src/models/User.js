import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 100 },
    
    // Add this field to track the creator (agent)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // or String if you're not using ObjectId for agents
      ref: "User", // assuming agents are also in the User model
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);



import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 100 }, // User balance, defaulting to 100
    deposit: {type:Number, default:0},
    payout:  {type:Number, default:0}
  },
  { timestamps: true }
);

export default mongoose.model("Agent", AgentSchema);
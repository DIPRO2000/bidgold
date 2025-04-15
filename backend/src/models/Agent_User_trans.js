import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  },
  Type: {
    type: String,
    enum: ['deposit', 'withdrawal'],
    required: true
  }
});

const Transaction = mongoose.model('Agent-User_Transaction', transactionSchema);

export default Transaction;

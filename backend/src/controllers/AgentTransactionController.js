import Transaction from '../models/Agent_User_trans.js';
import User from '../models/User.js';
import Agent from '../models/Agent.js';

export const AgentUserTransaction = async (req, res) => {
  try {
    const { agentId, userId, amount, Type } = req.body;

    console.log('🟡 Received Transaction:', req.body);

    if (!['deposit', 'withdrawal'].includes(Type)) {
      return res.status(400).json({ error: 'Invalid transaction type' });
    }

    const agent = await Agent.findById(agentId);
    const user = await User.findById(userId);

    if (!agent || !user) {
      return res.status(404).json({ error: 'Agent or User not found' });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }

    if (Type === 'deposit') {
      if (agent.balance < amount) {
        return res.status(400).json({ error: 'Agent has insufficient balance' });
      }

      agent.balance -= amount;
      user.balance += amount;

    } else if (Type === 'withdrawal') {
      if (user.balance < amount) {
        return res.status(400).json({ error: 'User has insufficient balance' });
      }

      agent.balance += amount;
      user.balance -= amount;
    }

    await agent.save();
    await user.save();

    const transaction = new Transaction({
      agentId,
      userId,
      amount,
      Type,
      Date: new Date(),
    });

    const savedTransaction = await transaction.save();
    console.log('✅ Saved Transaction:', savedTransaction);

    res.status(201).json({
      message: `Transaction ${Type} recorded successfully`,
      transaction: savedTransaction,
      agent: {
        id: agent._id,
        firstName: agent.firstName,
        lastName: agent.lastName,
        balance:agent.balance,
        deposit:agent.deposit,
        payout:agent.payout
      },
    });

  } catch (error) {
    console.error('❌ Transaction Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};



// Get all transactions (optional)
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ time: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

// Get transactions by user (optional)
export const getTransactionsOfUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const transactions = await Transaction.find({ userId }).sort({ time: -1 });

    if (transactions.length === 0) {
      return res.status(404).json({ message: 'No transactions found for this user' });
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error('❌ Error fetching user transactions:', error);
    res.status(500).json({ error: 'Failed to fetch user transactions' });
  }
};

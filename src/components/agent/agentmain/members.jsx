import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import memberData from '../../../data/memberData';
import NavbarManager from '../Navbarmanager';

function MemberDetails() {
  const { id } = useParams();
  const member = memberData.find((m) => m.id === parseInt(id));

  const [transactions, setTransactions] = useState(member.transactions);
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('Deposit');
  const [activeTab, setActiveTab] = useState('transactions');

  const handleAddTransaction = () => {
    if (!amount) return;
    const newTransaction = {
      time: new Date().toLocaleTimeString(),
      amount: parseFloat(amount),
      type: transactionType,
    };
    setTransactions([...transactions, newTransaction]);
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#2D2D2D] dark:text-[#D9D9D9]">
      <NavbarManager />
      <div className="container mx-auto px-4 py-8">
        <span className=" inline-block text-3xl just font-bold  dark:text-[#F6BA02] mt-20 mb-6 shadow-lg rounded-lg p-4 bg-gradient-to-r from-[#47B67C] to-[#208C53] text-white">
          Member Dashboard: {member.name}
        </span>

        {/* Tabs */}
        <div className="flex space-x-6 mb-8 border-b border-[#208C53] dark:border-[#444]">
          <button
            className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
              activeTab === 'transactions'
                ? 'border-b-4 border-[#208C53] dark:border-[#208C53] text-[#208C53] dark:text-[#F6BA02] bg-[#E8F5E9] dark:bg-[#388E3C]'
                : 'text-gray-600 dark:text-gray-400 hover:bg-[#E8F5E9] dark:hover:bg-[#388E3C]'
            }`}
            onClick={() => setActiveTab('transactions')}
          >
            Transaction History
          </button>
          <button
            className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
              activeTab === 'bets'
                ? 'border-b-4 border-[#208C53] dark:border-[#208C53] text-[#208C53] dark:text-[#F6BA02] bg-[#E8F5E9] dark:bg-[#388E3C]'
                : 'text-gray-600 dark:text-gray-400 hover:bg-[#E8F5E9] dark:hover:bg-[#388E3C]'
            }`}
            onClick={() => setActiveTab('bets')}
          >
            Bet History
          </button>
          <button
            className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
              activeTab === 'add'
                ? 'border-b-4 border-[#208C53] dark:border-[#208C53] text-[#208C53] dark:text-[#F6BA02] bg-[#E8F5E9] dark:bg-[#388E3C]'
                : 'text-gray-600 dark:text-gray-400 hover:bg-[#E8F5E9] dark:hover:bg-[#388E3C]'
            }`}
            onClick={() => setActiveTab('add')}
          >
            Add Transaction
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'transactions' && (
          <div className="mb-10 bg-[#F5F5F5] dark:bg-[#3A3A3A] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#47B67C] dark:text-[#208C53] mb-4">
              Transaction History
            </h2>
            <table className="min-w-full rounded-lg border-[#208C53] border-2  bg-white dark:bg-[#2D2D2D] shadow-lg">
              <thead className="bg-[#D9D9D9] text-black dark:bg-[#4C4C4C] dark:text-[#D9D9D9]">
                <tr>
                  <th className="px-6 py-3 text-left">Time</th>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700 hover:bg-[#f1f1f1] dark:hover:bg-[#424242] transition-all duration-300">
                    <td className="px-6 py-4">{tx.time}</td>
                    <td className="px-6 py-4 text-[#208C53]">${tx.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">{tx.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'bets' && (
          <div className="mb-10 bg-[#F5F5F5] dark:bg-[#3A3A3A] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#47B67C] dark:text-[#208C53] mb-4">
              Bet History
            </h2>
            <table className="min-w-full  rounded-lg border-[#208C53] border-2 bg-white dark:bg-[#2D2D2D] shadow-lg">
              <thead className="bg-[#D9D9D9] text-black dark:bg-[#4C4C4C] dark:text-[#D9D9D9]">
                <tr>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Game</th>
                  <th className="px-6 py-3 text-left">Side</th>
                  <th className="px-6 py-3 text-left">Result</th>
                </tr>
              </thead>
              <tbody>
                {member.bets.map((bet, index) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700 hover:bg-[#f1f1f1] dark:hover:bg-[#424242] transition-all duration-300">
                    <td className="px-6 py-4 text-[#208C53]">${bet.amount}</td>
                    <td className="px-6 py-4">{bet.game}</td>
                    <td className="px-6 py-4">{bet.side}</td>
                    <td className="px-6 py-4">{bet.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="mb-10 bg-[#F5F5F5] dark:bg-[#3A3A3A] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#47B67C] dark:text-[#208C53] mb-4">
              Add Transaction
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
              <input
                type="number"
                placeholder="Amount"
                className="border px-6 py-3 rounded-lg bg-white dark:bg-[#4C4C4C] dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#208C53] transition-all duration-300"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                className="border px-6 py-3 rounded-lg bg-white dark:bg-[#4C4C4C] dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#208C53] transition-all duration-300"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="Deposit">Deposit</option>
                <option value="Withdrawal">Withdrawal</option>
              </select>
              <button
                onClick={handleAddTransaction}
                className="bg-[#208C53] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#186b41] focus:outline-none focus:ring-2 focus:ring-[#208C53] transition-all duration-300"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberDetails;

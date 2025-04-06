import React from 'react'
import { Wallet, DollarSign, PiggyBank, Send, Clock } from "lucide-react";

function Transaction() {
  const data = [
    { icon: <Wallet size={28} />, title: "Wallet balance", value: "$121.20" },
    { icon: <DollarSign size={28} />, title: "TICKETS LEFT", value: "172" },
    { icon: <PiggyBank size={28} />, title: "TOTAL MEMBERS", value: "1893" },
    { icon: <Send size={28} />, title: "REVENUE", value: "$658.14" },
  ];

  const transactions = [
    {
      date: '24 NOV',
      time: '9:22 AM',
      description: 'Receipt of payment',
      amount: '350.22 USD',
      gateway: 'E-Wallets',
      transactionId: 'Trn_6837876881',
    },
    {
      date: '24 NOV',
      time: '9:22 AM',
      description: 'Deposit',
      amount: '350.22 USD',
      gateway: 'E-Wallets',
      transactionId: 'Trn_6837876881',
    },
    {
        date: '24 NOV',
        time: '9:22 AM',
        description: 'Deposit',
        amount: '350.22 USD',
        gateway: 'E-Wallets',
        transactionId: 'Trn_6837876881',
      },
    {
      date: '24 NOV',
      time: '9:22 AM',
      description: 'E-Transfer',
      amount: '350.22 USD',
      gateway: 'E-Wallets',
      transactionId: 'Trn_6837876881',
    },
    {
      date: '24 NOV',
      time: '9:22 AM',
      description: 'Deposit',
      amount: '350.22 USD',
      gateway: 'E-Wallets',
      transactionId: 'Trn_6837876881',
    },
  ];

  return (
    <div>
      {/* Stats Cards */}
      <div className='flex justify-center'>
      <div className="bg-[#208C53] w-2/3  dark:bg-[#2D2D2D] rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] shadow-md shadow-black p-6 rounded-xl flex flex-col items-start space-y-2"
            >
              <div className="text-[#F6BA02]">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-[#F6BA02] text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white dark:bg-[#2D2D2D] rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black dark:text-white">TRANSACTION HISTORY</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">VIEW ALL</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="py-2 px-4">PAYMENT DESCRIPTION</th>
                <th className="py-2 px-4">BET</th>
                <th className="py-2 px-4">GATEWAY</th>
                <th className="py-2 px-4">TRANSACTION ID</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="bg-white dark:bg-[#3C3C3C] shadow-md mb-2 rounded-lg">
                  <td className="flex items-center gap-3 py-4 px-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <Clock size={18} className="text-gray-700 dark:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">{txn.description}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{txn.date} • {txn.time}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">{txn.amount}</td>
                  <td className="py-4 px-4">{txn.gateway}</td>
                  <td className="py-4 px-4">{txn.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaction;

import React from 'react';
import { Wallet, DollarSign, PiggyBank, Send } from "lucide-react";

function Dashboard() {
  const data = [
    { icon: <Wallet size={28} />, title: "Main balance", value: "$121.20" },
    { icon: <DollarSign size={28} />, title: "Total earning", value: "$362.28" },
    { icon: <PiggyBank size={28} />, title: "Deposit total", value: "$178.65" },
    { icon: <Send size={28} />, title: "Total payout", value: "$568.14" },
  ];

  const members = [
    { name: 'JOHN SMITH', joined: 'DEC 12,2024', transactions: 234, status: 'ACTIVE' },
    { name: 'JOHN SMITH', joined: 'DEC 12,2024', transactions: 234, status: 'INACTIVE' },
    { name: 'JOHN SMITH', joined: 'DEC 12,2024', transactions: 234, status: 'ACTIVE' },
    { name: 'JOHN SMITH', joined: 'DEC 12,2024', transactions: 234, status: 'ACTIVE' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Cards */}
      <div className="bg-[#208C53] dark:bg-[#2D2D2D] rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] shadow-md shadow-black p-6 rounded-xl  flex flex-col items-start space-y-2"
            >
              <div className="text-[#F6BA02]">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-[#F6BA02] text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Members Table */}
      <div className="bg-white  dark:bg-[#7C7C7C] rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-bold mb-2 sm:mb-0">ACTIVE MEMBERS</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            VIEW ALL
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border dark:bg-[#5D5D5D] border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-[#D9D9D9] text-black">
                <th className="text-left py-3 px-4 font-semibold">MEMBER</th>
                <th className="text-left py-3 px-4 font-semibold">JOINED</th>
                <th className="text-left py-3 px-4 font-semibold">TRANSACTIONS</th>
                <th className="text-left py-3 px-4 font-semibold">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.joined}</td>
                  <td className="py-3 px-4">{member.transactions}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import {  HandCoins, TicketX, UserPlus , Wallet } from "lucide-react";
import { useNavigate } from 'react-router-dom';



function ActiveMembers() {
  const navigate = useNavigate();
  const agentUser = JSON.parse(localStorage.getItem("agent"));
  const members = [
    { name: 'John Smith', joined: 'Dec 12, 2024', transactions: 234, status: 'active' },
    { name: 'John Smith', joined: 'Dec 12, 2024', transactions: 234, status: 'inactive' },
    { name: 'John Smith', joined: 'Dec 12, 2024', transactions: 234, status: 'active' },
    { name: 'John Smith', joined: 'Dec 12, 2024', transactions: 234, status: 'active' },
    { name: 'John Smith', joined: 'Dec 12, 2024', transactions: 234, status: 'active' },
    { name: 'John Smith', joined: 'Dec 12, 2024', transactions: 234, status: 'inactive' },
  ];
  const data = [
    { icon: <HandCoins size={28} />, title: "Agent balance", value: agentUser?.balance || 0 },
    { icon: <TicketX size={28} />, title: "Tickets left", value: "1000" },
    { icon: <UserPlus  size={28} />, title: "Assigned users", value: agentUser?.deposit || 0 },
    { icon: <Wallet size={28} />, title: "Revenue", value: agentUser?.payout || 0 },
  ];
  return (
    
    <div className="bg-white text-gray-800 dark:bg-[#2D2D2D] dark:text-[#7C7C7C] shadow-md rounded-lg p-6">
      <div className="p-8 bg-white dark:bg-[#2D2D2D]">
      <div className="bg-[#208C53] dark:bg-[#47B67C] rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <div key={index} className="bg-[#47B67C] dark:bg-[#208C53] drop-shadow-2xl shadow-md p-6 rounded-xl">
                <div className="text-[#FFC107] mb-2">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-[#FFC107] text-md">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
</div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold dark:text-white">ACTIVE MEMBERS</h2>
        <button className="text-sm text-blue-600 font-semibold dark:text-blue-400 hover:underline">VIEW ALL</button>
      </div>

      <div className="overflow-x-auto border-2 border-blue-500 dark:border-[#5D5D5D] rounded-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs font-bold dark:bg-[#5D5D5D] dark:text-[#7C7C7C]">
            <tr>
              <th className="px-4 py-3">MEMBER</th>
              <th className="px-4 py-3">JOINED</th>
              <th className="px-4 py-3">TRANSACTIONS</th>
              <th className="px-4 py-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => (
              <tr key={idx} className="border-t border-gray-300 dark:border-[#5D5D5D] dark:hover:bg-[#383838] transition">
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-gray-300 dark:bg-[#7C7C7C]"></span>
                  <span className="font-medium dark:text-white">{member.name}</span>
                </td>
                <td className="px-4 py-3">{member.joined}</td>
                <td className="px-4 py-3">{member.transactions}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                    ${member.status === 'active'
                      ? 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-900'
                      : 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-900'}`}>
                    {member.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveMembers;

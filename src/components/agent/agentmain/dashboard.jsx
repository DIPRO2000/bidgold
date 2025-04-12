import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, DollarSign, PiggyBank, Send } from "lucide-react";
import { Link } from 'react-router-dom';
import memberData from '../../../data/memberData';
function Dashboard() {
  const navigate=useNavigate();
  const data = [
    { icon: <Wallet size={28} />, title: "Main balance", value: "$121.20" },
    { icon: <DollarSign size={28} />, title: "Total earning", value: "$362.28" },
    { icon: <PiggyBank size={28} />, title: "Deposit total", value: "$178.65" },
    { icon: <Send size={28} />, title: "Total payout", value: "$568.14" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#208C53] rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-[#47B67C] shadow-md p-6 rounded-xl">
              <div className="text-[#FFC107] mb-2">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-[#FFC107] text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#208C53]">ACTIVE MEMBERS</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">VIEW ALL</button>
        </div>

        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-[#D9D9D9] text-black">
            <tr>
              <th className="text-left py-3 px-4">MEMBER</th>
              <th className="text-left py-3 px-4">JOINED</th>
              <th className="text-left py-3 px-4">TIME</th>
              <th className="text-left py-3 px-4">TRANSACTIONS</th>
              <th className="text-left py-3 px-4">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {memberData.map((member) => (
              <tr key={member.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">
                  <Link to={`/member/${member.id}`} className="text-blue-600 hover:underline">
                    {member.name}
                  </Link>
                </td>
                <td className="py-3 px-4">{member.joined}</td>
                <td className="py-3 px-4">{member.time}</td>
                <td className="py-3 px-4">{member.transactionsCount}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
  );
}

export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, DollarSign, PiggyBank, Send } from "lucide-react";
import { Link } from 'react-router-dom';
import memberData from '../../../data/memberData';

function Dashboard() {
  const navigate = useNavigate();
  const agentUser = JSON.parse(localStorage.getItem("agent"));

  const data = [
    { icon: <Wallet size={28} />, title: "Main balance", value: agentUser?.balance || 0 },
    { icon: <DollarSign size={28} />, title: "Total earning", value: "1000" },
    { icon: <PiggyBank size={28} />, title: "Deposit total", value: agentUser?.deposit || 0 },
    { icon: <Send size={28} />, title: "Total payout", value: agentUser?.payout || 0 },
  ];

  const UserCreation = () => {
    navigate("/register");
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#2D2D2D] text-black dark:text-[#D9D9D9]">
      <div className="container mx-auto px-4 py-8">

        {/* Cards */}
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

        {/* Create User Button */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">CREATE NEW USER ACCOUNT:</h2>
          <button 
            onClick={UserCreation} 
            className="p-3 bg-green-500 rounded-2xl cursor-pointer hover:bg-green-700 text-white font-semibold"
          >
            CREATE
          </button>
        </div>

        {/* Active Members Table */}
        <div className="bg-white dark:bg-[#2D2D2D] rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#208C53] dark:text-[#47B67C]">ACTIVE MEMBERS</h2>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium">VIEW ALL</button>
          </div>

          <table className="min-w-full bg-white dark:bg-[#2D2D2D] border rounded-lg">
            <thead className="bg-[#D9D9D9] dark:bg-[#4C4C4C] text-black dark:text-[#D9D9D9]">
              <tr>
                <th className="text-left py-3 px-4">TIME</th>
                <th className="text-left py-3 px-4">MEMBER</th>
                <th className="text-left py-3 px-4">JOINED</th>
                <th className="text-left py-3 px-4">TRANSACTIONS</th>
                <th className="text-left py-3 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {memberData.map((member) => (
                <tr key={member.id} className="border-b hover:bg-gray-100 dark:hover:bg-[#4C4C4C]">
                  <td className="py-3 px-4">{member.time}</td>
                  <td className="py-3 px-4">
                    <Link to={`/member/${member.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
                      {member.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{member.joined}</td>
                  <td className="py-3 px-4">{member.transactionsCount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100'
                        : 'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-100'
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

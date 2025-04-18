// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import agentData from '../../data/agentData';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#2D2D2D] text-black dark:text-[#D9D9D9]">
      <div className="bg-white dark:bg-[#2D2D2D] rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#208C53] dark:text-[#47B67C]">AGENTS CONNECTED</h2>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium">
            VIEW ALL
          </button>
        </div>

        <table className="min-w-full bg-white dark:bg-[#2D2D2D] border rounded-lg">
          <thead className="bg-[#D9D9D9] dark:bg-[#4C4C4C] text-black dark:text-[#D9D9D9]">
            <tr>
              <th className="text-left py-3 px-4">AGENT</th>
              <th className="text-left py-3 px-4">JOINED</th>
              <th className="text-left py-3 px-4">USERS CONNECTED</th>
              <th className="text-left py-3 px-4">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {agentData.map((agent) => (
              <tr key={agent.id} className="border-b hover:bg-gray-100 dark:hover:bg-[#4C4C4C]">
                <td className="py-3 px-4">
                  <Link to={`/agent/${agent.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
                    {agent.name}
                  </Link>
                </td>
                <td className="py-3 px-4">{agent.joined}</td>
                <td className="py-3 px-4">{agent.transactionsCount}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    agent.status === 'ACTIVE'
                      ? 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100'
                      : 'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-100'
                  }`}>
                    {agent.status}
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

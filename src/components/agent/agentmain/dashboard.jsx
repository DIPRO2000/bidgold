import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, DollarSign, PiggyBank, Send } from "lucide-react";
import { Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const agentUser = JSON.parse(localStorage.getItem("agent"));
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [userID,setUserId]=useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const data = [
    { icon: <Wallet size={28} />, title: "Main balance", value: agentUser?.balance || 0 },
    { icon: <DollarSign size={28} />, title: "Total earning", value: "1000" },
    { icon: <PiggyBank size={28} />, title: "Deposit total", value: agentUser?.deposit || 0 },
    { icon: <Send size={28} />, title: "Total payout", value: agentUser?.payout || 0 },
  ];

  const UserCreation = () => {
    navigate("/register");
  };

  // const UserDetails=(user._id)=>
  // {
  //   navigate(`/membercheck/${user._id}`)
  // }

  useEffect(() => {
    const fetchUsers = async () => {
      if (!agentUser?.id) {
        return; // Prevent fetch if agentUser is not available
      }
      try {
        setLoading(true); // Start loading
        const res = await fetch("http://localhost:3000/api/userfetch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Use token if needed for authorization
          },
          body: JSON.stringify({ agentId: agentUser.id }), // <-- wrapped in object
        });

        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchUsers();
  }, [agentUser?.id, token]);

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
            <h2 className="text-2xl font-bold text-[#208C53] dark:text-[#47B67C]">AGENT CREATED USERS</h2>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium">VIEW ALL</button>
          </div>

          <table className="min-w-full bg-white dark:bg-[#2D2D2D] border rounded-lg">
            <thead className="bg-[#D9D9D9] dark:bg-[#4C4C4C] text-black dark:text-[#D9D9D9]">
              <tr>
                <th className="text-left py-3 px-4">USERNAME</th>
                <th className="text-left py-3 px-4">JOINED DATE</th>
                <th className="text-left py-3 px-4">EMAIL</th>
                <th className="text-left py-3 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500 dark:text-gray-300">
                    Loading...
                  </td>
                </tr>
              ) : users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-100 dark:hover:bg-[#4C4C4C]" onClick={() => navigate(`/membercheck/${user._id}`)}>
                    <td className="py-3 px-4">{user.username}</td>
                    <td className="py-3 px-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{user.email || "N/A"}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100">
                        ACTIVE
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500 dark:text-gray-300">
                    No users created by you yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

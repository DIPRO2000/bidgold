import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavbarManager from '../Navbarmanager';
import memberData from '../../../data/memberData';

function MemberDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('transactions'); // default tab
  const [loading, setLoading] = useState(true); // NEW STATE
  const AgentID=JSON.parse(localStorage.getItem("agent")).id

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/user/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false); // Done loading no matter what
      }
    };

    fetchUserDetails();
  }, [id]);
    
    // const member = memberData.find((m) => m.id1 === parseInt(id));
  
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('Deposit');

    useEffect(() => {
      const fetchTransactions = async () => {
        try {
          const userId = '67fcdd9450ae8025f268f760'; // Replace with actual user ID or get from context
          const response = await fetch(`http://localhost:3000/api/transaction/usertransdetails/${id}`, {
            method: 'GET',
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch transactions');
          }
  
          const data = await response.json();
          setTransactions(data); // Assuming the response contains an array of transactions
        } catch (error) {
          console.error('Error fetching transactions:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTransactions();
    }, [activeTab]); // Empty dependency array ensures this runs once on component mount
  
    //Transaction Backend Function
    const handleAddTransaction = async () => {
      if (!amount || !transactionType) {
        return alert('Please enter amount and select transaction type.');
      }
    
      try {
        const response = await fetch('http://localhost:3000/api/transaction/agentuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            agentId: AgentID,    // Replace with actual ID
            userId: id,    // Replace with actual ID
            amount: Number(amount),
            Type: transactionType.toLowerCase()  // "deposit" or "withdrawal"
          }),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.error || 'Transaction failed');
        }
    
        alert(data.message);
        localStorage.removeItem("agent");
        localStorage.setItem("agent", JSON.stringify(data.agent));
    
        // Optionally reset form:
        setAmount('');
        setTransactionType('Deposit');
    
      } catch (error) {
        console.error('❌ Transaction Error:', error.message);
        alert(error.message);
      }
    };
    

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#2D2D2D] text-black dark:text-white">
        <p className="text-xl">Loading member details...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#2D2D2D] text-black dark:text-white">
        <p className="text-xl text-red-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#2D2D2D] dark:text-[#D9D9D9]">
      <NavbarManager/>
      <div className="container mx-auto px-4 py-8">
        <span className=" inline-block text-3xl just font-bold  dark:text-[#F6BA02] mt-20 mb-6 shadow-lg rounded-lg p-4 bg-gradient-to-r from-[#47B67C] to-[#208C53] text-white">
          Member Dashboard: {user.firstName} {user.lastName}
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

        {/* Tab Content:TRANSACTION HISTORY */}
        {activeTab === 'transactions' && (
          <div className="mb-10 bg-[#F5F5F5] dark:bg-[#3A3A3A] rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#47B67C] dark:text-[#208C53] mb-4">
            Transaction History
          </h2>
        
          {loading ? (
            <div className="text-gray-600 dark:text-gray-300">Loading...</div>
          ) : transactions.length === 0 ? (
            <div className="text-gray-500 dark:text-gray-300 mt-4">
              No transactions found.
            </div>
          ) : (
            <table className="min-w-full rounded-lg border-[#208C53] border-2 bg-white dark:bg-[#2D2D2D] shadow-lg">
              <thead className="bg-[#D9D9D9] text-black dark:bg-[#4C4C4C] dark:text-[#D9D9D9]">
                <tr>
                  <th className="px-6 py-3 text-left">Time</th>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-300 dark:border-gray-700 hover:bg-[#f1f1f1] dark:hover:bg-[#424242] transition-all duration-300"
                  >
                    <td className="px-6 py-4">
                      {tx.Date ? new Date(tx.Date).toLocaleString() : '—'}
                    </td>
                    <td className={`px-6 ${tx.Type === "deposit" ? "text-red-600" : "text-[#208c51]"} py-4 `}>
                      ${tx.amount?.toFixed(2) || '0.00'}
                    </td>
                    <td className="px-6 py-4 capitalize">
                      {tx.Type || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        )}

        {/* {activeTab === 'bets' && (
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
        )} */}

        {activeTab === 'add' && (
          <div className="mb-10 bg-[#F5F5F5] dark:bg-[#3A3A3A] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#47B67C] dark:text-[#208C53] mb-4">
              Add Transaction
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
              <input
                type="number"
                min="0"
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

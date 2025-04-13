import './App.css';
import Landing from './components/landing/landing';
import Login from './components/login/login';
import Register from './components/register/register1';
import Register2 from './components/register/register2';
import Register3 from './components/register/register3';
import Settings from './components/settingspages/settings';
import LoginAgent from './components/agent/login/login';
import Agent from './components/agent/agentmain/agent';
import MemberDetails from './components/agent/agentmain/members';
import BetHistory from './components/bethistory/bethistory';
import TransactionHistory from "./components/bethistory/pages/TransactionHistory";
<<<<<<< HEAD

import Deposit from "./components/bethistory/pages/Deposit";
import Withdrawal from "./components/bethistory/pages/Withdrawal";
import MemberDetails from './components/agent/agentmain/members';


=======
import Deposit from "./components/bethistory/pages/Deposit";
import Withdrawal from "./components/bethistory/pages/Withdrawal"
>>>>>>> 1f64adf84d8f44d36ca5f712fa047a518b90c36e

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgentAccountForm from './components/fg';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bethistory" element={<BetHistory />} />
          <Route path="/TransactionHistory" element={<TransactionHistory />} />

          <Route path="/Deposit" element={<Deposit />} />
          <Route path="/Withdrawal" element={<Withdrawal />} />
          <Route path="/member/:id" element={<MemberDetails />} />
<<<<<<< HEAD

=======
>>>>>>> 1f64adf84d8f44d36ca5f712fa047a518b90c36e

          <Route path="/register" element={<Register />} />  
          <Route path="/register2" element={<Register2 />} /> 
          <Route path="/register3" element={<Register3 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/agent/login" element={<LoginAgent />} />
          <Route path="/agent/usercreate" element={<AgentAccountForm/>} />
          <Route path="/agent" element={<Agent />} />

      </Routes>
    </Router>
  );
}

export default App;

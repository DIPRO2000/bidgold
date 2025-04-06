import './App.css';
import Landing from './components/landing/landing';
import Login from './components/login/login';
import Register from './components/register/register1';
import Register2 from './components/register/register2';
import Register3 from './components/register/register3';
import Settings from './components/settingspages/settings';
import LoginAtgent from './components/agent/login/login';
import Agent from './components/agent/agentmain/agent';

import BetHistory from './components/bethistory/bethistory';
import TransactionHistory from "./components/bethistory/pages/TransactionHistory";
import Deposit from "./components/bethistory/pages/Deposit";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bethistory" element={<BetHistory />} />
        <Route path="/components/bethistory/pages/TransactionHistory" element={<TransactionHistory />} />
        <Route path="/components/bethistory/pages/Deposit" element={<Deposit />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/register2" element={<Register2 />} /> 
        <Route path="/register3" element={<Register3 />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/agent/login" element={<LoginAtgent />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
    </Router>
  );
}

export default App;

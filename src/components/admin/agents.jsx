import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Agent_content from './agent_content';
import Mainav from './nav'; // Your navigation component
import ActiveMembers from './active';
function AgentDetails() {
  

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#2D2D2D] dark:text-[#D9D9D9]">
      <Mainav />
      <Agent_content/>
      <ActiveMembers />
    </div>
  );
}

export default AgentDetails;

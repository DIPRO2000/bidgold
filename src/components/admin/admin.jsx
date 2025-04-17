import React from 'react'
import Mainav from './nav';
import Content from './content';
import DashboardCards from './cards';
import Dashboard from './agents_list';
function Admin() {
  return (
    <div>
      <Mainav />
        <Content />
        <DashboardCards />
        <Dashboard />
    </div>
  )
}

export default Admin;

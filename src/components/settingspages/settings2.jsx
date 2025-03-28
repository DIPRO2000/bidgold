import React from 'react'
import Mainav from '../nav';
import Content from './content';
import ButtonBar from '../butons';
import DashboardCards from './money';

function Settings2() {
  return (
    <div>
       <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <Mainav />
      <Content />
      <ButtonBar />
      <DashboardCards />
      
    </div>
    </div>
  )
}

export default Settings2;

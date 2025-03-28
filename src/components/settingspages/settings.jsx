import React, { useState } from "react";
import Mainav from "../nav";
import Content from "./content";
import ButtonBar from "../butons";
import DashboardCards from "./money";
import EditProfile from "./form1";
import SidebarButtons from "./sidebuttons";
import ManageSettings from "./manage";
import Account from "./accounts";

function Settings() {
  const [selectedTab, setSelectedTab] = useState("personal");

  return (
    <div className="pt-20">
      <Mainav />
      <Content />
      <ButtonBar />
      <DashboardCards />

      <div className="flex flex-col md:flex-row w-full justify-center items-start gap-6 p-4 md:p-6 bg-white dark:bg-[#2D2D2D]">
        <div className="flex flex-col md:flex-row w-full lg:w-4/5 gap-6 space-x-10 md:space-x-6 px-4 sm:px-6 justify-center 
          bg-white dark:bg-[#7C7C7C] shadow-lg shadow-black rounded-lg overflow-hidden">
          
          {/* Sidebar Buttons with State Management */}
          <SidebarButtons selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          {/* Dynamic Box Height (Large for Small Screens, Small for Large Screens) */}
          <div className="relative w-full md:w-[500px] lg:w-[600px] h-[600px] md:h-[500px] lg:h-[400px] flex justify-center items-center">
            {/* Personal Information (EditProfile) */}
            <div
              className={`absolute w-full h-full transition-opacity transform duration-500 ${
                selectedTab === "personal" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <EditProfile />
            </div>

            {/* Privacy Settings (ManageSettings) */}
            <div
              className={`absolute w-full h-full transition-opacity transform duration-500 ${
                selectedTab === "privacy" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <ManageSettings />
            </div>

            {/* Account Settings (Account Component) */}
            <div
              className={`absolute w-full h-full transition-opacity transform duration-500 ${
                selectedTab === "account" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Account />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;

import React, { useState } from "react";
import NavbarManager from "../NavManager";
import Content from "./content";
import ButtonBar from "../butons";
import DashboardCards from "./money";
import EditProfile from "./form1";
import SidebarButtons from "./sidebuttons";

function Settings() {
  const [selectedTab, setSelectedTab] = useState("personal");

  return (
    <div className="pt-20">
      <NavbarManager />
      <Content />
      <ButtonBar />
      <DashboardCards />

      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 p-4 md:p-6  dark:bg-[#2D2D2D]">
        <div className=" md:flex-row w-full  gap-6 space-x-10 md:space-x-6 px-4 sm:px-6 
           dark:bg-[#7C7C7C]  rounded-lg overflow-y-scroll ">
          
          {/* Sidebar Buttons with State Management */}
          <SidebarButtons selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          {/* Dynamic Box Height (Large for Small Screens, Small for Large Screens) */}
          <div className="relative w-full  h-[600px] md:h-[500px] lg:h-[400px] flex justify-center items-center">
            {/* Personal Information (EditProfile) */}
            <div
              className={`absolute w-full h-full transition-opacity transform duration-500 ${
                selectedTab === "personal" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <EditProfile />
            </div>

            {/* Privacy Settings (ManageSettings) */}
          
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;

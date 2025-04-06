import React, { useState } from "react";
import Dashboard from "./dashboard"; // Import your Dashboard component
import History from "./history"; // Import your History component
import Transactions from "./transactions"; // Import your Transactions component
import Settings from "./settings";
function ButtonBar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeComponent, setActiveComponent] = useState(<Dashboard />);
  

  const buttons = [
    { label: "Dashboard", component: <Dashboard /> },
    { label: "My History", component: <History /> },
    { label: "Transactions", component: <Transactions/> },
    { label: "Revenue", component: <div>Revenue Content</div> },
    { label: "Settings", component: <Settings /> },
  ];

  const handleButtonClick = (label, component) => {
    setActiveTab(label);
    setActiveComponent(component);
  };

  return (
    <div className="w-full bg-white dark:bg-[#2D2D2D]">
      <div className="flex flex-wrap justify-center gap-2 relative top-6 dark:bg-[#5D5D5D] sm:gap-3 p-3 bg-white rounded-full w-fit mx-auto shadow-[0px_4px_6px_rgba(0,0,0,0.2)]">
        {buttons.map(({ label, component }) => (
          <button
            key={label}
            onClick={() => handleButtonClick(label, component)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all 
              shadow-gray-500 shadow-inner border 
              ${
                activeTab === label
                  ? "bg-green-700 text-white shadow-inner shadow-black"
                  : "bg-white dark:bg-[#7C7C7C] dark:shadow-inner dark:shadow-black text-black hover:bg-gray-100"
              }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {/* Render the active component below the button bar */}
      <div className="mt-20 p-4">
        {activeComponent}
      </div>
    </div>
  );
}

export default ButtonBar;
import React from "react";
import { User, Lock, Settings } from "lucide-react";

const SidebarButtons = ({ selectedTab, setSelectedTab }) => {
  const buttons = [
    { id: "personal", label: "Personal Information", icon: <User size={24} /> },
   
  ];

  return (
    <div className="w-full md:w-1/4 space-y-8 mt-6 flex justify-center">
      {buttons.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => setSelectedTab(id)} // 👈 Click updates selectedTab
          className={`w-3/4 flex items-center space-x-3 p-4 md:p-5 rounded-lg text-lg font-semibold transition-all 
            shadow-inner duration-300 shadow-black
            ${
              selectedTab === id
                ? "bg-[#208C53] text-white shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                : "bg-gray-300 dark:bg-[#7C7C7C] text-black shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:bg-gray-400 dark:hover:bg-[#8C8C8C]"
            }`}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SidebarButtons;

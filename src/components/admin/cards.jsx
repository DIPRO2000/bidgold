import React from "react";
import {UserRoundPen, ShieldCheck, PiggyBank } from "lucide-react";

const DashboardCards = () => {
  const data = [
    { icon: <UserRoundPen size={28} />, title: "Agents", value: "$121.20" },
    { icon: <ShieldCheck size={28} />, title: "Active users", value: "$362.28" },
    { icon: <PiggyBank size={28} />, title: "Total income", value: "$178.65" },
  ];

  return (
    <div className="p-8 bg-white dark:bg-[#2D2D2D]">
      <div className="max-w-[1000px] w-full mx-auto shadow-lg shadow-black rounded-xl p-6 bg-[#208C53]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] p-6 rounded-xl shadow-lg shadow-black flex flex-col items-start space-y-2 w-full"
            >
              <div className="text-[#F6BA02]">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-[#F6BA02] text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;

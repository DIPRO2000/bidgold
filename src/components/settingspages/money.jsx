import React from "react";
import { Wallet, DollarSign, PiggyBank, Send } from "lucide-react";

const DashboardCards = () => {
  // Money values (replace with dynamic data if needed)
  const data = [
    { icon: <Wallet size={28} />, title: "Main balance", value: "$121.20" },
    { icon: <DollarSign size={28} />, title: "Total earning", value: "$362.28" },
    { icon: <PiggyBank size={28} />, title: "Deposit total", value: "$178.65" },
    { icon: <Send size={28} />, title: "Total payout", value: "$568.14" },
    
  ];

  return (
    <div className="p-8 bg-white flex justify-center dark:bg-[#2D2D2D]">
      <div className="w-4/5 flex justify-center shadow-lg shadow-black rounded-xl p-6 bg-[#208C53]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] p-6 rounded-xl  shadow-lg shadow-black flex flex-col items-start space-y-2 w-[220px] h-[140px]"
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

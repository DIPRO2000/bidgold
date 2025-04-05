// pages/DashboardSection.jsx
import React from "react";
import { DollarSign, TrendingUp, ArrowDown, ArrowUp } from "lucide-react";

const cardData = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Main balance",
    value: "$121",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Total Earning",
    value: "$362.98",
  },
  {
    icon: <ArrowDown className="w-6 h-6" />,
    title: "Deposit Total",
    value: "$178.65",
  },
  {
    icon: <ArrowUp className="w-6 h-6" />,
    title: "Total Payout",
    value: "$786.90",
  },
];

export default function DashboardSection() {
  return (
    <div className="p-8">
      <div className="w-full flex flex-col items-center lg:items-start shadow-lg rounded-xl p-6 bg-[#208C53] dark:bg-[#4C4C4C]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {[...cardData, ...cardData].map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] dark:bg-[#2D2D2D] p-6 rounded-xl shadow-md flex flex-col items-start space-y-2 w-full"
            >
              <div className="text-black font-bold">{item.icon}</div>
              <h3 className="text-black font-bold text-xl">{item.title}</h3>
              <p className="text-black font-bold text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

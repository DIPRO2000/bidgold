import React, { useState } from "react";
import AuthNav from "../authnav";
import ButtonBar from "../butons";
import DashboardSection from "./DashboardSection";
import { Clock4 } from "lucide-react";

function BetHistory() {
  const [active, setActive] = useState("Bet History");

  const historyItems = Array.from({ length: 10 }).map(() => ({
    time: "10:45 AM",
    team1: "Team A",
    team2: "Team B",
    slip: "BAC7976",
    type: "Single Bet",
    bet: "$799.98",
    odd: "7.30",
    status: "2.32",
  }));

  return (
    <div className="pt-20 dark:bg-[#2D2D2D] bg-white min-h-screen transition-all">
      {/* Top Banner */}
      <div
        className="w-full h-60 bg-cover bg-center flex items-end px-6 pb-4"
        style={{ backgroundImage: "url('/landingassets/Image.svg')" }}
      >
        <div className="p-4 rounded-lg text-black">
          <div className="flex items-center space-x-4">
            <img src="/user-icon.svg" alt="User" className="w-16 h-16" />
            <div>
              <h1 className="text-5xl font-bold">JOHN DOE</h1>
              <p className="text-2xl font-semibold">BETID: ABCD1234</p>
              <p className="text-xl font-medium">
                WINNING BET: 55% | LOSING BET: 45%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <AuthNav />
      <ButtonBar active={active} setActive={setActive} />

      {/* Dashboard Section */}
      <DashboardSection />

      {/* Table Header */}
      <div className="text-black dark:text-white font-bold px-4 sm:px-8 py-4 text-sm sm:text-base grid grid-cols-6 sm:grid-cols-7 border-b border-gray-300 dark:border-gray-600">
        <span className="col-span-1">EVENT</span>
        <span className="col-span-2">BET SLIP</span>
        <span className="col-span-1">TYPE</span>
        <span className="col-span-1">BET</span>
        <span className="col-span-1">ODD</span>
        <span className="col-span-1">STATUS</span>
      </div>

      {/* Cards */}
      {historyItems.map((item, idx) => (
        <div
          key={idx}
          className="px-4 sm:px-8 py-4 text-sm sm:text-base border-b border-gray-200 dark:border-gray-700 text-black dark:text-white"
        >
          <div className="grid grid-cols-6 sm:grid-cols-7 gap-2 items-center">
            {/* EVENT */}
            <div className="col-span-1 flex flex-col text-xs">
              <span className="flex items-center gap-1 font-medium">
                <Clock4 size={14} className="inline" /> {item.time}
              </span>
              <span>{item.team2}</span>
            </div>

            {/* BET SLIP */}
            <div className="col-span-2">
              <div className="font-semibold">{item.team1}</div>
              <div className="text-xs">{item.slip} (SLIP NO.)</div>
            </div>

            {/* TYPE */}
            <div className="col-span-1">{item.type}</div>

            {/* BET */}
            <div className="col-span-1">{item.bet}</div>

            {/* ODD */}
            <div className="col-span-1">{item.odd}</div>

            {/* STATUS */}
            <div className="col-span-1">{item.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BetHistory;

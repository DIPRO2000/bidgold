import React, { useState } from "react";
import AuthNav from "../authnav";
import ButtonBar from "../butons";
import DashboardSection from "./DashboardSection";
import { Clock4 } from "lucide-react";

function BetHistory() {
  const [active, setActive] = useState("Bet History");

  const historyItems = Array.from({ length: 10 }).map(() => ({
    time: "10:45 AM",
    date: "2025-04-05",
    team1: "Team A",
    team2: "Team B",
    slip: "BAC7976",
    type: "Single Bet",
    bet: "$799.98",
    odd: "7.30",
    status: "2.30",
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
      <DashboardSection />

      {/* My Recent Bets Title */}
      <div className="px-6 sm:px-8 mt-8">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          My Recent Bets
        </h2>
      </div>

      {/* Table Header */}
      <div className="text-black dark:text-white font-bold px-4 sm:px-8 py-4 text-sm sm:text-base grid grid-cols-7 border-b border-gray-300 dark:border-gray-600">
        <span>EVENT</span>
        <span>TEAMS</span>
        <span>BET SLIP</span>
        <span>TYPE</span>
        <span>BET</span>
        <span>ODD</span>
        <span>STATUS</span>
      </div>

      {/* Cards */}
      {historyItems.map((item, idx) => (
        <div
          key={idx}
          className="px-4 sm:px-8 py-4 text-sm sm:text-base text-black dark:text-white rounded-md my-2"
        >
          <div className="grid grid-cols-7 gap-4 items-center">
            {/* EVENT (time + date) */}
            <div className="flex flex-col text-xs border-r pr-2 border-gray-400">
              <span className="flex items-center gap-1 font-medium">
                <Clock4 size={14} className="inline" /> {item.time}
              </span>
              <span>{item.date}</span>
            </div>

            {/* TEAMS */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <img src="/placeholder-team.svg" alt="Team A" className="w-6 h-6" />
                <span>{item.team1}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <img src="/placeholder-team.svg" alt="Team B" className="w-6 h-6" />
                <span>{item.team2}</span>
              </div>
            </div>

            {/* BET SLIP */}
            <div>
              <div className="font-semibold">{item.slip}</div>
              <div className="text-xs text-gray-500">SLIP NO.</div>
            </div>

            {/* TYPE */}
            <div>{item.type}</div>

            {/* BET */}
            <div>{item.bet}</div>

            {/* ODD */}
            <div>{item.odd}</div>

            {/* STATUS */}
            <div>
              <span className="px-2 py-1 border rounded-md">
                {item.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BetHistory;

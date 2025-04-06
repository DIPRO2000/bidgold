import React, { useReducer, useState } from "react";
import AuthNav from "../../authnav";
import NavbarManager from "../../NavManager";
import ButtonBar from "../../butons";
import DashboardSection from "./../DashboardSection";
import { Clock4 } from "lucide-react";

function TransactionHistory() {
  const [active, setActive] = useState("Transaction History");
  const userStr = localStorage.getItem("user");      // get the string
  const user = JSON.parse(userStr);                  // convert string to object

  const transactionItems = Array.from({ length: 10 }).map(() => ({
    time: "2:15 PM",
    date: "2025-04-05",
    paymentDescription: "E-Transfer",
    bet: "$1200.00",
    gateway: "E-Wallets",
    transactionId: "TM-68766867",
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
              <h1 className="text-5xl font-bold">{user.firstName} {user.lastName}</h1>
              <p className="text-2xl font-semibold">BETID: ABCD1234</p>
              <p className="text-xl font-medium">
                TOTAL TRANSACTIONS: 68 | SUCCESSFUL: 65
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavbarManager />
      <ButtonBar active={active} setActive={setActive} />
      <DashboardSection />

      {/* Title */}
      <div className="px-6 sm:px-8 mt-8">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          TRANSACTION HISTORY
        </h2>
      </div>

      {/* Table Header */}
      <div className="text-black dark:text-white font-bold px-4 sm:px-8 py-4 text-sm sm:text-base grid grid-cols-5 border-b border-gray-300 dark:border-gray-600">
        <span>TIME</span>
        <span>PAYMENT DESCRIPTION</span>
        <span>BET</span>
        <span>GATEWAY</span>
        <span>TRANSACTION ID</span>
      </div>

      {/* Transaction Cards */}
      {transactionItems.map((item, idx) => (
        <div
          key={idx}
          className="px-4 sm:px-8 py-4 text-sm sm:text-base text-black dark:text-white rounded-md my-2"
        >
          <div className="grid grid-cols-5 gap-4 items-center">
            {/* TIME */}
            <div className="flex flex-col text-xs border-r pr-2 border-gray-400">
              <span className="flex items-center gap-1 font-medium">
                <Clock4 size={14} className="inline" /> {item.time}
              </span>
              <span>{item.date}</span>
            </div>

            {/* PAYMENT DESCRIPTION */}
            <div>{item.paymentDescription}</div>

            {/* BET */}
            <div>{item.bet}</div>

            {/* GATEWAY */}
            <div>{item.gateway}</div>

            {/* TRANSACTION ID */}
            <div>{item.transactionId}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionHistory;

// components/ButtonBar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import TransactionHistory from "./components/bethistory/pages/TransactionHistory";

function ButtonBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { label: "Bet History", route: "/bethistory" },
    { label: "Transaction History", route: "/TransactionHistory" },
    { label: "Deposit", route: "/Deposit" },
    { label: "Withdrawal", route: "/withdrawal" },
    { label: "Settings", route: "/settings" },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#2D2D2D] h-28">
      <div className="flex flex-wrap justify-center gap-2 relative top-6 dark:bg-[#5D5D5D] sm:gap-3 p-3 bg-white rounded-full w-fit mx-auto shadow-[0px_4px_6px_rgba(0,0,0,0.2)]">
        {buttons.map(({ label, route }) => {
          const isActive = location.pathname === route;

          return (
            <button
              key={label}
              onClick={() => navigate(route)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all 
                shadow-gray-500 shadow-inner border 
                ${
                  isActive
                    ? "bg-green-700 text-white shadow-inner shadow-black"
                    : "bg-white dark:bg-[#7C7C7C] dark:shadow-inner dark:shadow-black text-black hover:bg-gray-100"
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonBar;

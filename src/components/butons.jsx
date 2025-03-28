import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonBar() {
  const [active, setActive] = useState("Settings");
  const navigate = useNavigate();

  const buttons = [
    { label: "Bet History", route: "/bet-history" },
    { label: "Transaction History", route: "/transaction-history" },
    { label: "Deposit", route: "/deposit" },
    { label: "Withdrawal", route: "/withdrawal" },
    { label: "Settings", route: "/settings" },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#2D2D2D] h-28">
    <div className="flex flex-wrap justify-center gap-2 relative top-6 dark:bg-[#5D5D5D] sm:gap-3 p-3 bg-white rounded-full w-fit mx-auto shadow-[0px_4px_6px_rgba(0,0,0,0.2)]">
      {buttons.map(({ label, route }) => (
        <button
          key={label}
          onClick={() => {
            setActive(label);
            navigate(route);
          }}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all 
            shadow-gray-500 shadow-inner border 
            ${
              active === label
                ? "bg-green-700 text-white shadow-inner shadow-black"
                : "bg-white dark:bg-[#7C7C7C] dark:shadow-inner dark:shadow-black  text-black hover:bg-gray-100"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
    </div>
  );
}

export default ButtonBar;

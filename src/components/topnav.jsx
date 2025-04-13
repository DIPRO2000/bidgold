import React from "react";

const TopNav = () => {
  const navItems = ["HOME", "LIVE", "ALL SPORTS", "MY BETS", "TO SEARCH"];

  return (
    <nav className="w-full bg-gray-800 py-1 px-4"> 
      <ul className="flex justify-center gap-6 whitespace-nowrap">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-white text-xs md:text-sm font-medium tracking-wide hover:underline cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;

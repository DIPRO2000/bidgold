import React from "react";

const HelpBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#208C53] dark:bg-[#208C53] p-4 shadow-lg w-scren mx-auto">
      {/* Help Text */}
      <span className="text-white text-base sm:text-lg font-bold italic text-center sm:text-left mb-3 sm:mb-0">
        Still Need Help or Confused About Placing A Bet?
      </span>

      {/* Help Button */}
      <button className="bg-white text-green-700 font-bold text-sm sm:text-base px-4 py-2 rounded-md shadow-inner shadow-black hover:bg-[#208C53] border border-gray-300 hover:text-white transition w-full sm:w-auto">
        GET HELP
      </button>
    </div>
  );
};

export default HelpBanner;

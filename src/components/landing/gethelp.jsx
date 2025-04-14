import React from "react";

const HelpBanner = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#208C53] dark:bg-[#208C53] p-4 shadow-lg w-full mx-auto">
      

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-white text-green-700 font-bold text-sm sm:text-base px-4 py-2 rounded-md shadow-inner shadow-black hover:bg-[#208C53] border border-gray-300 hover:text-white transition w-full sm:w-auto"
      >
        Back to Top ↑
      </button>
    </div>
  );
};

export default HelpBanner;

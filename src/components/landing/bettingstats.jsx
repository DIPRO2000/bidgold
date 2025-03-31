import React from "react";

const BettingStats = () => {
  return (
    <div className="relative flex justify-center items-center p-6">
      <div className="relative bg-green-600 text-white flex rounded-lg px-8 py-4 w-full max-w-3xl shadow-lg items-center">
        <div className="flex justify-between w-full">
          <div className="text-center">
            <p className="text-xl font-bold">25.1k</p>
            <p className="text-sm">BET PLAYERS</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">574+</p>
            <p className="text-sm">ALL SPORTS</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">3201</p>
            <p className="text-sm">STREAMING</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">10k+</p>
            <p className="text-sm">PRIZES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingStats;

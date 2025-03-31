import React from "react";

const Account = () => {
  const settings = [
    "Sync Watchlist to My Stuff :",
    "Hold Your Subscription :",
    "Cancel Subscription :",
    "Your Devices :",
  ];

  return (
    <div className="w-full md:w-2/3  rounded-xl p-6 space-y-6">
      {settings.map((setting, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-lg font-semibold text-black dark:text-white">
            {setting} 
          </span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
            Manage
          </button>
        </div>
      ))}
    </div>
  );
};

export default Account;

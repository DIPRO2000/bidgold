import React from "react";

const Feedback = () => {
  // Money values (replace with dynamic data if needed)
  const data = [
    { icon: <img src="Profile.svg" alt="Main balance" width={28} height={28} />, title: "John Doe", win: "$1250", value: "Click on the Register button and fill out the form to create your account." },
    { icon: <img src="purse.svg" alt="Total earning" width={28} height={28} />, title: "John Doe", win: "$1250", value: "Choose your preferred payment method and make your first deposit." },
    { icon: <img src="wagers.svg" alt="Deposit total" width={28} height={28} />, title: "John Doe", win: "$1250", value: "Select your favorite sports and place your bets." },
    { icon: <img src="money.svg" alt="Total payout" width={28} height={28} />, title: "John Doe", win: "$1250", value: "Cash out your winnings quickly and securely." },
  ];

  return (
    <div className="p-8 bg-white dark:bg-[#2D2D2D] transition-all">
      <div className="w-full flex flex-col items-center lg:items-start shadow-lg shadow-black rounded-xl p-6 bg-[#208C53] dark:bg-[#4C4C4C]">
        {/* Heading */}
        <div className="text-white dark:text-[#7C7C7C] font-bold text-2xl mb-6">
          Valuable Client Feedback
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] dark:bg-[#2D2D2D] p-6 rounded-xl shadow-lg shadow-black flex flex-col justify-center items-start space-y-2 w-full sm:w-[280px] md:w-[250px] lg:w-[300px] h-auto transition-all"
            >
              <div className="flex items-center gap-2">
                <div className="text-[#F6BA02]">{item.icon}</div>
                <div>
                  <h3 className="text-black dark:text-[#7C7C7C] font-bold text-lg">{item.title}</h3>
                  <p className="text-black dark:text-[#7C7C7C] text-sm font-bold">Won: {item.win}</p>
                </div>
              </div>
              <p className="text-white dark:text-[#C0C0C0] text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

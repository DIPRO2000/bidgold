import React from "react";

const Content = () => {
  return (
    <div>
      <div className="relative w-full h-[33vh] md:h-96 flex flex-col text-black text-3xl font-bold">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/loginimg.svg')",
            backgroundPosition: "center bottom", // Crops the top half
            filter: "brightness(0.7)", // Fades the image
          }}
        ></div>

        {/* Transparent Layer */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-3xl md:text-5xl m-4 md:m-8">UEFA Champions League 2024</h1>
          <p className="text-base md:text-xl m-4 md:m-8">Manchester United vs Real Madrid</p>
        </div>
      </div>
      
      {/* Hexagon Stats Box */}
      <div className="flex justify-center mt-6 md:mt-auto">
        <div className="relative w-[90%] md:w-[60%] lg:w-[50%]">
          <div className="relative bg-[#208C53] bottom-15 rounded-xl shadow-sm shadow-black text-white p-4 md:p-6 border-4 md:border-8 border-gray-100  dark:border-[#2D2D2D] dark:bg-[#7C7C7C] dark:text-green-900 flex flex-wrap md:flex-row justify-center text-center gap-4 md:gap-10">
            <div className="w-1/2 md:w-auto">
              <p className="text-lg md:text-3xl font-bold">25.1k</p>
              <p className="text-xs md:text-base">BET PLAYERS</p>
            </div>
            <div className="w-1/2 md:w-auto">
              <p className="text-lg md:text-3xl font-bold">574+</p>
              <p className="text-xs md:text-base">ALL SPORTS</p>
            </div>
            <div className="w-1/2 md:w-auto">
              <p className="text-lg md:text-3xl font-bold">3201</p>
              <p className="text-xs md:text-base">STREAMING</p>
            </div>
            <div className="w-1/2 md:w-auto">
              <p className="text-lg md:text-3xl font-bold">10k+</p>
              <p className="text-xs md:text-base">PRICES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
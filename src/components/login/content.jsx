import React from "react";

const Content = () => {
  return (
    <div className="relative w-full h-[33vh] md:h-96 flex flex-col items-center justify-center text-black text-3xl font-bold">
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
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl mb-4">WELCOME BACK!!</h1>
        <p className="text-lg md:text-xl">ALL THE BEST FOR WINNING THE BET</p>
      </div>
    </div>
  );
};

export default Content;

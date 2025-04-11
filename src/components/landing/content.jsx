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
    
    </div>
  );
};

export default Content;
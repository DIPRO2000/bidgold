import React from "react";

const Content = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Main Image (19% cut off from the top) */}
      <img 
        src="/landingassets/Image.svg" 
        alt="Main Image" 
        className="w-full h-auto translate-y-[-19%]"
      />

      {/* Text Image (Top-left, significantly bigger, compensating for cutoff) */}
      <img 
        src="/landingassets/Text.svg" 
        alt="Text" 
        className="absolute top-[5%] left-[3%] w-[55%] h-auto"
      />

      {/* Buttons Container */}
      <div className="absolute flex gap-8"  
        style={{ 
          bottom: "41.8%",  // Distance from bottom
          left: "3.2%",    // Distance from left
        }}
      >
        {/* Bet Now Button */}
        <button 
          className="px-6 py-3 text-white font-bold rounded-md shadow-md transition-all"
          style={{
            backgroundColor: "#168534", // Green color
            width: "164.4px", height: "73.9px",  // Adjust button size 
          }}
          onMouseDown={e => e.target.style.backgroundColor = "#0b3d0b"}
          onMouseUp={e => e.target.style.backgroundColor = "#168534"}
        >
          BET NOW
        </button>

        {/* Explore Button */}
        <button 
          className="px-6 py-3 bg-white text-black font-bold rounded-md shadow-md border border-black transition-all"
          style={{
            width: "164.4px", height: "73.9px", left:"%0",  // Adjust button size
          }}
          onMouseDown={e => e.target.style.backgroundColor = "#dcdcdc"}
          onMouseUp={e => e.target.style.backgroundColor = "white"}
        >
          EXPLORE
        </button>
      </div>

      {/* Stats Image (60% width, centered, overlapping the bottom of Image) */}
      <img 
        src="/landingassets/Stats.svg" 
        alt="Stats" 
        className="absolute left-1/2 w-[60%] h-auto translate-x-[-50%] top-[81%] translate-y-[-50%]"
      />

      {/* Shades Image (Small, at the bottom left, 50% out of the screen horizontally) */}
      <img 
        src="/landingassets/Shades.svg" 
        alt="Shades" 
        className="absolute bottom-0 left-0 w-16 h-auto translate-x-[-40%]"
      />
    </section>
  );
};

export default Content;

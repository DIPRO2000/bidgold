import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden pt-[2.5cm]">
      {/* Help Image */}
      <img 
        src="/landingassets/Help.svg" 
        alt="Help" 
        className="absolute top-0 left-0 w-full h-auto z-2" 
      />

<button 
  onClick={() => console.log("Help button clicked")} 
  className="absolute font-bold rounded-lg shadow-lg cursor-pointer transition-all"
  style={{ 
    top: "10vh", left: "86vw", transform: "translate(-50%, -50%)",
    padding: "clamp(0.8rem, 1.5vw, 2rem) clamp(2rem, 3vw, 4rem)", 
    fontSize: "clamp(0.8rem, 1.2vw, 1.5rem)",
    backgroundColor: "white", color: "#166534",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", zIndex: 3
  }}
  onMouseDown={e => Object.assign(e.target.style, { backgroundColor: "#0b3d0b", color: "white" })}
  onMouseUp={e => Object.assign(e.target.style, { backgroundColor: "white", color: "#166534" })}
>
  GET HELP
</button>



      {/* Footer Image */}
      <img 
        src="/landingassets/Footer Image.svg" 
        alt="Footer" 
        className="w-full h-auto block" 
      />

      {/* Footer Text */}
      <img 
        src="/landingassets/Footer.svg" 
        alt="FooterTxt" 
        className="absolute left-1/2 top-[calc(2.5cm+50%)] transform -translate-x-1/2 -translate-y-1/2 max-w-[80%] h-auto z-3" 
      />

      {/* Shades2 Image */}
      <img 
        src="/landingassets/Shades-2.svg" 
        alt="Shades" 
        className="absolute right-0 bottom-0 w-[5%] h-auto z-3"
      />
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { RefreshCcwDot } from 'lucide-react';

function Content() {
  const [apiUsed, setApiUsed] = useState(123);
  const [apiRemaining, setApiRemaining] = useState(120);

  const handleRefresh = () => {
    const newUsed = Math.floor(Math.random() * 5000);
    const newRemaining = 125000 - newUsed;
    setApiUsed(newUsed);
    setApiRemaining(newRemaining);
  };

  return (
    <section id="content">
      <div className="relative w-full h-[33vh] md:h-96 flex flex-col items-center justify-center text-black text-3xl font-bold">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/loginimg.svg')",
            backgroundPosition: "center bottom",
            filter: "brightness(0.7)",
          }}
        ></div>

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Foreground Content */}
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl mb-2">WELCOME, ADMIN.</h1>

          {/* API Stats + Refresh */}
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center text-sm md:text-base font-medium mt-2">
            <span className="bg-black/30 px-3 py-1 rounded-md">
              API used: <span className="font-semibold">{apiUsed}</span>
            </span>
            <span className="bg-black/30 px-3 py-1 rounded-md">
              API left: <span className="font-semibold">{apiRemaining}</span>
            </span>

            <button
              onClick={handleRefresh}
              className="flex items-center gap-1 px-3 py-1 cursor-pointer bg-black/30 text-white rounded-md text-sm hover:bg-white hover:text-[#208C53] transition"
            >
              <RefreshCcwDot size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;

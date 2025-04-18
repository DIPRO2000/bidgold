import React from 'react';

function Agent_content({ agentName = "John Doe", agentID = "AGT123456" }) {
  return (
    <section id="content">
      <div className='relative w-full h-[33vh] md:h-96 flex flex-col items-center justify-center text-black text-3xl font-bold'>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/loginimg.svg')",
            backgroundPosition: "center bottom",
            filter: "brightness(0.7)",
          }}
        ></div>

        {/* Transparent Layer */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-5">
            <img src='/Profile.svg' alt='Profile Icon' className="w-12 h-12 md:w-28 md:h-28"/>
            <h1 className="text-4xl md:text-5xl ">{agentName}</h1>
          </div>
          <p className="text-xl md:text-2xl font-medium md:ml-36">Agent ID: {agentID}</p>
        </div>
      </div>
    </section>
  );
}

export default Agent_content;

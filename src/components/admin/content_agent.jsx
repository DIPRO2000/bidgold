import React from 'react'

function Content_agent() {
  return (
    <section id="content">
    <div className='relative w-full h-[33vh] md:h-96 flex flex-col items-center justify-center text-black text-3xl font-bold'>
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
        <h1 className="text-4xl md:text-5xl mb-4">REGISTER AN AGENT</h1>
        
      </div>
    </div>
    </section>
  )
}

export default Content_agent;

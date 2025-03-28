import React from 'react';

function Content() {
  return (
    <div 
      className='pt-20 min-h-[50vh] bg-[url("public/settings.svg")] bg-cover bg-left flex flex-col md:flex-row items-center space-x-0 md:space-x-3 px-6 md:px-20'
    >
      <img src="Profile.svg" className="w-32 md:w-48 mb-4 md:mb-0" alt="Profile" />
      <div className="text-center md:text-left">
        <span className='font-bold text-3xl md:text-5xl block'>John Doe</span> 
        <span className='font-semibold italic text-lg md:text-xl block mt-1'>BET ID: ABCD673839XX</span>
        <div className='mt-4 text-sm md:text-base'>
          <span className='font-semibold italic '>WINNING BET: 55%  <b>|</b> </span> 
          <span className='font-semibold italic'>LOSING BET: 45%</span>
        </div>
      </div>
    </div>
  );
}

export default Content;
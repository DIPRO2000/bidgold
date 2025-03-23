import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="relative flex justify-center bg-white px-4">
        {/* Main Form Container */}
        <div className="bg-gradient-to-b from-[#47B67C] to-[#208C53] p-8 rounded-lg shadow-2xl w-full m-20 mx-36 relative z-10">
          <img src="register3.svg" alt="random" className="w-full h-20 mb-10 mx-auto" />
          <div className="flex mt-2">
            <h1 className="text-xl md:text-2xl font-bold text-black rounded-2xl px-4 py-2 inline-block shadow-[0_4px_8px_rgba(0,0,0,0.4)] w-96 text-center">
              <i>ALMOST DONE</i>
            </h1>
          </div>

          <div className="flex flex-col font-bold md:flex-row mt-4">
            <div className="w-1/2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam neque ut rutrum fringilla. Vestibulum et accumsan tortor, varius facilisis nulla. Sed tempor posuere arcu a posuere. Aliquam sollicitudin, dui pulvinar venenatis lacinia, lorem massa iaculis magna, at eleifend arcu sapien vel sapien. Cras ut justo in sem interdum iaculis.
              </p>

              {/* Checkbox for Acceptance */}
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="accept"
                  className="w-6 h-6 accent-green-600 rounded-3xl"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor="accept" className="ml-2 text-white">I accept</label>
              </div>

              {/* DONE Button */}
              <button
                className={`mt-6 bg-white text-green-600 w-full font-bold sm:w-1/3 md:w-1/4 lg:w-1/5 border-2 border-black p-4 rounded-md shadow-inner shadow-black transition-all duration-300
                  ${isChecked ? 'hover:bg-gray-400' : 'opacity-50 cursor-not-allowed'}`}
                onClick={() => isChecked && navigate('/login')}
                disabled={!isChecked} 
              >
                DONE
              </button>
            </div>

            {/* Right-Side Image */}
            <img src="Image.svg" alt="random" className="rounded-lg w-3/5 md:w-1/4 mt-6 md:mt-0 md:ml-auto" />
          </div>
        </div>

        {/* Background Images (No Position Change) */}
        <div className="absolute -right-8 mt-2 overflow-hidden">
          <img src="Shades.svg" alt="random" className="w-full h-full" style={{ clipPath: "inset(0 30% 0 0)" }} />
        </div>

        <div className="absolute -left-8 bottom-0 overflow-hidden">
          <img src="leftshades.svg" alt="random" className="w-full h-full" style={{ clipPath: "inset(0 0 0 30%)" }} />
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-0 left-0 flex justify-center mb-4 w-full">
        <button 
  className="text-center w-2/3 md:w-[1190px] max-w-[1190px] h-8 bg-[#D9D9D9] flex justify-center font-bold items-center gap-3 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#47B67C] hover:to-[#208C53] hover:text-black"
  onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
>
  Back to the Top <img src="up.svg" className="w-4" />
</button>

        </div>
      </div>
    </>
  );
}

export default Form;

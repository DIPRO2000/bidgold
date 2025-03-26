import React from 'react';

function Form() {
  return (
    <>
      <div className="relative flex justify-center bg-white px-4">
        {/* Main Form Container */}
        <div className="bg-gradient-to-b from-[#47B67C] to-[#208C53] p-8 rounded-lg shadow-2xl w-full m-20 mx-36 relative z-10">
          <div className="flex mt-2">
            <h1 className="text-xl md:text-2xl font-bold text-black rounded-2xl px-4 py-2 inline-block shadow-[0_4px_8px_rgba(0,0,0,0.4)] w-96 text-center">
              <i>ENTER YOUR DETAILS</i>
            </h1>
          </div>

          {/* Form & Image Section */}
          <div className="flex flex-col md:flex-row items-center mt-4">
            {/* Form */}
            <form className="w-full md:w-2/3">
              <label className="block mt-2">
                <div className="flex flex-col">
                  <span className="text-white w-fit px-2 h-6 font-semibold">USERNAME</span>
                  <input
                    type="text"
                    className="form-input w-full md:w-80 rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter your Username"
                  />
                </div>
              </label>

              <label className="block mt-4">
                <div className="flex flex-col">
                  <span className="text-white w-fit px-2 h-6">PASSWORD</span>
                  <input
                    type="password"
                    className="form-input w-full md:w-80 rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter your password"
                  />
                </div>
              </label>

              <button
                type="button"
                className="mt-12 bg-white text-black w-full font-bold hover:bg-gray-400 sm:w-1/3 md:w-1/4 lg:w-1/5 border-2 border-black p-4 rounded-md shadow-inner shadow-black"
                 // Corrected navigate usage
              >
                DONE
              </button>
            </form>

            {/* Right-Side Image */}
            <img src="Image.svg" alt="random" className="rounded-lg w-3/5 md:w-1/4 mt-6 md:mt-0 md:ml-auto" />
          </div>
        </div>

        {/* Background Images (No Position Change) */}
        <div className="absolute -right-8 mt-2 overflow-hidden">
          <img
            src="Shades.svg"
            alt="random"
            className="w-full h-full"
            style={{ clipPath: "inset(0 30% 0 0)" }}
          />
        </div>

        <div className="absolute -left-8 bottom-0 overflow-hidden">
          <img
            src="leftshades.svg"
            alt="random"
            className="w-full h-full"
            style={{ clipPath: "inset(0 0 0 30%)" }}
          />
        </div>

        {/* Back to Top Button Positioned Next to leftshades.svg */}
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

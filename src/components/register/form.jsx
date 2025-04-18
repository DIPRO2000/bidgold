import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (event) => {
    event.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      alert("Please fill in both First Name and Last Name.");
      return;
    }

    localStorage.setItem("userDetails", JSON.stringify(formData));
    navigate("/register2");
  };

  return (
    <>
      <div className="relative flex justify-center bg-white px-4 dark:bg-[#2D2D2D]">
        <div className="bg-gradient-to-b from-[#47B67C] to-[#208C53] p-8 rounded-lg shadow-2xl w-full m-20 mx-36 relative z-10">
          <img src="register1.svg" alt="register header" className="w-full h-20 mb-10 mx-auto" />
          
          <div className="flex mt-2">
            <h1 className="text-xl md:text-2xl font-bold text-[#F6BA02] rounded-2xl px-4 py-2 inline-block shadow-[0_4px_8px_rgba(0,0,0,0.4)] w-96 text-center">
              <i>LET'S GET STARTED</i>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-4">
            <form className="w-full md:w-2/3" onSubmit={handleNext}>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">First Name</span>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input w-full rounded p-2 bg-white text-black border-2 border-black" 
                    placeholder="Enter First Name" 
                    required
                  />
                </label>
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Last Name</span>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input w-full rounded p-2 bg-white text-black border-2 border-black" 
                    placeholder="Enter Last Name" 
                    required
                  />
                </label>
              </div>

              <button 
                type="submit"
                className="mt-12 dark:bg-[#2D2D2D] bg-white hover:bg-gray-400 text-green-600 w-full font-bold sm:w-1/3 md:w-1/4 lg:w-1/5 border-2 border-black p-4 rounded-md shadow-inner shadow-black"
              >
                NEXT
              </button>
            </form>

            <img src="Image.svg" alt="illustration" className="rounded-lg w-3/5 md:w-1/4 mt-6 md:mt-0 md:ml-auto" />
          </div>
        </div>

        <div className="md:absolute -right-8 mt-2 overflow-hidden">
          <img src="Shades.svg" alt="design" className="w-full h-full" style={{ clipPath: "inset(0 30% 0 0)" }} />
        </div>

        <div className="absolute bottom-0 left-0 flex justify-center mb-4 w-full">
          <button
            className="text-center w-2/3 dark:bg-[#7C7C7C] md:w-[1190px] max-w-[1190px] h-8 bg-[#D9D9D9] flex justify-center font-bold items-center gap-3 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#47B67C] hover:to-[#208C53] hover:text-black"
            onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
          >
            Back to the Top <img src="up.svg" className="w-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;

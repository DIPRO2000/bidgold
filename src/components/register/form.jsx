import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleNext = (event) => {
    event.preventDefault();

    // Form validation (checking empty fields)
    if (!formData.firstName || !formData.lastName || !formData.dateOfBirth || !formData.phone || !formData.gender) {
      alert("Please fill in all fields.");
      return;
    }

    // Convert Date to "DD-MMM-YYYY"
    const dob = new Date(formData.dateOfBirth);
    const formattedDOB = dob.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(",", "");

    // Store data in localStorage (or pass it via state)
    localStorage.setItem("userDetails", JSON.stringify({ ...formData, dateOfBirth: formattedDOB }));

    navigate("/register2"); // Navigate to next registration step
  };

  return (
    <>
      <div className="relative flex justify-center bg-white px-4">
        {/* Main Form Container */}
        <div className="bg-gradient-to-b from-[#47B67C] to-[#208C53] p-8 rounded-lg shadow-2xl w-full m-20 mx-36 relative z-10">
          <img src="register1.svg" alt="random" className="w-full h-20 mb-10 mx-auto" />
          <div className="flex mt-2">
            <h1 className="text-xl md:text-2xl font-bold text-black rounded-2xl px-4 py-2 inline-block shadow-[0_4px_8px_rgba(0,0,0,0.4)] w-96 text-center">
              <i>LET'S GET STARTED</i>
            </h1>
          </div>

          {/* Form & Image Section */}
          <div className="flex flex-col md:flex-row items-center mt-4">
            {/* Form */}
            <form className="w-full md:w-2/3" onSubmit={handleNext}>
              {/* First Name & Last Name */}
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
              
              {/* Date of Birth & Phone Number */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Date of Birth</span>
                  <input 
                    type="date" 
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="form-input w-full rounded p-2 bg-white text-black border-2 border-black" 
                    required
                  />
                </label>
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Phone No</span>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input w-full rounded p-2 bg-white text-black border-2 border-black" 
                    placeholder="Enter Phone Number" 
                    required
                  />
                </label>
              </div>
              
              {/* Gender */}
              <label className="block mt-4">
                <span className="text-white w-fit px-2 h-6 font-semibold">Gender</span><br/>
                <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-input w-full md:w-80 rounded p-2 bg-white text-black border-2 border-black"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <button 
                type="submit"
                className="mt-12 bg-white hover:bg-gray-400 text-green-600 w-full font-bold sm:w-1/3 md:w-1/4 lg:w-1/5 border-2 border-black p-4 rounded-md shadow-inner shadow-black"
              >
                NEXT
              </button>
            </form>

            {/* Right-Side Image */}
            <img src="Image.svg" alt="random" className="rounded-lg w-3/5 md:w-1/4 mt-6 md:mt-0 md:ml-auto" />
          </div>
        </div>

        {/* Background Images */}
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

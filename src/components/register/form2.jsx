import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form2() {
  const navigate = useNavigate();

  // State for Form2 inputs
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve previous form data from localStorage
    const previousData = JSON.parse(localStorage.getItem("userDetails"));

    if (!previousData) {
      alert("Previous form data missing. Please restart registration.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Combine both form data
    const completeData = { ...previousData, ...formData };
    console.log(JSON.stringify(completeData));
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      alert("Registration Successful!");
      localStorage.removeItem("userDetails"); // Clear stored data
      navigate("/register3"); // Redirect after successful registration
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="relative flex justify-center bg-white px-4 dark:bg-[#2D2D2D]">
        {/* Main Form Container */}
        <div className="bg-gradient-to-b from-[#47B67C] to-[#208C53] p-8 rounded-lg shadow-2xl w-full m-20 mx-36 relative z-10">
          <img src="register2.svg" alt="random" className="w-full h-20 mb-10 mx-auto" />
          <div className="flex mt-2">
            <h1 className="text-xl md:text-2xl font-bold text-black rounded-2xl px-4 py-2 inline-block shadow-[0_4px_8px_rgba(0,0,0,0.4)] w-96 text-center">
              <i>USER SECURITY DETAILS</i>
            </h1>
          </div>

          {/* Form & Image Section */}
          <div className="flex flex-col md:flex-row items-center mt-4">
            {/* Form */}
            <form className="w-full md:w-2/3" onSubmit={handleSubmit}>
              {/* Email & Username */}
              <div className="flex flex-col md:flex-row gap-4">
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter Email"
                    required
                  />
                </label>
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Username</span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-input w-full rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter Username"
                    required
                  />
                </label>
              </div>

              {/* Password & Confirm Password */}
              <div className="flex flex-col gap-4 mt-4">
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Password</span><br />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input w-full md:w-1/2 rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter Password"
                    required
                  />
                </label>
                <label className="block w-full">
                  <span className="text-white w-fit px-2 h-6 font-semibold">Confirm Password</span><br />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input w-full md:w-1/2 rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Confirm Password"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-12 bg-white dark:bg-[#2D2D2D]  text-green-600 w-full font-bold hover:bg-gray-400 sm:w-1/3 md:w-1/4 lg:w-1/5 border-2 border-black p-4 rounded-md shadow-inner shadow-black"
              >
                REGISTER
              </button>
            </form>

            {/* Right-Side Image */}
            <img src="Image.svg" alt="random" className="rounded-lg w-3/5 md:w-1/4 mt-6 md:mt-0 md:ml-auto" />
          </div>
        </div>

        {/* Background Images */}
        <div className="md:absolute -right-8 mt-2 overflow-hidden">
          <img src="Shades.svg" alt="random" className="w-full h-full" style={{ clipPath: "inset(0 30% 0 0)" }} />
        </div>

       

        {/* Back to Top Button */}
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

export default Form2;

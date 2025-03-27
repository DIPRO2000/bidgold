import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), 
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Login Failed!");
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token); // Store JWT token
      alert("Login Successful!");
      window.location.href = "/"; // Redirect after login (change as needed)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="relative flex justify-center bg-white dark:bg-[#2D2D2D] px-4">
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
            <form className="w-full md:w-2/3" onSubmit={handleSubmit}>
              <label className="block mt-2">
                <div className="flex flex-col">
                  <span className="text-white w-fit px-2 h-6 font-semibold">USERNAME</span>
                  <input
                    type="text"
                    className="form-input w-full md:w-80 rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </label>

              <label className="block mt-4">
                <div className="flex flex-col">
                  <div>
                  <span className="text-white w-fit px-2 h-6">PASSWORD</span><br/>
                  <input
                    type="password"
                    className="form-input w-full md:w-80 rounded p-2 bg-white text-black border-2 border-black"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  /><br/>
                  <button
                  type="button"
                  className="text-white hover:underline hover:text-gray-300 text-sm font-semibold"
                  onClick={() => alert("Redirect to Forgot Password Page")}
                >
                  Forgot Password?
                </button>
                 </div>
                
              </div>
                
              </label>
              
              {/* Forgot Password Button */}
              

              {/* Submit button */}
              <button
                type="submit"
                className="mt-12 bg-white dark:bg-[#2D2D2D] dark:text-[#208C53] text-black w-full font-bold hover:bg-gray-400 sm:w-1/3 md:w-1/4 lg:w-1/5 border-2 border-black p-4 rounded-md shadow-inner shadow-black"
              >
                SIGN IN
              </button>
              <div>Don't have an account?  <button className="text-white hover:text-gray-400 hover:underline" onclic> Register.</button></div>
            </form>

            {/* Right-Side Image */}
            <img src="Image.svg" alt="random" className="rounded-lg w-3/5 md:w-1/4 mt-6 md:mt-0 md:ml-auto" />
          </div>
        </div>

        {/* Background Images (No Position Change) */}
        <div className="md:absolute -right-8 mt-2 overflow-hidden">
          <img src="Shades.svg" alt="random" className="w-full h-full" style={{ clipPath: "inset(0 30% 0 0)" }} />
        </div>

        {/* Back to Top Button Positioned Next to leftshades.svg */}
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

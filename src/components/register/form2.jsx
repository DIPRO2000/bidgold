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
    profileImage: null, // State for storing the uploaded image
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
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
    <div className="relative flex justify-center bg-white px-4 dark:bg-[#2D2D2D]">
      <div className="bg-gradient-to-b from-[#47B67C] to-[#208C53] p-8 rounded-lg shadow-2xl w-full m-20 mx-36 relative z-10">
        <img src="register2.svg" alt="random" className="w-full h-20 mb-10 mx-auto" />
        <h1 className="text-xl md:text-2xl font-bold text-[#F6BA02] rounded-2xl px-4 py-2 shadow-md w-96 text-center mx-auto">
          <i>USER SECURITY DETAILS</i>
        </h1>

        <form className="w-full mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Email", type: "email", name: "email" },
              { label: "Username", type: "text", name: "username" },
              { label: "Password", type: "password", name: "password" },
              { label: "Confirm Password", type: "password", name: "confirmPassword" },
            ].map(({ label, type, name }) => (
              <label key={name} className="block w-full"> 
                <span className="text-white font-semibold">{label}</span><br/>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="form-input w-full md:w-96 h-12 rounded p-2 bg-white text-black border-2 border-black"
                  placeholder={`Enter ${label}`}
                  required
                />
              </label>
            ))}
          </div>

          <div className="mt-4 w-full">
            <label className="block text-white font-semibold">Profile Picture</label><br/>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="form-input w-full md:w-96 h-12 rounded p-2 bg-white text-black border-2 border-black"
            />
            {formData.profileImage && (
              <img
                src={formData.profileImage}
                alt="Profile Preview"
                className="mt-4 w-32 h-32 object-cover rounded-md border-2 border-white shadow-lg"
              />
            )}
          </div>

          <button
            type="submit"
            className="mt-8 bg-white dark:bg-[#2D2D2D] text-green-600 w-full md:w-96 font-bold hover:bg-gray-400 border-2 border-black p-4 rounded-md shadow-inner shadow-black"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form2;

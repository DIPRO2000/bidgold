import React, { useState } from "react";
import { User } from "lucide-react"; // Importing account icon
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async () => {
    const token = localStorage.getItem("token");
     

    if (!token) {
      alert("PLEASE LOG IN");
      navigate("/login");
      return;
    }

    if (!message.trim()) {
      alert("Feedback message cannot be empty!"); 
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Added token for authentication
        },
        body: JSON.stringify({ feedback: message }),
      });

      const data = await response.json(); // Extracting JSON response

      // if (Date.now() >= expiryTime) {
      //   alert("Session expired. Please log in again.");
      //   localStorage.removeItem("token");
      //   navigate("/login");
      //   return;
      // }

      if (!response.ok) {
        throw new Error(data.message || "Feedback Submission Failed!");
      }

      alert("FEEDBACK SUBMITTED SUCCESSFULLY");
      setMessage(""); // Clear textarea after successful submission
    } catch (err) {
      setError(err.message);
      alert(`Error: ${err.message}`);
    }
  };

  const feedbackData = [
    { name: "User 1", won: "$100", feedback: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind" },
    { name: "User 2", won: "$250", feedback: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind" },
    { name: "User 3", won: "$75", feedback: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind" },
    { name: "User 4", won: "$180", feedback: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind" },
  ];

  return (
    <section className="w-screen flex flex-col items-center">
      {/* Steps & Why Choose Us Images */}
      <img src="/landingassets/STEPS.svg" alt="Steps" className="w-full" />
      <img src="/landingassets/why choose us.svg" alt="Why Choose Us" className="w-full" />

      {/* Feedback Section */}
      <div className="w-screen bg-[#208C53] py-12 flex flex-col items-center">
        <h2 className="text-black text-3xl font-extrabold mb-6 self-start ml-6">
          Client's Valuable Feedback
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-6">
          {feedbackData.map((item, index) => (
            <div key={index} className="bg-[#47B67C] p-6 rounded-xl shadow-lg h-[220px] flex flex-col justify-start">
              {/* Name, Won, and Icon (Top-Left Aligned) */}
              <div className="flex items-center space-x-2 mb-2">
                <User size={24} className="text-black" />
                <h3 className="font-bold text-xl text-black">{item.name}</h3>
              </div>
              <p className="text-lg font-bold text-black">Won: {item.won}</p>

              {/* Feedback Text */}
              <p className="text-md mt-2 font-medium text-black">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Image & Form */}
      <div className="w-[80%] md:w-[60%] bg-white shadow-lg rounded-lg p-6 mt-6 border border-gray-300">
        <h2 className="text-lg font-extrabold mb-4 text-black">We Value Your Feedback</h2>
        <textarea
          className="w-full h-40 p-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-green-500 text-black"
          placeholder="Share your thoughts with us..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="mt-6 px-9 py-3 bg-green-700 text-white cursor-pointer font-bold rounded-md shadow-md hover:bg-green-800"
          onClick={submitHandler}
        >
          SUBMIT
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </section>
  );
};

export default Body;

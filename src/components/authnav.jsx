import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Switch from "./toggle";

const GuestNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#47B67C] text-white px-6 py-6 shadow-lg z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="w-40" />
        </div>

        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="font-semibold hover:text-gray-200 active:text-black">Home</a>
          <div className="relative" ref={dropdownRef}>
            <button
              className="font-semibold flex items-center gap-1 hover:text-gray-200 active:text-black"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              All Bets <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Live Bets</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Upcoming Bets</a>
              </div>
            )}
          </div>
          <a href="#" className="font-semibold hover:text-gray-200 active:text-black">FAQ</a>
          <div className="relative">
            <button className="font-semibold flex items-center gap-1 active:text-black hover:text-gray-200">Dashboard <ChevronDown size={16} /></button>
          </div>
        </div>

        <div className="hidden md:flex space-x-3">
          <Switch />
          <button
            className={`px-4 py-1 rounded-md font-semibold shadow-md ${
              location.pathname === "/login" ? "bg-[#208C53] text-white shadow-md shadow-gray-900" : "bg-white text-black border-black border-2 hover:bg-gray-200 active:bg-[#208C53] active:text-white active:border-0"
            }`}
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
          <button
            className={`px-4 py-1 rounded-md font-semibold shadow-md ${
              ["/register", "/register2", "/register3"].includes(location.pathname) ? "bg-[#208C53] text-white shadow-md shadow-gray-900" : "bg-white text-black border-black border-2 hover:bg-gray-200 active:bg-[#208C53] active:text-white active:border-0"
            }`}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>

        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 bg-green-800 text-white p-4 rounded-lg space-y-2">
          <a href="#" className="block py-2 border-b border-gray-600">Home</a>
          <div className="relative">
            <button className="w-full text-left py-2 border-b border-gray-600 flex items-center justify-between" onClick={() => setDropdownOpen(!dropdownOpen)}>
              All Bets <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="bg-white text-black rounded shadow-lg w-full">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Live Bets</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Upcoming Bets</a>
              </div>
            )}
          </div>
          <a href="#" className="block py-2 border-b border-gray-600">FAQ</a>
          <div className="relative">
            <button className="w-full text-left py-2 border-b border-gray-600 flex items-center justify-between">Dashboard <ChevronDown size={16} /></button>
          </div>
          <div className="mt-3 flex flex-col items-center space-y-2">
            <Switch />
            <button
              className={`w-32 px-4 py-2 rounded-md font-semibold text-center ${
                location.pathname === "/login" ? "bg-[#208C53] border-2 border-[#208C53] text-white shadow-xl shadow-gray-900" : "bg-white text-green-700 hover:bg-gray-200"
              }`}
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button
              className={`w-32 px-4 py-2 rounded-md font-semibold text-center ${
                ["/register", "/register2", "/register3"].includes(location.pathname) ? "bg-[#208C53] shadow-xl !shadow-gray-900 text-white" : "bg-white text-black border hover:bg-gray-300"
              }`}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GuestNav;

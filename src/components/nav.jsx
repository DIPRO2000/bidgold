import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Switch from "./toggle";

const Mainav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // User data variables
  const userName = "John Doe";
  const profilePic = "Profile.svg";

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

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3 mr-4 items-center">
          <Switch />
          <div className="flex items-center space-x-3">
            <span className="hidden lg:inline-block">{userName}</span>
            <button>
              <img src={profilePic} className="w-10 h-10 rounded-full object-cover" alt="Profile" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
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
            <button className="w-full text-left py-2 border-b border-gray-600 flex items-center justify-between">
              Dashboard <ChevronDown size={16} />
            </button>
          </div>

          {/* User Profile in Mobile View */}
          <div className="mt-3 flex flex-col items-center space-y-2">
            <Switch />
            <div className="flex flex-col items-center">
              <img src={profilePic} className="w-12 h-12 rounded-full object-cover" alt="Profile" />
              <span className="text-sm mt-2">{userName}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Mainav;

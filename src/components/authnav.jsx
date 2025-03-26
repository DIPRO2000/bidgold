import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Dropdown icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className=" w-40" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="font-semibold hover:text-gray-200 active:text-black">Home</a>

          {/* All Bets Dropdown */}
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

          {/* Dashboard Dropdown */}
          <div className="relative">
            <button className="font-semibold flex items-center gap-1 active:text-black hover:text-gray-200">
              Dashboard <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 hidden bg-white text-black rounded shadow-lg w-40 group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
            </div>
          </div>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-3">
        <button className="bg-white text-black border-black border-2 px-4 py-1 rounded-md font-semibold shadow-md shadow-black/50 hover:bg-gray-200 active:bg-[#208C53] active:text-white active:border-0">
  Sign in
</button>

<button className="bg-white text-black border-black border-2 px-4 py-1 rounded-md font-semibold shadow-md shadow-black/50 hover:bg-gray-200 active:bg-[#208C53] active:text-white active:border-0">
  Register
</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-green-800 text-white p-4 rounded-lg space-y-2">
          <a href="#" className="block py-2 border-b border-gray-600">Home</a>
          
          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left py-2 border-b border-gray-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              All Bets
            </button>
            {dropdownOpen && (
              <div className="bg-white text-black rounded shadow-lg w-full">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Live Bets</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Upcoming Bets</a>
              </div>
            )}
          </div>

          <a href="#" className="block py-2 border-b border-gray-600 ">FAQ</a>
          <a href="#" className="block py-2 border-b border-gray-600">Dashboard</a>

          <div className="mt-3 flex flex-col space-y-2">
            <button className="bg-white text-green-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
              Sign In
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold border hover:bg-gray-300">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Switch from "./toggle";

const Mainav = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Log out Successfully");
    window.location.reload();
    setUser(null);
  };

  const getGravatarUrl = (email) => {
    if (!email) return "https://cdn-icons-png.flaticon.com/512/3177/3177440.png";
    const emailHash = new TextEncoder()
      .encode(email.trim().toLowerCase())
      .reduce((acc, byte) => acc + byte.toString(16).padStart(2, "0"), "");
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#47B67C] text-white px-6 py-6 shadow-lg z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="w-40" />
        </div>

        <div className="hidden md:flex space-x-6 text-sm">
          <a href="/" className="font-semibold hover:text-gray-200 active:text-black">Home</a>
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
            <button className="font-semibold flex items-center gap-1 active:text-black hover:text-gray-200">
              Dashboard <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex space-x-3 mr-4 items-center">
          <Switch />
          {user && (
            <div className="flex items-center space-x-3">
              <span className="lg:inline-block">Hello {user.firstName}</span>
              <button>
                <img
                  src={user.profilePic}
                  className="w-10 h-10 rounded-full object-cover"
                  alt="Profile"
                />
              </button>
              <button onClick={logout} className="bg-red-500 px-4 py-2 cursor-pointer rounded text-white hover:bg-red-600">
                Log Out
              </button>
            </div>
          )}
        </div>

        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Mainav;
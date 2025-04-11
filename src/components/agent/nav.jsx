import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Switch from "./toggle";

const Mainav = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
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

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#47B67C] text-white px-6 py-6 shadow-lg z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="w-40" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="/" className="font-semibold hover:text-gray-200 active:text-black">Home</a>
          <a href="#" className="font-semibold hover:text-gray-200 active:text-black">Dashboard</a>
        </div>

        {/* Desktop Profile + Toggle + Dropdown */}
        <div className="hidden md:flex items-center space-x-3">
          <Switch />
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none hover:text-gray-200"
            >
              <span className="lg:inline-block">Hello {user?.firstName || "John"}</span>
              <img
                src={user?.profilePic || "/Profile.svg"}
                className="w-10 h-10 rounded-full object-cover"
                alt="Profile"
              />
              <ChevronDown size={16} />
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-40">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
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
        <div className="md:hidden mt-4 bg-white dark:bg-[#7C7C7C] text-black rounded-lg shadow-lg px-6 py-4 space-y-3">
          <a href="/" className="block font-medium hover:text-[#47B67C]">Home</a>
          <a href="#" className="block font-medium hover:text-[#47B67C]">Dashboard</a>

          {/* Mobile User Info */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={user?.profilePic || "/Profile.svg"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : "John Doe"}</span>
              </div>
              <Switch />
            </div>
            {user && (
              <button
                onClick={logout}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Mainav;

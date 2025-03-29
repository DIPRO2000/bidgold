import React, { useState, useEffect, useRef } from "react";
import Mainav from "./nav";
import GuestNav from "./authnav";

const NavbarManager = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
      setUser(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return token ? <Mainav user={user} setToken={setToken} /> : <GuestNav />;
};

export default NavbarManager;


import React, { useState, useEffect, useRef } from "react";
import Mainav from "./nav";
import GuestNav from "./authnav";

const NavbarManager = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [agent, setAgent] = useState(
    localStorage.getItem("agent") ? JSON.parse(localStorage.getItem("agent")) : null
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
      setAgent(localStorage.getItem("agent") ? JSON.parse(localStorage.getItem("agent")) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return token ? <Mainav user={agent} setToken={setToken} /> : <GuestNav />;
};

export default NavbarManager;


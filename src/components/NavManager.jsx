import React, { useState, useEffect, useRef } from "react";
import Mainav from "./nav";
import AgentNav from "../components/agent/nav";
import GuestNav from "./authnav";

const NavbarManager = () => {
  const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token").split(" ")[1]:null);
  if(localStorage.getItem("user"))
  {
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
  
    return token ? <Mainav user={user} setUser={setUser} /> : <GuestNav />;
  }
  else if(localStorage.getItem("agent"))
  {
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
  
    return token ? <AgentNav user={agent} setToken={setToken} /> : <GuestNav />;
  }
  else
  {
    return <GuestNav/>
  }
  
};

export default NavbarManager;

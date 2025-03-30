import React from "react";
import NavbarManager from "../NavManager.jsx"; // Ensure correct path
import Content from "./content";
//import BettingStats from "./bettingstats";
//import Form from "./form";
import Fixtures from "./fixtures.jsx";
import Footer from "./Footer";
import Body from "./body";
function Landing() {
  return (
    <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <NavbarManager/>
      <Content />
      
      <Fixtures />
      <Body />
      <Footer />
    </div>
  );
}

export default Landing;

import React from "react";
import GuestNav from "../authnav"; // Ensure correct path
import Content from "./content";
import MatchFixtures from "./fixtures"; // Ensure correct path

import Footer from "./Footer";
import Body from "./body";
function Landing() {
  return (
    <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <GuestNav/>
      <Content />
      
      <MatchFixtures />
      <Body />
      <Footer />
    </div>
  );
}

export default Landing;

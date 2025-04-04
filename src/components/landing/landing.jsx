import React from "react";
import GuestNav from "../authnav"; // Ensure correct path
import Content from "./content";
import MatchFixtures from "./fixtures"; // Ensure correct path
import BettingDashboard from "./bettings";
import Feedback from "./feedback";
import Footer from "./Footer";
import Body from "./body";
import Authnav from "../authnav"; // Ensure correct path
import HelpBanner from "./gethelp";
import Sports from "./sports";

function Landing() {
  return (
    <div className="pt-20 dark:bg-[#2D2D2D]"> {/* Added padding to prevent content overlap */}
      <Authnav />

      <Content />
      <Sports />
      <MatchFixtures />
      <Body />
      <BettingDashboard />
      <Feedback />
      <HelpBanner />
      <Footer />
    </div>
  );
}

export default Landing;

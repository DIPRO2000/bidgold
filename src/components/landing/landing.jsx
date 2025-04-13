import React, { useState } from "react";
import TopNav from "../topnav"; // comes only once
import NavbarManager from "../NavManager";
import Carousel from "./Carousel"; // modern sliding section
import Sports from "./sports";
import MatchFixtures from "./fixtures";
import HelpBanner from "./gethelp";
import Footer from "./Footer";

function Landing() {
  const [activeSport, setActiveSport] = useState("all");

  return (
    <div className="dark:bg-[#2D2D2D]">
      {/* Topmost Nav */}
      <TopNav />

      {/* Rest of the page */}
      <div className="pt-14">
        <TopNav />
        <NavbarManager />
        <Carousel />
        <Sports activeSport={activeSport} setActiveSport={setActiveSport} />
        <MatchFixtures sport={activeSport} />
        <HelpBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;

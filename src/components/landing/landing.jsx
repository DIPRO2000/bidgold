import React, { useState } from "react";
import TopNav from "./../topnav";
import NavbarManager from "../NavManager";
import Carousel from "./Carousel"; // modern sliding section
import Sports from "./sports";
import MatchFixtures from "./fixtures";
import HelpBanner from "./gethelp";
import Footer from "./Footer";

function Landing() {
  const [activeSport, setActiveSport] = useState("all");

  return (
    // <div className="pt-20 dark:bg-[#2D2D2D]"> {/* Added padding to prevent content overlap */}
      /* <NavbarManager/>
      <Content />
      <Sports activeSport={activeSport} setActiveSport={setActiveSport}/>
      <MatchFixtures sport={activeSport}/> */
      
   
      /* <HelpBanner /> */
      /* <Footer /> */

    <div className="dark:bg-[#2D2D2D]">
      <TopNav />
      <div className="pt-14">
        <TopNav />
        <NavbarManager />
        <Carousel />
        
        <Sports activeSport={activeSport} setActiveSport={setActiveSport} />
        <MatchFixtures sport={activeSport} />
        <HelpBanner />
        {/* <Footer /> */}
      </div>
    </div>
    /* </div> */
  );
}

export default Landing;

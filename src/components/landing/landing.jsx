import React,{useState} from "react";
import GuestNav from "../authnav"; // Ensure correct path
import Content from "./content";
import MatchFixtures from "./fixtures"; // Ensure correct path
import BettingDashboard from "./bettings";

import Footer from "./Footer";
import Body from "./body";
import Authnav from "../authnav"; // Ensure correct path
import HelpBanner from "./gethelp";
import NavbarManager from "../NavManager";
import Sports from "./sports";

function Landing() {
  const [activeSport, setActiveSport] = useState("all");

  return (
    <div className="pt-20 dark:bg-[#2D2D2D]"> {/* Added padding to prevent content overlap */}
      <NavbarManager/>
      <Content />
      <Sports activeSport={activeSport} setActiveSport={setActiveSport}/>
      <MatchFixtures sport={activeSport}/>
      <Body />
      <BettingDashboard />
   
      <HelpBanner />
      <Footer />
    </div>
  );
}

export default Landing;

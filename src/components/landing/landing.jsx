import React,{useState} from "react";

import Content from "./content";
import MatchFixtures from "./fixtures"; // Ensure correct path


import Footer from "./Footer";

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
<<<<<<< HEAD
      {/* <Body /> */}
      {/* <BettingDashboard /> */}
=======
      
>>>>>>> 6f607e83782df4872375c72091aa7903203534b7
   
      {/* <HelpBanner /> */}
      <Footer />
    </div>
  );
}

export default Landing;

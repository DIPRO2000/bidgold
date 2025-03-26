import React from "react";
import Navbar from "../authnav"; // Ensure correct path
import Content from "./content";
import Form3 from "./form3";
import Footer from "./footer";

function Register3() {
  return (
    <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <Navbar />
      <Content />
      <Form3 />
      <Footer />
    </div>
  );
}

export default Register3;

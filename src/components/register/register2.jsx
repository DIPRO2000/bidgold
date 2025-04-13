import React from "react";
import NavbarManager from "../agent/Navbarmanager"; // Ensure correct path
import Content from "./content";
import Form2 from "./form2";
import Footer from "./footer";

function Register2() {
  return (
    <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <NavbarManager />
      <Content />
      <Form2 />
      <Footer />
    </div>
  );
}

export default Register2;

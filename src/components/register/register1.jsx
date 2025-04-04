import React from "react";
import NavbarManager from "../NavManager"; // Ensure correct path
import Content from "./content";
import Form from "./form";
import Footer from "./footer";

function Register() {
  return (
    <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <NavbarManager />
      <Content />
      <Form />
      <Footer />
    </div>
  );
}

export default Register;

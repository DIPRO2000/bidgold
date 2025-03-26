import React from "react";
import Navbar from "../authnav"; // Ensure correct path
import Content from "./content";
import Form from "./form";
import Footer from "./footer";

function Login() {
  return (
    <div className="pt-20"> {/* Added padding to prevent content overlap */}
      <Navbar />
      <Content />
      <Form />
      <Footer />
    </div>
  );
}

export default Login;

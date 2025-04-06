import React from 'react'
import Content from './content';
import NavbarManager from '../Navbarmanager';
import Form from './form';
import Footer from './footer';
function LoginAtgent() {
  return (
    <div>
      <NavbarManager />
      <Content />
      <Form />
      <Footer />
    </div>
  )
}

export default  LoginAtgent;


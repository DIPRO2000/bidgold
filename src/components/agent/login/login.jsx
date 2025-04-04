import React from 'react'
import Content from './content';
import GuestNav from '../../authnav';
import Form from './form';
import Footer from './footer';
function LoginAtgent() {
  return (
    <div>
        <GuestNav />
      <Content />
      <Form />
      <Footer />
    </div>
  )
}

export default  LoginAtgent;


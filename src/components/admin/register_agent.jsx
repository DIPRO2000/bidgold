import React from 'react'
import Content_agent from './content_agent';
import Mainav from './nav';
import Form from './agent_form';
function Register_agent() {
  return (
    <div>
      <Mainav />
        <Content_agent />
        <Form />
    </div>
  )
}

export default Register_agent;

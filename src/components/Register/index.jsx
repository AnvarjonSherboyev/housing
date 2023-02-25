import React from 'react'
import { Container } from './style';
import { Tabs } from 'antd';
import { SignIn } from './../SignIn/index';
import { SignUp } from './../SignUp/index';


export const Register = () => {

  const items = [
    {
      key: '1',
      label: `Sign In`,
      children: (
        <SignIn />
      ),
    },
    {
      key: '2',
      label: `Sign Up`,
      children: (
        <SignUp />
      ),
    },
  ];

  return (
    <Container>
      <Tabs defaultActiveKey="1" items={items} className='Title' />
    </Container>
  )
}

export default Register;
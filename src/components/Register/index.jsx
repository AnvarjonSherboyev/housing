import React from 'react'
import { Container } from './style';
import { Tabs } from 'antd';
import { SignIn } from './../SignIn/index';
import { SignUp } from './../SignUp/index';
// import { message } from 'antd';


export const Register = () => {

  // const info = () => {
  //   message.info('Successfully Sign Up and We send verification code to your email !')
  // };


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
  const items2 = [
    {
      key: '1',
      label: `Sign Up`,
      children: (
        <SignUp />
      ),
    },
    {
      key: '2',
      label: `Sign In`,
      children: (
        <SignIn />
      ),
    },
  ];
  console.log(window.location.pathname, 'res')
  return (
    <Container>
      <Tabs defaultActiveKey="1" items={window.location.pathname === '/signin' ? items  : items2} className='Title' />
    </Container>
  )
}

export default Register;
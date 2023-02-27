import React, { useState } from 'react'
import { Input } from '../Generic/Input/index';
import { Button } from '../Generic/Button/index';
import { Container, Content } from './style';
import { useRequest } from '../../hooks/useRequest';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';




export const SignUp = () => {

  const request = useRequest();
  const [body, setBody] = useState([]);
  const navigate = useNavigate()

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    })
  };

  const info = () => {
    message.info('Successfully Sign Up and We send verification code to your email !')
  };
  const warning = () => {
    message.warning('Your email alredy exist or Email Address is Not a Well Formed !')
  };

  const onSubmit = async () => {
    request({
      url: `/public/auth/register`,
      method: 'POST',
      body,
      me: true,
    })
      .then((res) => {
        console.log(res?.success, 'res')
        if (res?.success === false) {
          warning();
        }
        else {
          info() && navigate('/signin');
        }
      })
    // .catch((status) => {
    //   console.log(status, 'error')
    // });
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign Up</div>
        <Input onChange={onChange} mb='34px' mt='15px' placeholder='email' type='email' />
        <Input onChange={onChange} mb='16px' placeholder='firstname' type='text' />
        <Input onChange={onChange} mb='16px' placeholder='lastname' type='text' />
        <Input onChange={onChange} mb='16px' placeholder='password' type='password' />
        <Button onClick={onSubmit} type="background" width="100%" >Login</Button>
      </Content>
    </Container>
  )
}

export default SignUp;
import React, { useState } from 'react'
import { Input } from './../Generic/Input/index';
import { Button } from './../Generic/Button/index';
import { Container, Content } from './style';
import { useRequest } from './../../hooks/useRequest';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';





export const CardCarousel = () => {

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
    message.info('Successfully logged in !')
  };

  const onSubmit = () => {
    request({ url: `/public/auth/login`, method: 'POST', body, me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate('/home');
          localStorage.setItem('token', res?.authenticationToken);
        }
        info();
      }
    );
    
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign In</div>
        <Input onChange={onChange} mb='44px' placeholder='email' type='email' />
        <Input onChange={onChange} mb='16px' placeholder='password' type='password' />
        <Button onClick={onSubmit} type="background" width="100%" >Login</Button>
      </Content>
    </Container>
  )
}

export default CardCarousel;
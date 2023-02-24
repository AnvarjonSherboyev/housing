import React, { useState } from 'react'
import { Input } from './../Generic/Input/index';
import { Button } from './../Generic/Button/index';
import { Container, Content } from './style';
import { useRequest } from './../../hooks/useRequest';
import { useNavigate } from "react-router-dom";
import { message, Tabs } from 'antd';
import type { TabsProps } from 'antd';




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

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <Container>
      {/* <Content>
        <div className="subTitle">Sign In</div>
        <Input onChange={onChange} mb='44px' placeholder='email' type='email' />
        <Input onChange={onChange} mb='16px' placeholder='password' type='password' />
        <Button onClick={onSubmit} type="background" width="100%" >Login</Button>
      </Content> */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Container>
  )
}

export default CardCarousel;
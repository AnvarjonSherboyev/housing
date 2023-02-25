import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Wrapper, Section, Logo, Link, WrapContainer, Title } from './style';
import { ContentWrap } from './../Filter/style';
import logoImg from '../../assets/icons/logo.svg'
import { navbar } from './../../utils/navbar';
import { Button } from './../Generic/Button/index';
import { Filter } from './../Filter/index';
import { Footer } from './../Footer/index';
import { Popover } from 'antd'





export const Navbar = () => {

  let token = localStorage.getItem('token')
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/register')
  }

  const onClickPro = ({ target: { dataset: { name } } }) => {
    if (name === 'logout') {
      localStorage.removeItem('token')
      navigate('/home')
    }
    else {
      navigate(`${name}`)
    }
  }

  const content = (
    <ContentWrap>
      <Title onClick={onClickPro} data-name='myprofile' >My profile</Title>
      <Title onClick={onClickPro} data-name='my-properties' >My Properties</Title>
      <Title onClick={onClickPro} data-name='favourites' >Favourites</Title>
      <Title onClick={onClickPro} data-name='logout' >Log Out</Title>
    </ContentWrap>
  )

  return (
    <Container>
      <WrapContainer>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo src={logoImg} />
            <h3>Houzing</h3>
          </Section>

          <Section>
            {
              navbar.map(({ title, path, hidden }, index) => {
                return !hidden && (
                  <Link className={({ isActive }) => isActive && 'active'}
                    key={index}
                    to={path} >{title}</Link>
                )
              })
            }
          </Section>

          <Section>
            {
              token ? (
                <Popover placement="topRight" content={content} trigger="click">
                  <Button width={'120px'} >
                    {token ? "Profile" : 'Sign In'}
                  </Button>
                </Popover>
              ) : (
                <Button onClick={onClick} width={'120px'} >Sign In</Button>
              )
            }
          </Section>
        </Wrapper>
      </WrapContainer>
      <Filter />
      <Outlet />
      <Footer />
    </Container >
  )
}

export default Navbar;
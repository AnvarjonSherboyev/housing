import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom';
import { Container, Wrapper, Section, Logo, Link, WrapContainer } from './style';
import logoImg from '../../assets/icons/logo.svg'
import { navbar } from './../../utils/navbar';
import { Button } from './../Generic/Button/index';
import { Filter } from './../Filter/index';
import { Footer } from './../Footer/index';




export const Navbar = () => {

  const navigate = useNavigate()

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
            <Button onClick={() => navigate('/signin')} width={'120px'} >Sign In</Button>
          </Section>
        </Wrapper>
      </WrapContainer>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Navbar;
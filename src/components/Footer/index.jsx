import React from 'react'
import {
  Container, CaruselWrapper, Icon, ContentWrap, Content,
} from './style';



export const Footer = () => {


  return (
    <Container>
      <CaruselWrapper>
        <ContentWrap>

          <Content>

            <Content.Title className="subTitle">Contact Us</Content.Title>
            <Content.Info className="InfoCenter"><Icon.Location />329 Queensberry Street, North Melbourne VIC 3051, Australia.</Content.Info>
            <Content.Info className="InfoCenter"><Icon.Telephone />+998 93 414 88 08</Content.Info>
            <Content.Info className="InfoCenter"><Icon.Email />anvarjon.sherboyev4321@gmail.com</Content.Info>
            <Content.Info className="InfoCenter">
              <Icon><Icon.Facebook /></Icon>
              <Icon><Icon.Twitter /></Icon>
              <Icon><Icon.Instagram /></Icon>
              <Icon><Icon.Linkedin /></Icon>
            </Content.Info>
          </Content>

          <Content>
            <Content.Title className="subTitle">Discover</Content.Title>
            <Content.Info className="InfoCenter">Uzbekistan</Content.Info>
            <Content.Info className="InfoCenter">Andijan</Content.Info>
            <Content.Info className="InfoCenter">Balikychi</Content.Info>
            <Content.Info className="InfoCenter">Muqumiy street</Content.Info>
          </Content>

          <Content>
            <Content.Title className="subTitle">Lists by Category</Content.Title>
            <Content.Info className="InfoCenter">Apartments</Content.Info>
            <Content.Info className="InfoCenter">Condos</Content.Info>
            <Content.Info className="InfoCenter">Houses</Content.Info>
            <Content.Info className="InfoCenter">Offices</Content.Info>
            <Content.Info className="InfoCenter">Villas</Content.Info>
          </Content>

          <Content>
            <Content.Title className="subTitle">Lists by Category</Content.Title>
            <Content.Info className="InfoCenter">Apartments</Content.Info>
            <Content.Info className="InfoCenter">Condos</Content.Info>
            <Content.Info className="InfoCenter">Houses</Content.Info>
            <Content.Info className="InfoCenter">Offices</Content.Info>
            <Content.Info className="InfoCenter">Villas</Content.Info>
          </Content>

        </ContentWrap>
      </CaruselWrapper>
    </Container>
  )
}

export default Footer;
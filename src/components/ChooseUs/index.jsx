import React from 'react'
import {
  Container, CaruselWrapper, Icon, ContentWrap, Content,
} from './style';
import Home from "../../assets/icons/home.svg"
import Phone from "../../assets/icons/Phone.svg"
import sms from "../../assets/icons/sms.svg"
import map from "../../assets/icons/map.svg"



export const ChooseUs = () => {


  return (
    <Container>
      <CaruselWrapper>
        <div className="mainTitle">Why Choose Us?</div>
        <div className="InfoCenter">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
        <ContentWrap>
          <Content>
            <Icon.Img src={sms} />
            <div className="subTitle">Trusted By Thousands</div>
            <div className="InfoCenter">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </Content>
          <Content>
            <Icon.Img src={Home} />
            <div className="subTitle">Trusted By Thousands</div>
            <div className="InfoCenter">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </Content>
          <Content>
            <Icon.Img src={Phone} />
            <div className="subTitle">Trusted By Thousands</div>
            <div className="InfoCenter">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </Content>
          <Content>
            <Icon.Img src={map} />
            <div className="subTitle">Trusted By Thousands</div>
            <div className="InfoCenter">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
          </Content>
        </ContentWrap>
      </CaruselWrapper>
    </Container>
  )
}

export default ChooseUs;
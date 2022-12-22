import React from 'react'
import { Container, Img, Content, Details, Icons, Footer, FooterDiv } from './style';
import noImg from "../../assets/images/no-image.png"

export const HouseCard = ({ url, title, info }) => {
  return (
    <Container>
      <Img src={url || noImg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="Info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="Info">4 Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="Info">4 Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.CarSport />
            <div className="Info">4 Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.SquareFoot />
            <div className="Info">1200 Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <FooterDiv>
          <FooterDiv.Info>$2,800/mo</FooterDiv.Info>
          <div className="subTitle">$7,500/mo</div>
        </FooterDiv>
        <Details>
          <Icons>
            <Icons.Arrow className="my__unique__button__class-asdf123" />
          </Icons>
          <Icons>
            <Icons.Heart className="my__unique__button__class-asdf123" />
          </Icons>
        </Details>
      </Footer>
    </Container>
  )
}

export default HouseCard;
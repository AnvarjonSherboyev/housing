import React from 'react'
import { Container, Img, Content, Details, Icons, Footer, FooterDiv } from './style';
import noImg from "../../assets/images/no-image.png"

export const HouseCard = ({ data = {} }) => {

  const { attachments, name, address, city, region,
    country, price, salePrice, category,
    houseDetails } = data;

  // console.log(data)
  return (
    <Container>
      <Img src={attachments ? attachments[0]?.imgPath : noImg} />
      <Content>
        <div className="subTitle">{name || "New Apartment Nice Wiew"}</div>
        <div className="Info">{address},{city},{country},{region}</div>
        <div className="Info">Category-{category?.name || "none"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="Info">Beds {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="Info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.CarSport />
            <div className="Info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.SquareFoot />
            <div className="Info">Area {houseDetails?.area || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <FooterDiv>
          <FooterDiv.Info>${price || 0}/mo</FooterDiv.Info>
          <div className="subTitle">${salePrice || 0}/mo</div>
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
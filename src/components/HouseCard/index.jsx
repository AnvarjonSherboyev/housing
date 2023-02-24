import React, { useContext } from 'react'
import { Container, Img, Content, Details, Icons, Footer, FooterDiv } from './style';
import noImg from "../../assets/images/no-image.png"
import { message } from 'antd';
import { ProportiesContext } from '../../context/properties'

export const HouseCard = ({ onClick, ml, mr, data = {} }) => {

  const [state] = useContext(ProportiesContext)

  const { attachments, name, address, city, region,
    country, price, salePrice, category,
    houseDetails, favorite, id } = data;

  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    ).then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning('Successfully disliked');
        else res?.success && message.info('Successfully liked');
        state?.refetch && state?.refetch()
      });
  }
  return (
    <Container onClick={onClick} mr={mr} ml={ml} >
      <Img src={attachments[0]?.imgPath.startsWith("http") ? attachments[0]?.imgPath : noImg} />
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
          <Icons onClick={save} favorite={favorite}>
            <Icons.Heart className="my__unique__button__class-asdf123" />
          </Icons>
        </Details>
      </Footer>
    </Container>
  )
}

export default HouseCard;
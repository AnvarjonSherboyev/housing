import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Checkbox } from 'antd';
import {
  Container, WrapContainer, ImgWrapper, ImgWrap, ImgWrap2,
  TextBox2, TextBox, Content, ContentDiv, Icons, ContentDiv2, Details,
  Describe, TextBox3, User,
} from './style';
// import { useRequest } from './../../hooks/useRequest';
import { Input } from './../Generic/Input/index';
import { Button } from './../Generic/Button/index';
import noUser from './../../assets/images/nouser.jpg'
import { Yandex } from './../Generic/YandexMap/index';
import { CardCarousel } from './../Recommended/index';
import noImg from './../../assets/images/no-image.png'
import { message } from 'antd';
import { ProportiesContext } from '../../context/properties'




export const HouseItem = () => {

  const [data, setData] = useState();
  const params = useParams()
  const [state] = useContext(ProportiesContext)
  // const request = useRequest()

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`, {
    }).then((res) => res.json()).then((res) => setData(res?.data))
  }, [params?.id])

  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${data?.id}?favourite=${!data?.favorite}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    ).then((res) => res.json())
      .then((res) => {
        if (data?.favorite) res?.success && message.warning('Successfully disliked');
        else res?.success && message.info('Successfully liked');
        state?.refetch && state?.refetch()
      });
  }

  // console.log(data?.attachments)
  return (
    <Container>
      <WrapContainer>
        <ImgWrapper>
          <ImgWrap>
            <ImgWrap.Img src={data?.attachments[0]?.imgPath || noImg} alt='image' />
          </ImgWrap>
          <ImgWrap2>
            <ImgWrapper>
              <ImgWrap>
                <ImgWrap.Img2 src={data?.attachments[1]?.imgPath || noImg} alt='image' />
              </ImgWrap>
              <ImgWrap>
                <ImgWrap.Img2 src={data?.attachments[2]?.imgPath || noImg} alt='image' />
              </ImgWrap>
            </ImgWrapper>
            <ImgWrapper>
              <ImgWrap>
                <ImgWrap.Img2 src={data?.attachments[3]?.imgPath || noImg} alt='image' />
              </ImgWrap>
              <ImgWrap>
                <ImgWrap.Img2 src={data?.attachments[4]?.imgPath || noImg} alt='image' />
              </ImgWrap>
            </ImgWrapper>
          </ImgWrap2>
        </ImgWrapper>
        <ImgWrapper>
          <TextBox>
            <Content>
              <ContentDiv>
                <h1 className="mainTitle">{data?.name}</h1>
                <div className="Info">{data?.address}, {data?.city}, {data?.country}</div>
              </ContentDiv>
              <ContentDiv>
                <Details>
                  <Icons>
                    <Icons.Arrow className="my__unique__button__class-asdf123" />
                  </Icons>
                  <span className="Info">Share</span>
                  <Icons onClick={save} >
                    <Icons.Heart className="my__unique__button__class-asdf123" />
                  </Icons >
                  <span className="Info">Save</span>
                </Details>
              </ContentDiv>
            </Content>
            <Content>
              <ContentDiv>
                <ContentDiv2>
                  <Icons.Bed />
                  <span className="Info">{data?.houseDetails?.beds || 0} Beds</span>
                  <Icons.Bath />
                  <span className="Info"> {data?.houseDetails?.bath || 0} Bath</span>
                  <Icons.CarSport />
                  <span className="Info">{data?.houseDetails?.garage || 0} Garage</span>
                  <Icons.SquareFoot />
                  <span className="Info">{data?.houseDetails?.area || 0} Area</span>
                  <span className='Info' >{data?.houseDetails.garage} yearBuild </span>
                </ContentDiv2>
              </ContentDiv>
              <ContentDiv>
                <div className="subTitle"><span className='Infodel'>${data?.salePrice}/mo</span> ${data?.price}/mo</div>
                <div className="Info">{data?.country}</div>
              </ContentDiv>
            </Content>
            <ContentDiv>
              <div className="startTitle">describtion</div>
              <Describe>{data?.description || "none"}
                <Describe.Bg></Describe.Bg>
              </Describe>
            </ContentDiv>
            <ContentDiv>
              <span className="startTitle">location</span>
              <TextBox2>
                <ContentDiv2>
                  <TextBox3>
                    <span className="subTitle">address:</span>
                    <span className="Info">{data?.address || "none"}</span>
                  </TextBox3>
                  <TextBox3>
                    <span className="subTitle">city:</span>
                    <span className="Info">{data?.city || "none"}</span>
                  </TextBox3>
                  <TextBox3>
                    <span className="subTitle">area:</span>
                    <span className="Info">{data?.region || "none"}</span>
                  </TextBox3>
                </ContentDiv2>
                <ContentDiv2>
                  <TextBox3>
                    <span className="subTitle">state/County::</span>
                    <span className="Info">{data?.name || "none"}</span>
                  </TextBox3>
                  <TextBox3>
                    <span className="subTitle">zip:</span>
                    <span className="Info">{data?.zipCode || "none"}</span>

                  </TextBox3>
                  <TextBox3>
                    <span className="subTitle">country:</span>
                    <span className="Info">{data?.country || "none"}</span>
                  </TextBox3>
                </ContentDiv2>
              </TextBox2>
            </ContentDiv>
          </TextBox>
          <TextBox2>
            <ContentDiv2>
              <User.Img src={noUser} alt='userImage' />
              <User>
                <span className="subTitle">Anvarjon sherboyev</span>
                <span className="Info">+998 93 414 8808</span>
              </User>
            </ContentDiv2>
            <Input placeholder='Name' />
            <Input placeholder='Phone' />
            <Input placeholder='Email' />
            <span className='subTitle' >Message</span>
            <Input placeholder='Message' />
            <Checkbox className='Info' >By submitting this form I agree to Terms of Use</Checkbox>
            <Button type={'background'} width={'100%'} >Send request</Button>
          </TextBox2>
        </ImgWrapper>
        <Yandex center={data?.location} />
      </WrapContainer>
      <CardCarousel />
    </Container>
  )
}

export default HouseItem;
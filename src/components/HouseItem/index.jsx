import React from 'react'
import { Container, WrapContainer, ImgWrapper, ImgWrap, ImgWrap2 } from './style';




export const HouseItem = () => {
 

  return (
    <Container>
      <WrapContainer>
        <ImgWrapper>
          <ImgWrap>hello</ImgWrap>
          <ImgWrap2>
            <ImgWrapper>
              <ImgWrap>hello</ImgWrap>
              <ImgWrap>hello</ImgWrap>
            </ImgWrapper>
            <ImgWrapper>
              <ImgWrap>hello</ImgWrap>
              <ImgWrap>hello</ImgWrap>
            </ImgWrapper>
          </ImgWrap2>
        </ImgWrapper>
        <h1>HouseItem</h1>
      </WrapContainer>
    </Container>
  )
}

export default HouseItem;
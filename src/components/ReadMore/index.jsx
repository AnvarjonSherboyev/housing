import React, { useRef } from 'react';
import {
  Container, CaruselWrapper, Icon, MainCarusel,
  Img, ButtonDiv, Blur, Content
} from './style';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import { Button } from './../Generic/Button/index';



const contentStyle = {
  margin: 0,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const ReadMore = () => {

  const slider = useRef();

  return (
    <Container>
      <CaruselWrapper>
        <ButtonDiv>
          <Icon.Arrow left={"left"} onClick={() => slider.current?.prev()} />
          <Icon.Arrow onClick={() => slider.current?.next()} />
        </ButtonDiv>
        <Blur></Blur>
        <Content>
          <Content.Title>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</Content.Title>
          <Button width={"180px"} type={"background"} >Read More</Button>
        </Content>
        <MainCarusel ref={slider} dots autoplay>
          <Img style={contentStyle} src={img1} alt="img" />
          <Img src={img2} alt="img" />
          <Img src={img1} alt="img" />
          <Img src={img2} alt="img" />
          <Img src={img1} alt="img" />
          <Img src={img2} alt="img" />

        </MainCarusel>

      </CaruselWrapper>
    </Container>
  )
}

export default ReadMore;
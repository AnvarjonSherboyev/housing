import React, { useRef } from 'react'
import {
  Container, CaruselWrapper, Icon, MainCarusel,
  Img, Button, Blur, Content
} from './style';
import img1 from '../../assets/images/img1.jpeg'
import img2 from '../../assets/images/img2.jpeg'



const contentStyle = {
  margin: 0,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const GenCarousel = () => {

  const slider = useRef();

  return (
    <Container>
      <CaruselWrapper>
        <Button>
          <Icon.Arrow left onClick={() => slider.current?.prev()} />
          <Icon.Arrow onClick={() => slider.current?.next()} />
        </Button>
        <Blur></Blur>
        <Content>
          <Content.Title>Skyper Pool Partment</Content.Title>
          <Content.Describe>
            112 Glenwood Ave Hyde Park, Boston, MA
          </Content.Describe>
          <Content.Sprice>$5,250/mo</Content.Sprice>
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

export default GenCarousel;
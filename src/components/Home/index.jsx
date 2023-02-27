import React from 'react'
import { Container } from './style';
import { GenCarousel } from './../Carousel/index';
import { CatCarousel } from './../CatCarousel/index';
import { CardCarousel } from './../CardCarousel/index';
import { ChooseUs } from './../ChooseUs/index';
import { ReadMore } from './../ReadMore/index';








export const Home = () => {



  return (
    <Container>
      <GenCarousel />
      <CardCarousel />
      <ChooseUs />
      <CatCarousel />
      <ReadMore />
      <CardCarousel />
    </Container>
  )
}

export default Home;
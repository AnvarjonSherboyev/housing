import React from 'react'
import { Container } from './style';
import { GenCarousel } from './../Carousel/index';
import { CatCarousel } from './../CatCarousel/index';
import { CardCarousel } from './../CardCarousel/index';
import { ChooseUs } from './../ChooseUs/index';
import { ReadMore } from './../ReadMore/index';
import { Loader } from './../Loader/index';








export const Home = () => {



  return (
    <Container>
      <GenCarousel />
      <CardCarousel />
      <ChooseUs />
      <CatCarousel />
      <ReadMore />
      <CardCarousel />
      {/* <Loader /> */}
    </Container>
  )
}

export default Home;
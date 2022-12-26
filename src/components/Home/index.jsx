import React from 'react'
import { Container } from './style';
import { GenCarousel } from './../Carousel/index';
import { HouseCard } from './../HouseCard/index';
import { CatCarousel } from './../CatCarousel/index';




export const Home = () => {



  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <CatCarousel />
    </Container>
  )
}

export default Home;
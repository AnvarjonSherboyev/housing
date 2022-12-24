import React from 'react'
import { Container } from './style';
import { GenCarousel } from './../Carousel/index';
import { HouseCard } from './../HouseCard/index';



export const Home = () => {

  

  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  )
}

export default Home;
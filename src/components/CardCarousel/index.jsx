import React, { useEffect, useState } from 'react'
import {
  Container, CaruselWrapper,
  Icon, MainCarusel,
  Button
} from './style';
import { useNavigate } from 'react-router-dom';
import { HouseCard } from './../HouseCard/index';

const { REACT_APP_BASE_URL: url } = process.env

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  dots: true,
  appendDots: (dots) => <h1>{dots}</h1>,
};


export const CardCarousel = () => {

  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
      })
  }, [])
  // console.log(data, "data")

  return (
    <Container>
      <CaruselWrapper>
        <div className="mainTitle">Recommended</div>
        <div className="InfoCenter">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
        <Button>
          <Icon.Arrow left={"left"} />
          <Icon.Arrow />
        </Button>

        <MainCarusel  {...settings} >
          {
            data?.map((value) => {
              return (
                <HouseCard mr={"20px"} ml={"20px"}
                  onClick={() => navigate(`/proporties?${value?.id}`)}
                  data={value}
                  key={value?.id}
                />
              )
            })
          }
        </MainCarusel>

      </CaruselWrapper>
    </Container>
  )
}

export default CardCarousel;
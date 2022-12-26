import React, { useEffect, useState } from 'react'
import { CategoryCard } from './../CategoryCard/index';
import {
  Container, CaruselWrapper,
  Icon, MainCarusel,
  Button
} from './style';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 4,
  speed: 500,
  arrows: true,
  dots: true,
  appendDots: (dots) => <h1>{dots}</h1>,
};


export const CatCarousel = () => {

  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
      })
  }, [])
  // console.log(data, "data")

  return (
    <Container>
      <CaruselWrapper>
        <Button>
          <Icon.Arrow left={"left"} />
          <Icon.Arrow />
        </Button>

        <MainCarusel  {...settings} >
          {
            data?.map((value) => {
              return (
                <CategoryCard onClick={()=>navigate(`/proporties?category_id=${value?.id}`)} data={value} key={value?.id} />
              )
            })
          }
        </MainCarusel>

      </CaruselWrapper>
    </Container>
  )
}

export default CatCarousel;
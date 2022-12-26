import React from 'react'
import { Container, Img, Content, Blur, } from './style';
import noImg from "../../assets/images/no-image.png"
import category from "../../assets/images/category.png"


export const CategoryCard = ({ onClick, data = {} }) => {

  const { name
  } = data;

  // console.log(data)
  return (
    <Container onClick={onClick} >
      <Img src={category || noImg} />
      <Blur />
      <Content>
        {name || "category name"}
      </Content>
    </Container>
  )
}

export default CategoryCard;
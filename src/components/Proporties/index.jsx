import React, { useState, useEffect } from 'react'
import { Container, WrapContainer } from './style';
import { HouseCard } from './../HouseCard/index';
import { useLocation } from 'react-router-dom';


const { REACT_APP_BASE_URL: url } = process.env

export const Proporties = () => {

  const [data, setData] = useState()
  const { search } = useLocation()

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
      })
  }, [search])


  return (
    <Container>
      <WrapContainer>
        {data?.map((value) => {
          return (
            <HouseCard data={value} key={value.id} />
          )
        })}
      </WrapContainer>
    </Container>
  )
}

export default Proporties;
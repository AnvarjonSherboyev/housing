import React, { useState, useEffect } from 'react'
import { Container, WrapContainer } from './style';
import { HouseCard } from './../HouseCard/index';
import { useLocation, useNavigate } from 'react-router-dom';


const { REACT_APP_BASE_URL: url } = process.env

export const Proporties = () => {

  const [data, setData] = useState()
  const { search } = useLocation()
  const navigate = useNavigate()


  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
      })

  }, [search])

  // console.log(data, "data")

  const onSelect = (id) => {
    navigate(`/proporties/${id}`)
  }

  return (
    <Container>
      <div className="title">Proporties</div>
      <div className="InfoCenter">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      <WrapContainer>
        {data?.map((value) => {
          return (
            <HouseCard onClick={() => onSelect(value.id)} data={value} key={value.id} />
          )
        })}
      </WrapContainer>
    </Container >
  )
}

export default Proporties;
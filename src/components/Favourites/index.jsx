import React, { useContext } from 'react';
import { Container, WrapContainer } from './style';
import { HouseCard } from './../HouseCard/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ProportiesContext } from '../../context/properties'


const { REACT_APP_BASE_URL: url } = process.env

export const Favourities = () => {

  // const [data, setData] = useState([])
  const { search } = useLocation()
  const navigate = useNavigate()
  const [dispatch] = useContext(ProportiesContext)


  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(`${url}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
      return await res.json()
    },
    {
      onSuccess: () => {
        dispatch({ type: 'refetch', payload: refetch });
        // setData(res?.data || []);
      },
    }
  );

  // console.log(data, "data")

  const onSelect = (id) => {
    navigate(`/proporties/${id}`)
  }

  console.log(data,'data')
  return (
    <Container>
      <div className="title">Favourities</div>
      <div className="InfoCenter">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      <WrapContainer>
        {data?.data?.length ?
          (data?.data?.map((value) => {
            return (
              <HouseCard onClick={() => onSelect(value.id)} data={value} key={value.id} />
            )
          }))
          :
          <div className="title">Not Found Houses</div>
        }
      </WrapContainer>
    </Container >
  )
}

export default Favourities;
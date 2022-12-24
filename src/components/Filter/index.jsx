import React, { useRef } from 'react'
import {
    Container, InputWrap, Icons,
    Fragment, Title, ContentWrap
} from './style';
import { Input, Button } from './../Generic/index';
import { Popover } from 'antd'
import { uzeReplace } from './../../hooks/useReplace';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from './../../hooks/uzeSearch';



export const Filter = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const query = useSearch()

    const countryRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()

    const roomsRef = useRef()
    const sizeRef = useRef()
    const sortRef = useRef()

    const minPriceRef = useRef()
    const maxPriceRef = useRef()



    const onChange = ({ target: { name, value } }) => {
        navigate(`${location.pathname}${uzeReplace(name, value)}`)
    }


    const content = (
        <ContentWrap>
            <Title>Address</Title>
            <Fragment>
                <Input onChange={onChange}
                    defaultValue={query.get("country")}
                    ref={countryRef}
                    placeholder={'Country...'}
                    name="country"
                />
                <Input onChange={onChange}
                    defaultValue={query.get("region")}
                    ref={regionRef}
                    placeholder={'Region...'}
                    name="region"
                />
                <Input onChange={onChange}
                    defaultValue={query.get("city")}
                    ref={cityRef}
                    placeholder={'City...'}
                    name="city"
                />
                <Input onChange={onChange}
                    defaultValue={query.get("zip_code")}
                    ref={zipRef}
                    placeholder={'Zip code...'}
                    name="zip_code"
                />
            </Fragment>

            <Title>Apartment Info</Title>
            <Fragment>
                <Input onChange={onChange}
                    defaultValue={query.get("room")}
                    ref={roomsRef}
                    placeholder={'Rooms...'}
                    name="room"
                />
                <Input onChange={onChange}
                    defaultValue={query.get("size")}
                    ref={sizeRef}
                    placeholder={'Size...'}
                    name="size"
                />
                <Input onChange={onChange}
                    defaultValue={query.get("sort")}
                    ref={sortRef}
                    placeholder={'Sort...'}
                    name="sort"
                />
            </Fragment>

            <Title>Price</Title>
            <Fragment>
                <Input onChange={onChange}
                    defaultValue={query.get("min_price")}
                    ref={minPriceRef}
                    placeholder={'Min-Price...'}
                    name="min_price"
                />
                <Input onChange={onChange}
                    defaultValue={query.get("max_price")}
                    ref={maxPriceRef}
                    placeholder={'Max-Price...'}
                    name="max_price"
                />
            </Fragment>
            <Fragment>
                <Button width={'130px'} ml="auto" type={'background'} >
                    <Icons.SearchAlt />search
                </Button>
            </Fragment>
        </ContentWrap>
    );
    console.log(uzeReplace("addres", "tashkent"), "ref")
    return (
        <Container>
            <InputWrap>
                <Input placeholder={'Enter an address, neighborhood, city, or ZIP code'}
                    pl={"45px"}
                >
                    <Icons.Filter />
                </Input >

                <Popover placement="topRight" content={content} trigger="click">
                    <Button width={'130px'} type={'primary'} >
                        <Icons.Advanced />
                        Advanced
                    </Button>
                </Popover>

                <Button width={'130px'} type={'background'} >
                    <Icons.SearchAlt />search
                </Button>
            </InputWrap>
        </Container>
    )
}



export default Filter;
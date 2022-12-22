import React, { useRef } from 'react'
import {
    Container, WrapContainer, InputWrap, Icons,
    Fragment, Title, ContentWrap
} from './style';
import { Input, Button } from './../Generic/index';
import { Popover } from 'antd'



export const Filter = () => {

    const countryRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()

    const roomsRef = useRef()
    const sizeRef = useRef()
    const sortRef = useRef()

    const minPriceRef = useRef()
    const maxPriceRef = useRef()


    const content = (
        <ContentWrap>
            <Title>Address</Title>
            <Fragment>
                <Input ref={countryRef} placeholder={'Country...'} />
                <Input ref={regionRef} placeholder={'Region...'} />
                <Input ref={cityRef} placeholder={'City...'} />
                <Input ref={zipRef} placeholder={'Zip code...'} />
            </Fragment>

            <Title>Apartment Info</Title>
            <Fragment>
                <Input ref={roomsRef} placeholder={'Rooms...'} />
                <Input ref={sizeRef} placeholder={'Size...'} />
                <Input ref={sortRef} placeholder={'Sort...'} />
            </Fragment>

            <Title>Price</Title>
            <Fragment>
                <Input ref={minPriceRef} placeholder={'Min-Price...'} />
                <Input ref={maxPriceRef} placeholder={'Max-Price...'} />
            </Fragment>
            <Fragment>
                <Button width={'130px'} ml="auto" type={'background'} >
                    <Icons.SearchAlt />search
                </Button>
            </Fragment>
        </ContentWrap>
    );
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
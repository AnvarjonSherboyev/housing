import React from 'react'
import { Container, WrapContainer, InputWrap, Icons,
    Fragment, Title, ContentWrap
 } from './style';
import { Input, Button } from './../Generic/index';
import { Popover } from 'antd'



export const Filter = () => {

    const content = (
        <ContentWrap>
            <Title>Address</Title>
            <Fragment>
                <Input placeholder={'Country...'} />
                <Input placeholder={'Region...'} />
                <Input placeholder={'City...'} />
                <Input placeholder={'Zip code...'} />
            </Fragment>

            <Title>Apartment Info</Title>
            <Fragment>
                <Input placeholder={'Rooms...'} />
                <Input placeholder={'Size...'} />
                <Input placeholder={'Sort...'} />
            </Fragment>

            <Title>Price</Title>
            <Fragment>
                <Input placeholder={'Min-Price...'} />
                <Input placeholder={'Max-Price...'} />
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
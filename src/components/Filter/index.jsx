import React, { useRef, useState, useEffect } from 'react'
import {
    Container, InputWrap, Icons,
    Fragment, Title, ContentWrap, SelectAnt
} from './style';
import { Input, Button } from './../Generic/index';
import { Popover } from 'antd'
import { uzeReplace } from './../../hooks/useReplace';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from './../../hooks/uzeSearch';


const { REACT_APP_BASE_URL: url } = process.env

export const Filter = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [value, setValue] = useState("Select Category")
    const query = useSearch()

    const nameRef = useRef()
    const countryRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()

    const roomsRef = useRef()
    const sortRef = useRef()

    const minPriceRef = useRef()
    const maxPriceRef = useRef()



    const onChange = ({ target: { name, value } }) => {
        navigate(`${location.pathname}${uzeReplace(name, value)}`)
        console.log(value, "name");
    }



    useEffect(() => {
        fetch(`${url}/categories/list`)
            .then((res) => res.json())
            .then((res) => {
                setData(res?.data || [])

            })
    }, [])

    useEffect(() => {
        let [d] = data?.filter(
            (ctg) => ctg?.id === Number(query.get('category_id'))
        );
        d?.name && setValue(d?.name);
        !query.get('category_id') && setValue('Select Category');
        // eslint-disable-line react-hooks/exhaustive-deps
        // eslint-disable-line react-hooks/exhaustive-deps  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location?.search, data])
        // eslint-disable-line react-hooks/exhaustive-deps
        // eslint-disable-line react-hooks/exhaustive-deps
        // eslint-disable-next-line react-hooks/exhaustive-deps



    const onChangeCategory = (category_id) => {
        navigate(`/proporties${uzeReplace("category_id", category_id)}`)
    }

    const onChangeSort = (sort) => {
        navigate(`/proporties${uzeReplace("sort", sort)}`)
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
                    name="address"
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
                    defaultValue={query.get("sort")}
                    ref={sortRef}
                    placeholder={'Sort...'}
                    name="sort"
                />
                <SelectAnt defaultValue={query.get("sort") || "Select Sort"} onChange={onChangeSort} >
                    <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
                    <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
                </SelectAnt>
                <SelectAnt defaultValue={value} onChange={onChangeCategory} >
                    {
                        data?.map((value) => {
                            return (
                                <SelectAnt.Option
                                    key={value?.id}
                                    value={value?.id}
                                >
                                    {value?.name}
                                </SelectAnt.Option>
                            )
                        })
                    }
                </SelectAnt>
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
                    ref={maxPriceRef || cityRef || regionRef}
                    placeholder={'Max-Price...'}
                    name="max_price"
                />
            </Fragment>
            <Fragment>
                <Button width={'130px'} onClick={() => navigate('/proporties')} ml="auto" type={'background'} >
                    <Icons.SearchAlt />clear
                </Button>
            </Fragment>
        </ContentWrap>
    );
    // console.log(uzeReplace("addres", "tashkent"), "ref")
    return (
        <Container>
            <InputWrap>
                <Input onChange={onChange}
                    defaultValue={query.get('name')}
                    ref={nameRef}
                    placeholder={'Enter an address, neighborhood, city, or ZIP code'}
                    pl={"45px"}
                    name={'country'}
                >
                    <Icons.Filter />
                </Input >

                <Popover placement="topRight" content={content} trigger="click">
                    <Button width={'130px'} type={'primary'} >
                        <Icons.Advanced />
                        Advanced
                    </Button>
                </Popover>

                <Button onClick={() => navigate('/proporties')} width={'130px'} type={'background'} >
                    <Icons.SearchAlt />clear
                </Button>
            </InputWrap>
        </Container>
    )
}



export default Filter;
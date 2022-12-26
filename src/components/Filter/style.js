import styled from 'styled-components';
import { ReactComponent as Advanced } from '../../assets/icons/Advanced.svg';
import { ReactComponent as FilterHome } from '../../assets/icons/FilterHome.svg';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { Select } from 'antd';


export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`

export const InputWrap = styled.div`
display:flex;
width:100%;
max-width:var(--mainWidth);
padding:var(--mainPadding);
width:100%;
justify-content: center;
align-items:center;
gap:20px;
height:64px;
`

export const Icons = styled.div`

`
Icons.Filter = styled(FilterHome)`

`
Icons.Advanced = styled(Advanced)`
margin-right: 10px;
`
Icons.SearchAlt = styled(SearchAlt)`
margin-right: 10px;
width:25px;
`

export const ContentWrap = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:30px;
border-radius:5px;
max-width:920px;
`
export const Fragment = styled.div`
display:flex;
gap:10px;
margin-top: 10px;
margin-bottom:20px;
`
export const Title = styled.div`
display:flex;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`

export const SelectAnt = styled(Select)`
display:flex;
justify-content:center;
align-items:center;
min-width:150px;
min-height:44px;
.ant-select-selector{
    height:44px !important;
}
.ant-select-selection-placeholder{
    display:flex;
    align-items:center;
}
`
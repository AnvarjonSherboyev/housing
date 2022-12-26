import styled from 'styled-components';
import { Bed } from "@styled-icons/ionicons-outline/Bed";
import { Bath } from "@styled-icons/boxicons-regular/Bath"
import { CarSport } from "@styled-icons/ionicons-sharp/CarSport"
import { SquareFoot } from "@styled-icons/material-rounded/SquareFoot"
import {ArrowsAngleExpand} from "@styled-icons/bootstrap/ArrowsAngleExpand"
import {Heart} from "@styled-icons/bootstrap/Heart"

export const Container = styled.div`
width:100%;
max-width:380px;
min-width:330px;
height:450px;
box-shadow: rgb(13 38 59 / 40%) 0px 8px 20px;
border:1px solid red;
/* margin:0 .5rem; */
border: 1px solid #E6E9EC;
border-radius: 3px;
background: #FFFFFF;
`


export const Img = styled.img`
width:100%;
max-height:220px;
min-height:220px;
margin-bottom:24px;
`

export const Content = styled.div`
border-bottom:2px solid #E6E9EC;
padding:0 20px;
`

export const Details = styled.div`
display:flex;
justify-content:space-between;
padding:16px 0;
gap:20px;
`
Details.Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:1px solid red;
`

export const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:35px;
height:35px;
border-radius:50%;
background: #F6F8F9;
cursor:pointer;
&:hover .my__unique__button__class-asdf123 {
    color: red;
}
`
Icons.Bed = styled(Bed)`
width:25px;
color:var(--colorGray);
`
Icons.Bath = styled(Bath)`
width:25px;
color:var(--colorGray);
`
Icons.CarSport = styled(CarSport)`
width:25px;
color:var(--colorGray);
`
Icons.SquareFoot = styled(SquareFoot)`
width:25px;
color:var(--colorGray);
`

export const Footer = styled.div`
display: flex;
padding:0 20px;
height:60px;
justify-content:space-between;
align-items:center;
`
export const FooterDiv = styled.div`
display:flex;
flex-direction:column;
`
FooterDiv.Info = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-decoration-line: line-through;
color: var(--colorGray);
margin:0 !important;
`
Icons.Arrow = styled(ArrowsAngleExpand)`
width:18px;
color:var(--colorGray);
`
Icons.Heart = styled(Heart)`
width:18px;
color:var(--colorGray);
`
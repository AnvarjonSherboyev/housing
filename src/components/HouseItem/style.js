import styled from 'styled-components';
import { Bed } from "@styled-icons/ionicons-outline/Bed";
import { Bath } from "@styled-icons/boxicons-regular/Bath"
import { CarSport } from "@styled-icons/ionicons-sharp/CarSport"
import { SquareFoot } from "@styled-icons/material-rounded/SquareFoot"
import { ArrowsAngleExpand } from "@styled-icons/bootstrap/ArrowsAngleExpand"
import { Heart } from "@styled-icons/bootstrap/Heart"


export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:30px 0;
`
export const WrapContainer = styled.div`
display:flex;
width:100%;
/* justify-content:center; */
padding:var(--mainPadding);
max-width:var(--mainWidth);
gap:24px;
flex-wrap:wrap;
`
export const ImgWrapper = styled.div`
width:100%;
display:flex;
gap:20px;

`
export const ImgWrap = styled.div`
flex:1;
display:flex;
border:1px solid black;
/* min-height:150px; */
`
ImgWrap.Img = styled.img`
width:100%;
/* height:350px; */
`
ImgWrap.Img2 = styled.img`
width:100%;
/* height:150px; */
`

export const ImgWrap2 = styled.div`
flex:1;
display:flex;
flex-direction:column;
gap:20px;
border:1px solid black;
`
export const TextBox = styled.div`
flex:3;
display:flex;
flex-direction:column;
`
export const TextBox2 = styled.div`
flex:1;
display:flex;
flex-direction:column;
gap:20px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
border-radius: 3px;
padding:20px;
/* min-height:530px; */
`
export const Content = styled.div`
display:flex;
justify-content: space-between;
`
export const ContentDiv = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
margin-bottom:40px;
`
export const ContentDiv2 = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
gap:10px;
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
export const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:16px 0;
gap:10px;
`
Icons.Arrow = styled(ArrowsAngleExpand)`
width:18px;
color:var(--colorGray);
:active{
    transform:scale(0.9);
}
user-select: none;
`
Icons.Heart = styled(Heart)`
width:18px;
color:var(--colorGray);
:active{
    transform:scale(0.9);
}
user-select: none;
`
export const Describe = styled.div`
margin-top:10px;
position:relative;
width:100%;
max-height:150px;
min-height:50px;
`
Describe.Bg = styled.div`
position:absolute;
z-index:3;
top:0;
left:0;
right:0;
bottom:0;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) -60%, #FFFFFF 100%);
`
export const TextBox3 = styled.div`
flex:1;
display:flex;
align-items:center;
gap:10px;
margin-top:20px;
`
export const User = styled.div`
display:flex;
gap:10px;
flex-direction:column;
`
User.Img = styled.img`
width:56px;
height:56px;
border-radius:50%;
`
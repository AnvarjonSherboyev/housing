import styled from 'styled-components';
import { Carousel } from 'antd'
import { NavigateNext } from '@styled-icons/material-rounded/NavigateNext'



export const Container = styled.div`
display: flex;
width:100%;
justify-content: center;
align-items:center;
`

export const CaruselWrapper = styled.div`
position:relative;
width:100%;
/* max-width:var(--mainWidth); */
height: 570px;
`

export const MainCarusel = styled(Carousel)`
height: fit-content;
display:flex;
/* position:relative; */
height: 570px;
`
export const Img = styled.img`
background-color: black;
width: 100%;
height:570px;
/* object:fit-content; */
`
export const Icon = styled.div`
`;

Icon.Arrow = styled(NavigateNext)`
display:flex;
justify-content:center;
align-items:center;
margin-left:10px;
width:45px;
height:45px;
padding:10px;
color:white;
z-index:3;
cursor:pointer;
opacity:0.5;
background:rgba(255,255,255,0.3);
border-radius:50%;
border:1px solid white;
:hover{
    opacity:0.97;
}
margin-right: ${({ left }) => (!left ? "32px" : "none")} ;
margin-left: ${({ left }) => (left ? "32px" : "none")} ;
transform: ${({ left }) => (left ? "rotate(180deg)" : "none")};
`

export const ButtonDiv = styled.div`
display:none;
justify-content:space-between;
border:1px solid red;
position:absolute;
z-index:10;
width:100%;
top:50%;
left:50%;
transform: translate(-50%,-50%);
max-width:var(--mainWidth);
`

export const Blur = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:5;
background: transparent;
background: rgba(0, 0, 0, 0.65);
`

export const Content = styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
top:0;
bottom:0;
left:0;
right:0;
z-index:6;
background: transparent;
`
Content.Title = styled.h1`
font-style: normal;
width: 566px;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
`

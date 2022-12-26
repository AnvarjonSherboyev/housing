import styled from 'styled-components';
import Slider from "react-slick";
import { NavigateNext } from '@styled-icons/material-rounded/NavigateNext'



export const Container = styled.div`
display: flex;
width:100%;
position:relative;
justify-content: center;
align-items:center;
border:1px solid red;
margin:90px 0;
`

export const CaruselWrapper = styled.div`
/* display:flex; */
/* justify-content: center;
align-items:center; */
width:100%;
height: 350px;
max-width:var(--mainWidth);
padding:var(--mainPadding);
`

export const MainCarusel = styled(Slider)`
height: fit-content;
display:flex;
justify-content:center;
align-items:center;
height: 350px;
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
color:#0D263B;
z-index:3;
cursor:pointer;
opacity:0.5;
background:rgba(230, 233, 236, 1);
border-radius:50%;
border:1px solid white;
:hover{
    opacity:0.97;
}
margin-right: ${({ left }) => (!left ? "32px" : "none")} ;
margin-left: ${({ left }) => (left ? "32px" : "none")} ;
transform: ${({ left }) => (left ? "rotate(180deg)" : "none")};
`

export const Button = styled.div`
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


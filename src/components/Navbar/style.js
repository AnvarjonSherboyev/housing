import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content: center !important;
`

export const WrapContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
background:var(--colorPrimary);
align-items:center;
height:64px;
`

export const Wrapper = styled.div`
display:flex;
color:#fff;
padding:var(--mainPadding);
height:64px;
width:100%;
justify-content:space-between;
max-width:var(--mainWidth);
`

export const Section = styled.div`
display:flex;
align-items:center;
gap:10px;
cursor:${({ logo }) => logo && 'pointer'};
:hover{
    color:${({ logo }) => logo && '#696969'};
}
.active{
    color:var(--background);
}
`
export const Logo = styled.img`
width:30px;
`

export const Link = styled(NavLink)`
text-decoration:none;
color: #FFFFFF;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding:0 32px;

`
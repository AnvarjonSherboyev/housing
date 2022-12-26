import styled from 'styled-components';



export const Container = styled.div`
position:relative;
width:100%;
max-width:250px;
min-width:230px;

max-height:330px;
min-height:300px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url();
border:1px solid red;
border: 1px solid #E6E9EC;
border-radius: 3px;
background: #FFFFFF;
cursor:pointer;
`


export const Img = styled.img`
width:100%;
height:100%;
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
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;
border-radius: 3px;
`
export const Icons = styled.div`
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
border-radius: 3px;
`

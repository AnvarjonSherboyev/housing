import styled from 'styled-components';


export const Container = styled.div`
display: flex;
width:100%;
position:relative;
justify-content: center;
align-items:center;
border:1px solid red;
padding:48px 0;
background: #F5F7FC;
`

export const CaruselWrapper = styled.div`
/* display:flex; */
/* justify-content: center;
align-items:center; */
width:100%;
/* height: 350px; */
max-width:var(--mainWidth);
padding:var(--mainPadding);
`



export const Icon = styled.div`
`
Icon.Img = styled.img`
width:50px;
margin:24px;
`

export const ContentWrap = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
border:1px solid red;
margin-top:40px;
`
export const Content = styled.div`
display:flex;
flex:1;
min-width:294px;
max-width:295px;

flex-direction:column;
align-items:center;
justify-content:center;
/* border:1px solid black; */
min-height:130px;
`

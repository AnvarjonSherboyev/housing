import styled from 'styled-components';


export const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
padding:30px 0;
`
export const WrapContainer = styled.div`
display:flex;
width:100%;
/* justify-content:center; */
padding:var(--mainPadding);
width:var(--mainWidth);
flex-wrap:wrap;
`
export const ImgWrapper = styled.div`
width:100%;
display:flex;
gap:20px;
border:1px solid black;

`
export const ImgWrap = styled.div`
flex:1;
display:flex;
border:1px solid black;
`
export const ImgWrap2 = styled.div`
flex:1;
display:flex;
flex-direction:column;
gap:20px;
border:1px solid black;
`

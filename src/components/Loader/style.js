import styled from 'styled-components';
import { Spin } from 'antd';


export const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content: center;
align-items:center;
`
export const WrapContainer = styled.div`
display:flex;
flex-direction:column;
position:relative;
width:100%;
justify-content:center;
gap:20px;
padding:var(--mainPadding);
margin:30px 0;
max-width:var(--mainWidth);
flex-wrap:wrap;
min-height:40vh;
`

export const Spin1 = styled(Spin)`
 
`
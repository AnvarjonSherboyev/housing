import styled from "styled-components";

const getType = (type) => {
    switch (type) {
        case 'secondary':
            return {
                border: '1px solid #e6e9ec',
                color: '#0d263b',
            };
        case 'primary':
            return {
                border: 'none',
                color: '#ffffff',
                background: '#0061df',
            };
        default:
            return {
                color: '#ffffff',
                border: '1px solid #e6e9ec',
            };
    }
};



export const Container = styled.input`
display: flex;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;

justify-content: center;
align-items:center;
border-radius:2px;
padding-left: ${({ pl }) => pl || "15px"};
height:${({ height }) => height || '44px'};
width:${({ width }) => (width ? width : '100%')};
margin-left:${({ ml }) => `${ml}`};
margin-right:${({ mr }) => `${mr}`};
margin-bottom:${({ mb }) => `${mb}`};
margin-top:${({ mt }) => `${mt}`};

${({ type }) => getType(type)}
color: #0d263b;
border: 1px solid #e6e9ec;
:focus{
    border: 1px solid #0061DF;
}
`;

export const Wrapper = styled.div`
display: flex;
position: relative;
width: 100%;

margin-left:${({ ml }) => `${ml}`};
margin-right:${({ mr }) => `${mr}`};
margin-bottom:${({ mb }) => `${mb}`};
margin-top:${({ mt }) => `${mt}`}; 
`

export const Icon = styled.div`
position: absolute;
transform: translate(-50%,-50%);
top: 50%;
left: 30px;
`
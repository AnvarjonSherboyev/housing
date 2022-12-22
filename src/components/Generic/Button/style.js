import styled from "styled-components";

const getType = (type) => {
    switch (type) {
        case 'primary':
            return {
                border: '1px solid #e6e9ec',
                color: '#0d263b',
            };
        case 'background':
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



export const Container = styled.div`
display: flex;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
justify-content: center;
align-items:center;
border-radius:2px;
height:${({ height }) => height || '44px'};
min-width:${({ width }) => (width ? width : '100%')};
width:${({ width }) => (width ? width : '100%')};
margin-left:${({ ml }) => `${ml}`};
margin-right:${({ mr }) => `${mr}`};
margin-bottom:${({ mb }) => `${mb}`};
margin-top:${({ mt }) => `${mt}`};
cursor:pointer;
user-select:none;
${({ type }) => getType(type)}
:active{
    transform: scale(0.96);
    opacity:0.7;
}
text-transform: capitalize;
`;
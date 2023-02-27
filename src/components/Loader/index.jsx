import React from 'react'
import { Container, WrapContainer,  Spin1 } from './style';
import { LoadingOutlined } from '@ant-design/icons';





export const Loader = () => {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 80,
            fontWeight:600,
          }}
          spin
        />
      );

    return (
        <Container>
            <WrapContainer>
                <Spin1 indicator={antIcon} />
                <div className="title">Loading</div>
            </WrapContainer>
        </Container>
    )
}

export default Loader;
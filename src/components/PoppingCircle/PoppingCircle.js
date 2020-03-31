import React from 'react';
import styled, { keyframes } from 'styled-components';



const PoppingCircle = ({ size, color }) => {
    console.log(size)

    return (
        <Wrapper style={{ backgroundColor: color, width: size, height: size }}></Wrapper>
    )
}

export default PoppingCircle;

const Poppin = keyframes`
  from {
    color: inherit;
    opacity: 1;
    transform: scale(0); 
  }
  to {
    color: blue;
    opacity: 0;
    transform: scale(3);
  }
`;
const Wrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Poppin} 500ms forwards;
  }
  
`;
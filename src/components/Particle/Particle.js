import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';


const Particle = ({ color, angle, distance, children }) => {


    const convertDegreesToRadians = angle => (angle * Math.PI) / 180;
    const angleInRads = convertDegreesToRadians(angle);
    const x = Math.cos(angleInRads) * distance;
    const y = Math.sin(angleInRads) * distance;
    return (<StyledCircle x={x} y={y}>
        {children}

    </StyledCircle>)


}

export default Particle;

const PushCircles = (props) => keyframes`

from {
    left: 0;
    top: 0;
    transform: scale(1.5); 
    opacity: 1;
}
to {
    left: ${props.x}px;
    top: ${props.y}px;
    transform: scale(0.1);
    opacity: 0;
}
`

const StyledCircle = styled.div`
position: absolute;

@media (prefers-reduced-motion: no-preference) {
    animation: ${props => PushCircles(props)} 800ms forwards;
  }
`
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

// const appear = useSpring({
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? "translateY(0px)" : "translateY(10px)"

//   });

const ScaleIn = ({ children }) => {
    const style = useSpring({
        transform: "scale(1)",
        from: {
            transform: "scale(0)"
        },
        config: {
            tension: 200,
            friction: 15,
        },
    });
    return (
        <StyledScale style={style}>
            {children}

        </StyledScale>

    )



}

export default ScaleIn;

const StyledScale = styled(animated.div)`

`
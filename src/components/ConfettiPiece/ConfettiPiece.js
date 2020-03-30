import React from 'react';
import styled from 'styled-components';
import Particle from '../Particle';


const ConfettiPiece = ({ color, angle, distance }) => {



    return (
        <CenteredWithinParent>
            <Particle color={color} angle={angle} distance={distance}>
                <Circle style={{ backgroundColor: 'red', borderRadius: '50%', width: '10px', height: '10px' }} />
            </Particle>

        </CenteredWithinParent>

    )


}

export default ConfettiPiece;


const CenteredWithinParent = styled.div`
position: absolute;
top: 15px;
left: 15px;

`

const Circle = styled.div`

`
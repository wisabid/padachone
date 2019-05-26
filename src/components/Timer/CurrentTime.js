import React from 'react';
import Clock from 'react-live-clock';

const CurrentTime = ({dt, timezone}) => {
    return (
        <Clock
                date={dt}
                timezone={timezone}
                format={'MM/D/YYYY HH:mm'} style={{display: 'none'}}
                ticking={true}
                interval={1000}/>
    )
}

export default CurrentTime;
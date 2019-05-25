import React, { useEffect } from 'react';
import Clock from 'react-live-clock';

const CurrentTime = ({dt, timezone}) => {

    useEffect(() => {
        console.log('Now....')
    }, [dt])
    
    useEffect(() => {
        console.log('Redering....')
    }, [])
    return (
        <Clock
                date={dt}
                timezone={timezone}
                format={'MM/D/YYYY HH:mm'} style={{display: 'block'}}
                ticking={true}
                interval={1000}/>
    )
}

export default CurrentTime;
import React, {useContext} from 'react';
import Clock from 'react-live-clock';
import {UserContext} from '../../store/context/userContext';
import {useRenderCounts} from '../../hooks/api-hooks';

const CurrentTime = ({dt}) => {
    useRenderCounts('CurrentTime.js')
    const {tz} = useContext(UserContext);
    return (
        <Clock
                date={dt}
                timezone={tz}
                format={'MM/D/YYYY HH:mm'} style={{display: 'none'}}
                ticking={true}
                interval={1000}/>
    )
}

export default CurrentTime;
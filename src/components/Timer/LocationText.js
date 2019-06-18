import React from 'react';
// import {useCurrentLocation} from '../../hooks/api-hooks';

const Locationtext = ({location}) => {
    // const [currentloc] = useCurrentLocation({lat:"52.31406610552598",  lon:"4.946411339519716"});
    // console.log('%c LOCATIOn'+currentloc, 'color:purple')
    return (
        <>
            <span className="locationText">@ {location}</span>
        </>
    )
}

export default Locationtext;
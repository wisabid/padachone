import React from 'react';
import {useRenderCounts} from '../../hooks/api-hooks';
// import {useCurrentLocation} from '../../hooks/api-hooks';

const styles = {
    width: '275px',
    margin: '0 auto',
    lineHeight: '10px', 
    margin: '10px auto',
    background: 'mediumseagreen',
    color: '#fff', 
    border: '5px solid #fff', 
    marginTop: '5px', 
    textAlign: 'center',
    padding:'10px',
    textOverflow: 'ellipsis'
}

const Locationtext = ({location}) => {
    useRenderCounts('Locationtext.js')
    // const [currentloc] = useCurrentLocation({lat:"52.31406610552598",  lon:"4.946411339519716"});
    // console.log('%c LOCATIOn'+currentloc, 'color:purple')
    return (
        <div style={styles}>
            <span className="locationText">@ {location.substring(0,100)}</span>
        </div>
    )
}

export default Locationtext;
import React from 'react';
import {geolocated} from 'react-geolocated';
import Traveltimes from './Traveltimes';
// import Header from '../Layout/Header';

const Travel = (props) => {
    return (
        <>
            {!props.isGeolocationAvailable
                ?<div>Your browser does not support Geolocation</div>
                :!props.isGeolocationEnabled
                    ?<div style={{marginTop:'30px'}}><h5 >Message from Lab : "Geolocation is not enabled. Please enable location. Please <a href="/">refresh</a> to go back"</h5></div>
                    :props.coords
                        ?<Traveltimes lat={props.coords.latitude} lon={props.coords.longitude} />
                        :<div>Getting the location data&hellip; </div>
            }
            {/* <Header 
                    // startup={startup} 
                    place={localStorage.getItem(`padachone:place`)}
                    // pdate={data[0].date.readable}
                    travel={true}
                /> */}
            {/* <Traveltimes lat="52.31406610552598" lon="4.946411339519716" /> */}
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Travel);
import React, { useState } from 'react';
import {geolocated} from 'react-geolocated';

import Traveltimes from './Traveltimes'


const Lab = (props) => {
    const [state, setState] = useState({});
    const { country, region } = state;
    
    
    return (
        <>
        {/* <h1>Welcome Alfie</h1>
          <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} /> */}

        {!props.isGeolocationAvailable
            ?<div>Your browser does not support Geolocation</div>
            :!props.isGeolocationEnabled
                ?<div style={{marginTop:'150px'}}><h5 >Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"</h5></div>
                :props.coords
                    ? <div><table>
                    <tbody>
                        <tr><td>latitude</td><td>{props.coords.latitude}</td></tr>
                        <tr><td>longitude</td><td>{props.coords.longitude}</td></tr>
                        <tr><td>altitude</td><td>{props.coords.altitude}</td></tr>
                        <tr><td>heading</td><td>{props.coords.heading}</td></tr>
                        <tr><td>speed</td><td>{props.coords.speed}</td></tr>
                    </tbody>
                    </table>
                    <Traveltimes lat={props.coords.latitude} lon={props.coords.longitude} />
                    </div>
                    : <div>Getting the location data&hellip; </div>
                }
              {/* <Traveltimes lat="52.31406610552598" lon="4.946411339519716" /> */}
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Lab);
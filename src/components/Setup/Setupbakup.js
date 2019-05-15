import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {geolocated} from 'react-geolocated';


const Location = (props) => {
    const [state, setState] = useState({});
    const { country, region } = state;
    const selectCountry = (country) => {
        setState({...state, country})
    }
    const selectRegion = (region) => {
        setState({...state, region})
    }
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
                ? <>
                {/* <h5>Geolocation is not enabled</h5> */}
                <h1>hiiii{props.activeStep}</h1>
                <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)} />
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)} />
                </>
                :null}
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Location);
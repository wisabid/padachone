import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
// import {geolocated} from 'react-geolocated';


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
        {<CountryDropdown
            value={country}
            onChange={(val) => selectCountry(val)} />
        }

        {<RegionDropdown
            country={country}
            value={region}
            onChange={(val) => selectRegion(val)} />}
        </>
    )
}

export default Location;
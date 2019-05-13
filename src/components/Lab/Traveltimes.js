import React from 'react';
import {useLab_1} from '../../hooks/api-hooks'

const Traveltimes = ({lat, lon}) => {
    const [data, setData] = useLab_1({lat: lat, lon: lon});
    if (data && data.data) {
        debugger;
        return (
            <div>{data.data[0].timings.Maghrib}</div>
        //     {
        //     data.data.map(item => {
        //         return (
        //             <h4>{item.timings}</h4>
        //         )
        //     })
        // }
            
        )
    }
    else {
        return (
            <h5>Loading...</h5>
        )
    }
}

export default Traveltimes;
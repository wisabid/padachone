import React from 'react';
import {useLab_1} from '../Prayers/api';

const Traveltimes = ({lat, lon}) => {
    const [data, setData] = useLab_1({lat: lat, lon: lon});
    if (data) {
        debugger;
        return (
            <div>{JSON.stringify(data)}</div>
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
import React, { useState, useEffect } from 'react';
export const usePrayer = ({country, city}) => {
    debugger;
    const API = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`;
    const [data, setData] = useState({})
    async function fetchPrayerTimes() {
        const res = await fetch(API, {
            headers : {
                Accept : 'application/json'
            }
        });
        const data = await res.json();
        setData(data);
    }
    useEffect(() => {
        fetchPrayerTimes();
    }, [])
    return [data, setData]
}

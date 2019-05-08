import React, { useState, useEffect } from 'react';
export const usePrayer = (city) => {
    const API = `https://api.aladhan.com/v1/timingsByCity?city=Amsterdam&country=Netherlands&method=8`;
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

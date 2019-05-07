import React, { useState, useEffect } from 'react';
export const usePrayer = () => {
    const API = 'https://api.aladhan.com/v1/calendarByCity?city=Amsterdam&country=Netherlands&method=2&month=05&year=2019';
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

import React, { useState, useEffect } from 'react';
export const usePrayer = ({country='Netherlands', city='Amsterdam', date}) => {
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
        localStorage.clear();
        localStorage.setItem(`padachone:${date}`, JSON.stringify(data))
        setData(data);
    }
    useEffect(() => {
        if (localStorage.getItem(`padachone:${date}`)) {
            setData(JSON.parse(localStorage.getItem(`padachone:${date}`)))
        }
        else {
            fetchPrayerTimes();
        }
    }, [])
    return [data, setData]
}

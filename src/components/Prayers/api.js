import React, { useState, useEffect } from 'react';
export const usePrayer = ({country='Netherlands', city='Amsterdam', date}) => {
    debugger;
    const API = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`;
    const [data, setData] = useState({})
    async function fetchPrayerTimes() {
        try {
            const res = await fetch(API, {
                headers : {
                    Accept : 'application/json'
                }
            });
            const data = await res.json();
            Object.keys(localStorage).map(key => {
                if (key.startsWith('padachone:')) {
                    localStorage.removeItem(key);
                }
                return;
            })
            
            if (data && data.data && data.data.meta) {
                localStorage.setItem(`padachone:city`, city);
                localStorage.setItem(`padachone:country`, country);
                localStorage.setItem(`padachone:${date}`, JSON.stringify(data))
            }
            setData(data);
        }
        catch(e) {
            //
            setData({error: e.message});
            return false
        }   
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

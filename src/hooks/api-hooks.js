import { useState, useEffect } from 'react';
import {getPDdata} from '../utils/index';
import {BING_API} from '../utils/constants';
export const usePrayer = ({country='Netherlands', place, region="Noord-Holland", date}) => {
    let city;
    if (place) {
        city = place;
    }
    else {
        city=region
    }
    const API = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8&school=0`;
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
                return key;
            })
            
            if (data && data.data && data.data.meta) {
                region && localStorage.setItem(`padachone:region`, region);
                country && localStorage.setItem(`padachone:country`, country);
                place && localStorage.setItem(`padachone:place`, place);
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


export const usePrayerOnGo = ({lat, lon}) => {
    const dte = getPDdata();
    const tdate = new Date();
    const month = tdate.getMonth()+1;
    const year = tdate.getFullYear();
    const API = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=8&month=${month}&year=${year}&school=0`;
    const [data, setData] = useState({})
    async function fetchTravelPrayerTimes() {
        try {
            const res = await fetch(API, {
                headers : {
                    Accept : 'application/json'
                }
            });
            const data = await res.json();         
            
            const todaysdata = data.data.filter(item => item.date.readable === dte);
            setData(todaysdata);
        }
        catch(e) {
            //
            setData({error: e.message});
            return false
        }   
    }
    useEffect(() => {
       
            fetchTravelPrayerTimes();
    }, [])
    return [data, setData]
}

export const useCurrentLocation = ({lat, lon}) => {
    const [currentloc, setCurrentloc] = useState({});
    const API = `https://dev.virtualearth.net/REST/v1/Locations/${lat},${lon}?o=json&key=${BING_API}`;
    async function fetchLocation() {
        try {
            const result = await fetch(API, {
                    headers : {
                        Accept : 'application/json'
                    }
            });
        
            const data = await result.json();
            console.log('%c LOCATION DATA'+JSON.stringify(data), 'color:blue')
            const locationData = data.resourceSets[0].resources[0].address.addressLine+', '+data.resourceSets[0].resources[0].address.adminDistrict+', '+data.resourceSets[0].resources[0].address.countryRegion;
            // setCurrentloc(data.resourceSets[0].resources[0].address.formattedAddress);
            setCurrentloc({data : locationData, formattedaddress: data.resourceSets[0].resources[0].address.formattedAddress });
        }
        catch(e) {
            setCurrentloc({error: e.message});
            return false
        }   
    }
    useEffect(() => {
        fetchLocation();
    }, []);

    return [currentloc, setCurrentloc];
}

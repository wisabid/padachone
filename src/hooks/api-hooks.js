import { useState, useEffect, useRef, useContext } from 'react';
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';
	
import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

import {getPDdata, getMonthYearNumber, addUniqueVisitor} from '../utils/index';
import {BING_API, FT_PRAYER, IPSTACK_API, IGNORE_HOSTS, PRISMIC_TOKEN} from '../utils/constants';
import {UserContext} from '../store/context/userContext';
export const usePrayer = ({country='Netherlands', place, region="Noord-Holland", date, method=8, school=0}) => {
    const {forceTrigger} = useContext(UserContext);
    const [month, year] = getMonthYearNumber(date);
    const [inprocess, setInprocess] = useState(false);
    // let city;
    // if (place) {
    //     city = place;
    // }
    // else {
    //     city=region
    // }
    // const API = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}&school=${school}`;
    const API = `https://api.aladhan.com/v1/calendarByAddress?address=${place},${region},${country}&method=${method}&school=${school}&month=${month}&year=${year}`
    const [data, setData] = useState({})
    async function fetchPrayerTimes() {
        try {
            setInprocess(true);
            const res = await fetch(API, {
                headers : {
                    Accept : 'application/json'
                }
            });
            const rawdata = await res.json();
            Object.keys(localStorage).map(key => {
                if (key.startsWith('padachone:')) {
                    localStorage.removeItem(key);
                }
                return key;
            })
            const dte = getPDdata();
            const timingsData = rawdata.data.filter(item => item.date.readable === dte);
            const data = {...rawdata, data : {...timingsData[0]}}
            
            if (data && data.data && data.data.meta) {
                setInprocess(false);
                region && localStorage.setItem(`padachone:region`, region);
                country && localStorage.setItem(`padachone:country`, country);
                place && localStorage.setItem(`padachone:place`, place);
                if (forceTrigger.target === FT_PRAYER) {
                    localStorage.setItem(`padachone_FT-${FT_PRAYER}`, true);
                }
                method && localStorage.setItem(`padachone:method`, method);
                school !== '' && localStorage.setItem(`padachone:school`, school)
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
        if (localStorage.getItem(`padachone:${date}`) && !forceTrigger.target) {
            setData(JSON.parse(localStorage.getItem(`padachone:${date}`)))           
        }
        else {
            if (!inprocess) {
                fetchPrayerTimes();
            }
            else {
                return false;
            }
            
        }
    }, [])

    useEffect(() => {
        if (forceTrigger.target === FT_PRAYER && !inprocess) {
            fetchPrayerTimes();
        }
        
    }, [forceTrigger])
    return [data, setData]
}


export const usePrayerOnGo = ({lat, lon, method=8, school=0}) => {
    const {forceTrigger} = useContext(UserContext);
    const dte = getPDdata();
    const tdate = new Date(dte);
    const mnth = tdate.getMonth()+1;
    const year = tdate.getFullYear();
    const API = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=${method}&month=${mnth}&year=${year}&school=${school}`;
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
            if (forceTrigger.target === FT_PRAYER) {
                localStorage.setItem(`padachone_FT-${FT_PRAYER}`, true);
            }
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
    useEffect(() => {
        if (forceTrigger.target === FT_PRAYER) {
            fetchTravelPrayerTimes();
        }
        
    }, [forceTrigger])
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
            // console.log('%c LOCATION DATA'+JSON.stringify(data), 'color:blue')
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

export const useCalcMethods = () => {
    const API = 'https://api.aladhan.com/v1/methods';
    const [methods, setMethods] = useState({})
    const fetchMethods = async() => {
        try {
            const result = await fetch(API, 
                {
                    headers : {
                        Accept : 'application/json'
                    }
                })
                // .catch(e => {
                //     setMethods({error: e.message})
                //     return false;
                // });
            const data = await result.json();
            const modifiedData = await Object.entries(data.data).map(item => ({[item[0]] : item[1]}));
            const newdata = {...data, data: modifiedData};
            if (newdata && newdata.data) {
                localStorage.setItem('padachone-cmethods', JSON.stringify(newdata));
            }
            setMethods(newdata);
        }
        catch(e) {
            setMethods({error: e.message})
            return false
        }   
    }
    useEffect(() => {
        if (localStorage.getItem('padachone-cmethods')) {
            setMethods(JSON.parse(localStorage.getItem(`padachone-cmethods`)))        
        }
        else {
            fetchMethods();
        }
    }, [])
    return [methods, setMethods];
}

export const useDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    function handleDrawerToggle() {
        setDrawerOpen(!drawerOpen);
    }
    return [drawerOpen, handleDrawerToggle]
}

export const useRenderCounts = (page) => {
    const colors = ['red', 'green', 'lightblue', 'orange', 'grey']
    const renders = useRef(0);
    useEffect(() => {
        console.log('%c FT Renders '+page+' : '+renders.current++, `font-size: 30px;color: ${colors[Math.floor(Math.random()*5)]}`);
    })
}

export const useForceTrigger = ({setModal:setTrigger, params, ftname, setData}) => {
    const {forceTrigger} = useContext(UserContext);
    useEffect(() => {
        if (!localStorage.getItem(`padachone_FT-${ftname}`)) {
            setTrigger(params)
        }
    }, [])

    useEffect(() => {
        if (forceTrigger.target === ftname) {
            setData({})
        }        
    }, [forceTrigger])
}

export const useVisitorDetails = (dte) => {
    const [visitordata, setVisitordata] = useState({});
    // const API = `https://api.ipstack.com/check?access_key=${IPSTACK_API}`;
    const API = `https://geoip-db.com/json/`;
    const getVisitorDetails = async() => {
        const results = await fetch(API, {
            headers : {
                Accept : 'application/json'
            }
        });
        const data = await results.json();
        console.log('VS', data);
        if (data.IPv4) {
            Object.keys(sessionStorage).map(key => {
                if (key.startsWith('padachone_visitordata:')) {
                    sessionStorage.removeItem(key);
                }
                return key;
            })
            sessionStorage.setItem(`padachone_visitordata:${dte}`, JSON.stringify(data));
            addUniqueVisitor(data);
        }
        setVisitordata(data);
           
    }
    useEffect(() => {
            if (sessionStorage.getItem(`padachone_visitordata:${dte}`)) {
                setVisitordata(JSON.parse(sessionStorage.getItem(`padachone_visitordata:${dte}`)))
            }
            else if (IGNORE_HOSTS.indexOf(window.location.hostname) === -1) {
                    getVisitorDetails();
            }
    }, []);

    return visitordata;
}

export const useMessageBroadcast = () => {
    const [msg, setMsg] = useState('');
    const apiEndpoint = 'https://padachone.prismic.io/api/v2';
    const fetchMessage = () => {   
        try {     
            /*Prismic.api(apiEndpoint, {accessToken: PRISMIC_TOKEN}).then(api => {
                api.query(Prismic.Predicates.at('document.type', 'message-broadcast')).then(response => {
                if (response) {
                    // console.log('%c '+JSON.stringify(response), 'color:orange;font-size:20px;');
                    setMsg(RichText.asText(response.results[0].data.message));
                }
                });
            });*/
            	
            const client = new ApolloClient({
                link: PrismicLink({
                uri: "https://padachone.prismic.io/graphql",
                accessToken: PRISMIC_TOKEN
                }),
                cache: new InMemoryCache()
            });
            // query{
            //     allMessageBroadcasts{
            //        edges {
            //         node {
            //           message
            //           _linkType
            //         }
            //       }
            //     }
            //     allNewsletterss {
            //       edges {
            //         node {
            //           title
            //           date
            //           body
            //           _linkType
            //         }
            //       }
            //     }
            //   }
            	
            client.query({
                query: gql`
                query{
                    allMessageBroadcasts {
                      edges {
                        node {
                          message        
                        }
                      }
                    }
                    allNewsletterss {
                        edges {
                          node {
                            title
                            date
                            body
                            _linkType
                          }
                        }
                    }
                }                
                `
            }).then(response => {
                console.log('%c GraphQL Journey begins...'+JSON.stringify(response), 'color:lightblue;font-size:30px;');
                setMsg(RichText.asText(response.data.allMessageBroadcasts.edges[0].node.message));
            }).catch(error => {
                console.error(error);
            });
        }
        catch(err) {
           return 
        }
    }
    useEffect(() => {
        fetchMessage();
    }, []);
    return [msg];
}



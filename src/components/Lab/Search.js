import React, { useEffect, useState } from 'react';
import {useCurrentLocation} from '../../hooks/api-hooks';

const useSearch = (lat, lon) => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentloc, setCurrentloc] = useCurrentLocation({lat:lat, lon:lon});
    const fetchSearch = async () => {
        // //get location with http://dev.virtualearth.net/REST/v1/Locations/52.374580,4.963300?o=json&key=ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP
        // const resa = await fetch(`http://dev.virtualearth.net/REST/v1/Locations/${lat},${lon}?o=json&key=ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP`,
        // {
        //     headers : {
        //         Accept : 'application/json'
        //     }
        // });
        // const dataa = await resa.json();
        // const query = dataa.resourceSets[0].resources[0].address.addressLine+', '+dataa.resourceSets[0].resources[0].address.adminDistrict+', '+dataa.resourceSets[0].resources[0].address.countryRegion;
        // console.log('QUERY', query);
        
        const query = currentloc.data;
        const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=Muslim mosques near ${query}`, 
        {
            headers : {
                Accept : 'application/json'
            }
        });
        const data = await res.json()
        data.items && setSearchResults(data.items)
    }
    useEffect(() => {
        if (currentloc.hasOwnProperty('data')) {
            fetchSearch()
        }
    }, [currentloc])
    return [searchResults,  setSearchResults];
}

const Search = ({lat, lon}) => {
    const [currentloc, setCurrentloc] = useCurrentLocation({lat:lat, lon:lon});
    console.log(currentloc.data);
    const [search, setSearch] = useSearch(lat, lon);
    if (search.length) {
        return (
            <>
            <h5>YOU ARE @ - {currentloc.data} {currentloc.error?currentloc.error:''}</h5>
            <ul>
            {
            search.map((item, index) => {
                return <li key={index}><a target="_blank" href={item.link}>{item.title}</a></li>
            })
            }
            </ul>
            </>
        )
    }
    else {
        return (
            <>
            <h5>YOU ARE @ - {currentloc.data} {currentloc.error?currentloc.error:''}</h5>
            <h4>Loading...</h4>
            </>
        )
    }
}

export default Search;
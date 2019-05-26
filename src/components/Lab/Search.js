import React, { useEffect, useState } from 'react';

const useSearch = (lat, lon) => {
    const [searchResults, setSearchResults] = useState([]);
    const fetchSearch = async () => {
        //get location with http://dev.virtualearth.net/REST/v1/Locations/52.374580,4.963300?o=json&key=ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP
        const resa = await fetch(`http://dev.virtualearth.net/REST/v1/Locations/${lat},${lon}?o=json&key=ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP`,
        {
            headers : {
                Accept : 'application/json'
            }
        });
        const dataa = await resa.json();
        const query = dataa.resourceSets[0].resources[0].address.addressLine+', '+dataa.resourceSets[0].resources[0].address.adminDistrict+', '+dataa.resourceSets[0].resources[0].address.countryRegion;
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
        fetchSearch()
    }, [])
    return [searchResults,  setSearchResults];
}

const Search = ({lat, lon}) => {
    const [search, setSearch] = useSearch(lat, lon);
    if (search.length) {
        return (
            <>
            <ul>
            {
            search.map(item => {
                return <li><a target="_blank" href={item.link}>{item.title}</a></li>
            })
            }
            </ul>
            </>
        )
    }
    else {
        return (
            <h4>Loading...</h4>
        )
    }
}

export default Search;
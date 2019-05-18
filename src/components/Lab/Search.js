import React, { useEffect, useState } from 'react';

const useSearch = (lat, lon) => {
    const [searchResults, setSearchResults] = useState([]);
    const fetchSearch = async () => {
        const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=mosques near me`, 
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
                return <li>{item.title}</li>
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
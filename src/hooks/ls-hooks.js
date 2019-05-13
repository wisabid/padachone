import React, {useState, useEffect} from 'react';

export const useLocalStorage = () => {

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case 'set':
    //            localStorage.setItem(action.data.name, action.data.value);
    //            return {...state}
    //         case 'get':
    //             return state
    //         case 'reset':
    //             return state
    //         default:
    //             return state
    //     }
    // }
    const [state, setState] = useState(localStorage);
    const getls = async () => {
        setState(localStorage)
    }
    useEffect(() => {
        getls();
    }, [])
    
    return [state, setState]
}

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Prayers from '../Prayers';
import {usePrayer} from '../Prayers/api';

const Layout = ({country, city}) => {
    const [data, setData] = usePrayer({city: city, country: country});
    console.log('AB', data);
    const {timezone} = (data && data.data)?data.data.meta:'Europe/AmsterDAM'
    return (
        <>
            <Header timezone={timezone}/>
                <Prayers prdata={data}/>
            <Footer />
        </>        
    )
}

export default Layout;
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Prayers from '../Prayers';
import {usePrayer} from '../Prayers/api';
import Sound from 'react-sound';

const Layout = ({country, city, pdate, startup}) => {
    const [data, setData] = usePrayer({city: city, country: country, date : pdate});
    const {timezone} = (data && data.data)?data.data.meta:'Europe/AmsterDAM'
   
    return (
        <>
            <Header timezone={timezone} startup={startup}/>
                <Prayers prdata={data}/>                
            <Footer />
        </>        
    )
}

export default Layout;
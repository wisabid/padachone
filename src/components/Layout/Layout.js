import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Prayers from '../Prayers';


const Layout = (props) => {
    
    return (
        <>
            <Header timezone="Europe/Amsterdam"/>
                <Prayers />
            <Footer />
        </>        
    )
}

export default Layout;
import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Footer from './Footer';
import Prayers from '../Prayers';
import {usePrayer, useDrawer} from '../../hooks/api-hooks';
import {UserContext} from '../../store/context/userContext';
import Menus from '../Menus'


const useStyles = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
      color: lightBlue[500]
    },
    secondary: {
        color:'#4caf50'
    }
  }));

const Layout = ({country, region, place, method, school, pdate, startup}) => {
    const [drawerOpen, handleDrawerToggle] = useDrawer();
    const {setTz, setModal, forceTrigger} = useContext(UserContext);
    console.log('FT Layout.js', forceTrigger);
    
    if (forceTrigger.target === 'api_usePrayer') {
        // usePrayerParams = {...usePrayerParams, method : forceTrigger.method, school : forceTrigger.school};
        method = forceTrigger.method;
        school = forceTrigger.school;
        console.log('FT Layout.js new prayer params'+method, school);
    }
    let usePrayerParams = {region: region, country: country, place : place, method : method, school : school, date : pdate, forceTrigger : forceTrigger};
    const [data] = usePrayer(usePrayerParams);
    const {timezone} = (data && data.data && data.data.meta)?data.data.meta:'Europe/AmsterDAM';
    setTz(timezone);
    const classes = useStyles();
    // Ask user if he wants to fine tune with School and method
    useEffect(() => {
        if (data.hasOwnProperty('code') && data.code === 200 && !localStorage.getItem('padachone_FT-api_usePrayer')) {
            setModal({show : true, name : 'Finetune'})
        }
    }, [data])
    if (data && data.data && data.data.meta && data.code === 200) {
        console.log('FT Layout render : '+forceTrigger+'Method : '+method+' School = '+school)
        return (
            <>
                <Menus drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>
                <Header 
                    startup={startup} 
                    place={localStorage.getItem(`padachone:place`)}
                    pdate={data.data.date.readable}
                    handleDrawerToggle={handleDrawerToggle}
                />
               <Prayers prdata={data} />    
               
                <Footer startup={startup}/>
            </>        
        )
    }
    else {
        return (
            <>
            <h5>{data.data || (data.error === 'Failed to fetch')?'Site is down for maintenance! Please try after sometime.':data.error}</h5> 
            {(data.data || data.error)
                ?<p>Please <Button color="primary" onClick={() => startup({finished: false})}>refresh</Button> to start over!</p>
                :<CircularProgress className={classes.progress} color="secondary" />
            }
           </>       
        )
    }
}

export default Layout;
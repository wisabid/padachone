import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Footer from './Footer';
import Prayers from '../Prayers';
import {usePrayer, useDrawer, useRenderCounts, useForceTrigger} from '../../hooks/api-hooks';
import {UserContext} from '../../store/context/userContext';
import Menus from '../Menus';
import {FT_PRAYER} from '../../utils/constants';
import SiteMessage from '../Messages/SiteMessage';


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
    useRenderCounts('Layout.js');
    
    const [drawerOpen, handleDrawerToggle] = useDrawer();
    const {setTz, setModal, forceTrigger} = useContext(UserContext);
    

    
    
    let usePrayerParams = {region: region, country: country, place : place, method : method, school : school, date : pdate};
    const [data, setData] = usePrayer(usePrayerParams);
    useForceTrigger({setModal:setModal, params : {show : true, name : 'Finetune'}, ftname : FT_PRAYER, setData: setData});
    
    const {timezone} = (data && data.data && data.data.meta)?data.data.meta:'Europe/AmsterDAM';
    setTz(timezone);
    const classes = useStyles();
    
    if (data && data.data && data.data.meta && data.code === 200) {
        return (
            <>
                <Menus drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>
                <Header 
                    startup={startup} 
                    place={localStorage.getItem(`padachone:place`) && localStorage.getItem(`padachone:place`).split(',')[0]}
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
            {/* <h5>{data.data || (data.error === 'Failed to fetch')?<SiteMessage type="warning" message={`Oops ! Please try after sometime.`} action="Refresh" />:data.error}</h5>  */}
            {(data.data || data.error)
                ?<SiteMessage type="warning" message={`Oops ! Please try after sometime.`} action="Refresh" />
                :<CircularProgress className={classes.progress} color="secondary" />
            }
           </>       
        )
    }
}

export default Layout;
import React, { useContext } from 'react';
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

const Layout = ({country, region, place, pdate, startup}) => {
    const [drawerOpen, handleDrawerToggle] = useDrawer();
    const {setTz} = useContext(UserContext);
    const [data] = usePrayer({region: region, country: country, place : place, date : pdate});
    const {timezone} = (data && data.data && data.data.meta)?data.data.meta:'Europe/AmsterDAM';
    setTz(timezone);
    const classes = useStyles();
    if (data && data.data && data.data.meta && data.code === 200) {
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
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Header from './Header';
import Footer from './Footer';
import Prayers from '../Prayers';
import {usePrayer} from '../Prayers/api';
import Sound from 'react-sound';


const useStyles = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
      color: green[500]
    },
    secondary: {
        color:'#4caf50'
    }
  }));

const Layout = ({country, city, pdate, startup}) => {
    const [data, setData] = usePrayer({city: city, country: country, date : pdate});
    const {timezone} = (data && data.data && data.data.meta)?data.data.meta:'Europe/AmsterDAM';
    const classes = useStyles();
    if (data && data.data && data.data.meta && data.code === 200) {
        return (
            <>
                <Header timezone={timezone} startup={startup} city={localStorage.getItem(`padachone:location`)}/>
               <Prayers prdata={data}/>    
               
                <Footer />
            </>        
        )
    }
    else {
        return (
            <>
            <h5>{data.data || data.error}</h5> 
            {(data.data || data.error)
                ?<p>Please refresh to start over!</p>
                :<CircularProgress className={classes.progress} color="secondary" />
            }
           </>       
        )
    }
}

export default Layout;
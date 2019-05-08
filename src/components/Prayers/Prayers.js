import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {usePrayer} from './api';
import Prayer from './Prayer';
import './prayers.css';

const useStyles = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
    },
    secondary: {
        color:'#4caf50'
    }
  }));

const Prayers = (props) => {
    const [data, setData] = usePrayer('Amsterdam');
    const {data:prayerdata, code, status} = data;
    console.log(data)
    debugger;    
    const classes = useStyles();
    // 
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dt = new Date();
    let day = ('0'+dt.getDate()).slice(-2);
    let mon = monthList[dt.getMonth()];
    let yr = dt.getFullYear();
    console.log(`${day} ${mon} ${yr}`)
    // 
    useEffect(() => {
        if (prayerdata && Object.keys(prayerdata).length) {
            //localStorage.setItem()
        }
        
    })
    
    return (
        <div className="pdnContainer">
        {(typeof data === "object" && code === 200 && Object.keys(prayerdata).length)
            ?<>
                <Prayer pdata={prayerdata}/>                           
            </>
            :<CircularProgress className={classes.progress} color="secondary" />
        }        
        </div>
    )
}

export default Prayers;
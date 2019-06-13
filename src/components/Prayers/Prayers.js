import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Grow from '@material-ui/core/Grow';
import Prayer from './Prayer';
import './prayers.css';
import Timer from '../Timer';

const useStyles = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
      color: green[500]
    },
    secondary: {
        color:'#4caf50'
    }
  }));

const Prayers = (props) => {
    const {prdata: data} = props;
    const {data: {timings}} = data;
    const [onlyPrayers, setOnlyPrayers] = useState({})
    useEffect(() => {
        if (timings.hasOwnProperty('Fajr')) {
            let justPrayers = Object.keys(timings).reduce((all, item) => { 
                if (['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].indexOf(item) !== -1) {
                    all[item] = timings[item];              
                }
                return all;          
              }, {});
            setOnlyPrayers(justPrayers)
        }
    }, [timings])
    // const [data, setData] = usePrayer('Amsterdam');
    
    const {data:prayerdata, code, status} = data;
    const classes = useStyles();
    // 
    // const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // let dt = new Date();
    // let day = ('0'+dt.getDate()).slice(-2);
    // let mon = monthList[dt.getMonth()];
    // let yr = dt.getFullYear();
    // 
    useEffect(() => {
        if (prayerdata && Object.keys(prayerdata).length) {
            //localStorage.setItem()
            //throw new Error('Uncaught');
        }
        
    })
    
    return (
        <div className="pdnContainer">
            {onlyPrayers.hasOwnProperty('Fajr') && <Timer timezone={props.timezone} prayers={onlyPrayers}/>}
        {(typeof data === "object" && code === 200 && Object.keys(prayerdata).length)
            ?<>
               <Grow in={true}>
                    <div>
                    <Prayer pdata={prayerdata} timezone={props.timezone}/>
                    
                    </div>
               </Grow>                           
            </>
            :<CircularProgress className={classes.progress} color="secondary" />
        }        
        </div>
    )
}

export default Prayers;
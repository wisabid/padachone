import React from 'react';
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

    
    return (
        <div className="pdnContainer">
        {(typeof data === "object" && code === 200 && Object.keys(prayerdata).length)
            ?<>
                <Prayer pdata={prayerdata.timings}/>
                <Prayer pdata={prayerdata}/> 
                <Prayer pdata={prayerdata}/> 
                <Prayer pdata={prayerdata}/> 
                <Prayer pdata={prayerdata}/>               
            </>
            :<CircularProgress className={classes.progress} color="secondary" />
        }        
        </div>
    )
}

export default Prayers;
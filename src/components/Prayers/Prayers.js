import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Grow from '@material-ui/core/Grow';
import Prayer from './Prayer';
import './prayers.css';

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
    // const [data, setData] = usePrayer('Amsterdam');
    const {prdata: data} = props;
    const {data:prayerdata, code, status} = data;
    const classes = useStyles();
    // 
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dt = new Date();
    let day = ('0'+dt.getDate()).slice(-2);
    let mon = monthList[dt.getMonth()];
    let yr = dt.getFullYear();
    // 
    useEffect(() => {
        if (prayerdata && Object.keys(prayerdata).length) {
            //localStorage.setItem()
            //throw new Error('Uncaught');
        }
        
    })
    
    return (
        <div className="pdnContainer">
        {(typeof data === "object" && code === 200 && Object.keys(prayerdata).length)
            ?<>
               <Grow in={true}>
                    <div>
                    <Prayer pdata={prayerdata}/>
                    
                    </div>
               </Grow>                           
            </>
            :<CircularProgress className={classes.progress} color="secondary" />
        }        
        </div>
    )
}

export default Prayers;
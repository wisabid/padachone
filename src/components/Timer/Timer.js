import React, { useEffect, useState } from 'react'
import Countdown from 'react-count-down';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Zoom from '@material-ui/core/Zoom';
import moment from 'moment'; 
import './timer.css';
import {getPDdata} from '../../utils'
import angel from '../../assets/images/Prayer-time.jpg'
import CurrentTime from './CurrentTime';
import DismissTimer from './DismissTimer';
import PrayerTime from './PrayerTime';


const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 600,
    },
    snackbar: {
      margin: theme.spacing(1),
    },
    typography: {
        padding: theme.spacing(2),
    },
  }));

const Timer = (props) => {
    const [dt, setdt] = useState(getPDdata('iso'))
    // const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userTimezone = moment.tz.guess();
    const [opts, setOpts] = useState({
        // endDate: '05/21/2019 18:42',
        // prefix: 'Left for Fajr',
        // cb
    })
    const [anim, setAnim] = useState([null]);

    const cb = () => {       
        // console.log('expired callback', opts);
        const newmsg = (opts.prefix)?(opts.prefix).replace("Left", "Time"):'';
        setTimerdisplay(false)
        setTimeout(startTimer, 30000);
        
    }
    const [dismissMsg, setdismissMsg] = useState(['Dismiss']);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const resetAll = () => {
        setAnim([null, anim[1]])
        setOpts({});
        setdt(getPDdata('iso'));
        
    }

    const startTimer = (flg) => {
        resetAll();
        let timeoptEl = document.querySelector('.timerComp time');
        if (timeoptEl) {
            let timeopt = timeoptEl.innerHTML;
            const currTime = timeopt.split(' ')[1];
            // const abid = {Fajr: "02:59", Dhuhr: "13:37", Asr: "17:56", Maghrib: "18:46", Isha: "19:58"}
            const upcomingPs = Object.entries(props.prayers).reduce((all, item) => {
                let firstItemTime = parseInt(item[1].split(':')[0]),
                    currTimeSet = parseInt(currTime.split(':')[0]),
                    secondItemTime = parseInt(item[1].split(':')[1]),
                    currTimeSecSet = parseInt(currTime.split(':')[1]);
                if (firstItemTime >= currTimeSet) { 
                    if (firstItemTime === currTimeSet) {
                        // if (secondItemTime > currTimeSecSet) {
                            all.push(item);
                        // }
                    }
                    else {
                        all.push(item);
                    }
                    
                }
                else {
                    if ( ((currTimeSet - firstItemTime ) <= 1) && flg === 'init') {
                        all.push(item);
                    }
                }  
                return all
            }, [])
            console.table('now', upcomingPs);
            // console.log('TZ', props.timezone)
            if (upcomingPs.length) {
                setdismissMsg(['Dismiss']);
                setTimerdisplay(true)
                timeopt = timeopt.replace(currTime, upcomingPs[0][1]); //upcomingPs[0][1]
                // console.log('timeopt', timeopt)
                setOpts({
                    endDate: timeopt,
                    prefix: 'Left for '+upcomingPs[0][0],
                    cb
                });
                setAnim([null, upcomingPs[0][0]])
            }      
        }
    }

    useEffect(() => {
        startTimer('init') 
    }, [])

    const classes = useStyles();
    const [timerdisplay, setTimerdisplay] = useState(true);
    
    

    useEffect(() => {
        let spanEl = document.querySelector('.timerComp .MuiSnackbarContent-message div span:nth-child(1)');
        if (!timerdisplay) {
            setAnchorEl(null);  
            
            if (spanEl && spanEl.innerText === " time expired") {
                setAnim(() => [angel, anim[1]])      
            }   
            setTimeout(() => {
                setTimerdisplay(true)
            }, 60000)
        }
        else {
            // if (!spanEl) {
            //     setTimerdisplay(false)
            // } 
        }

    }, [timerdisplay])

    
    return (
        <>
        <Zoom in={timerdisplay}>
            <div className="timerComp" style={{margin: '0 10px', position: 'static', top: '95px', zIndex: '1'}}>
            {(userTimezone === props.timezone) && <SnackbarContent
                    align="left"
                    className={classes.snackbar}
                    message={opts.hasOwnProperty('endDate') && <Countdown 
                        options={opts} 
                        />}
                    action={<DismissTimer dismissMsg={dismissMsg} setdismissMsg={setdismissMsg} 
                                anchorEl={anchorEl} 
                                setAnchorEl={setAnchorEl}
                                timerdisplay={timerdisplay} 
                                setTimerdisplay={setTimerdisplay}/>}
                                style={{backgroundColor: '#1976d2', display : timerdisplay?'flex':'none' }}
                            />
                }
                
                {/* {opts.hasOwnProperty('endDate') && <Countdown options={opts} />} */}
                <CurrentTime dt={dt} timezone={props.timezone}/>                
            </div>            
        </Zoom>
        <Zoom in={!timerdisplay}>
            <PrayerTime anim={anim} setAnim={setAnim}/>
        </Zoom>
        </>
    )
}

export default Timer;



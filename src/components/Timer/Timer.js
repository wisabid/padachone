import React, { Component, PropTypes, useEffect, useState } from 'react'
import Countdown from 'react-count-down'
import Clock from 'react-live-clock';
import {getPDdata} from '../../utils'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import './timer.css';

const cb = () => {
    console.log('expired callback')
  }
// const OPTIONS = {
//     endDate: '09/20/2019 10:55 AM',
//     prefix: 'Left for Fajr',
//     cb
//   }


const action = (
  <Button color="secondary" size="small">
    Dismiss
  </Button>
);

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 600,
    },
    snackbar: {
      margin: theme.spacing(1),
    },
  }));

const Timer = (props) => {
    const [opts, setOpts] = useState({
        // endDate: '05/21/2019 18:42',
        // prefix: 'Left for Fajr',
        // cb
    })
    
    useEffect(() => {
        // debugger;


        let timeopt = document.querySelector('.timerComp time').innerHTML;
        const currTime = timeopt.split(' ')[1];
        const upcomingPs = Object.entries(props.prayers).reduce((all, item) => {
            if (parseInt(item[1].split(':')[0]) >= parseInt(currTime.split(':')[0])) { //hours checking
                if (parseInt(item[1].split(':')[0]) === parseInt(currTime.split(':')[0])) {
                    if (parseInt(item[1].split(':')[1]) < parseInt(currTime.split(':')[1])) {
                        all.push(item);
                    }
                }
                else {
                    all.push(item);
                }
                
            }  
            return all
        }, [])
        if (upcomingPs.length) {
            timeopt = timeopt.replace(currTime, upcomingPs[0][1]);
            setOpts({
                endDate: timeopt,
                prefix: 'Left for '+upcomingPs[0][0],
                cb
            })
        }              
        
    }, [])

    const classes = useStyles();
    const handleClose = () => {
        debugger;
    }
    return (
        <div className="timerComp">
            <SnackbarContent
                align="left"
                className={classes.snackbar}
                message={<Countdown 
                    options={opts} 
                    />}
                onClose={handleClose}
                action={<Button color="secondary" size="small" onClick={props.onClose}>
                Dismiss
                </Button>}
                style={{backgroundColor: '#1976d2'}}
            />
            {opts.hasOwnProperty('endDate') && <Countdown options={opts} />}
            <Clock
            // date={getPDdata('iso')}
            timezone={props.timezone}
            format={'MM/D/YYYY HH:mm'} style={{display: 'none'}}/>
        </div>
    )
}

export default Timer;
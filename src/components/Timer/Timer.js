import React, { Component, PropTypes, useEffect, useState } from 'react'
import Countdown from 'react-count-down'
import Clock from 'react-live-clock';
import {getPDdata} from '../../utils'

const cb = () => {
    console.log('expired callback')
  }
// const OPTIONS = {
//     endDate: '09/20/2019 10:55 AM',
//     prefix: 'Left for Fajr',
//     cb
//   }

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
                all.push(item);
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
    return (
        <div className="timerComp">
            {opts.hasOwnProperty('endDate') && <Countdown options={opts} />}
            <Clock
            // date={getPDdata('iso')}
            timezone={props.timezone}
            format={'MM/D/YYYY HH:mm'} style={{display: 'none'}}/>
        </div>
    )
}

export default Timer;
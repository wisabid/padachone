import React, { useEffect } from 'react';
// import eid from '../../assets/images/eid.gif';
import {getPDdata} from '../../utils';
import moment from 'moment'; 

const styles = {
    backgroundImage:`url()`, 
    height:'250px', 
    backgroundSize: 'auto 100%', 
    backgroundRepeat:'no-repeat', 
    width: '100%', 
    backgroundPosition: 'center', 
    padding: '50% 0', 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color: 'transparent',
    // backgroundColor: '#fff'
}

const SpecialDay = ({display, setdisplay}) => {
    useEffect(() => {
        const tz = moment.tz.guess();
        if ((getPDdata() === '03 Jun 2019' && tz === 'Europe/Amsterdam') || 
        (getPDdata() === '04 Jun 2019' && tz === 'Europe/Amsterdam') ||
        (getPDdata() === '04 Jun 2019' && tz === 'Europe/London') || 
        (getPDdata() === '03 Jun 2019' && tz === 'Europe/London') || 
        (getPDdata() === '04 Jun 2019' && tz === 'Asia/Dubai') || 
        (getPDdata() === '03 Jun 2019' && tz === 'Asia/Dubai') || 
        (getPDdata() === '04 Jun 2019' && tz === 'Asia/Riyadh') || 
        (getPDdata() === '03 Jun 2019' && tz === 'Asia/Riyadh') || 
        (getPDdata() === '03 Jun 2019' && tz === 'Asia/Jerusalem') || 
        (getPDdata() === '04 Jun 2019' && tz === 'Asia/Jerusalem') || 
        (getPDdata() === '05 Jun 2019')) {
            console.log('Amsterdam & Indian fellow bros')
            setTimeout(() => {
                setdisplay(false)
            }, 5000);
        }        
        else {
            setdisplay(false);
        }
        
    }, []);
    return (
        <div>
                {display && <div className="Prayer-time" 
                    style={styles}>
                        .
                    </div>
                }
        </div>
    )
}

export default SpecialDay;
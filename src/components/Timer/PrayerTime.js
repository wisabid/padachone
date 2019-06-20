import React from 'react';
import angel from '../../assets/images/Prayer-time.jpg';
import LocationText from './LocationText';

const styles = {
    backgroundImage:`url(${angel})`, 
    height:'250px', 
    backgroundSize: 'auto 100%', 
    backgroundRepeat:'no-repeat', 
    width: '100%', 
    backgroundPosition: 'center', 
    padding: '50% 0', 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color: 'rgb(3, 155, 229)',
    backgroundColor: '#fff'    
};



const PrayerTime = ({anim, setAnim, travel=false, location=''}) => {
    return (
        <div style={{overflow: 'hidden'}}>
                {anim[0] && <div className="Prayer-time" 
                    style={styles}>
                        {anim[1]} Time
                        {travel && <>
                            <br />
                            <LocationText location={location}/>
                        </>}
                    </div>
                }
        </div>
    )
}

export default PrayerTime;
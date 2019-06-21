import React, {useState} from 'react';
import {geolocated} from 'react-geolocated';
import Traveltimes from './Traveltimes';
// import SiteMessage from '../Messages/SiteMessage'
import Bgmusic from '../Prayers/Bgmusic'
import bgm from '../../assets/mp3/quietTime.mp3'

const Travel = (props) => {
    const [music, setMusic] = useState({show: false, playing : false});
    const [volume, setVolume] = React.useState(false);
    return (
        <>
            <Bgmusic bgm={bgm} volume={volume} setPlaying={() => {setMusic({show: true, playing : true})}}/>
            {!props.isGeolocationAvailable
                ?<div>Your browser does not support Geolocation</div>
                :!props.isGeolocationEnabled
                    ?<div style={{marginTop:'30px'}}>
                        {/* <SiteMessage message={`Message from Lab : "Geolocation is not enabled. Please enable location. Please <a href="/">refresh</a> to go back"`}/> */}
                        <h5 >Message from Lab : "Geolocation is not enabled. Please enable location. Please <a href="/">refresh</a> to go back"</h5></div>
                    :props.coords
                        ?<>
                            <Traveltimes 
                                lat={props.coords.latitude} 
                                lon={props.coords.longitude} 
                                music={music} 
                                setMusic={setMusic} 
                                volume={volume} 
                                setVolume={setVolume}
                            />
                        </>
                        :<div>Getting the location data&hellip; </div>
            }           
            {/* <Traveltimes lat="52.31406610552598" lon="4.946411339519716" music={music} setMusic={setMusic} volume={volume} setVolume={setVolume}/> */}
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })(Travel);
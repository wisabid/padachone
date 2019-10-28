import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import { geolocated } from "react-geolocated";
import SiteMessage from "../Messages/SiteMessage";
import { useRenderCounts, useWhatsapplogger } from "../../hooks/api-hooks";
import { UserContext } from "../../store/context/userContext";
const Traveltimes = lazy(() => import("./Traveltimes"));
// import Bgmusic from '../Prayers/Bgmusic'
// import bgm from '../../assets/mp3/quietTime.mp3'

const Travel = props => {
  useRenderCounts("Travel.js");
  // Whatsapp logger
  const [log, setLogs] = useWhatsapplogger({});
  useEffect(() => {
    // Whatsapp Logger
    setLogs({
      action: "Traveller Onboard",
      message: `just landed on page`
    });
  }, []);
  const [music, setMusic] = useState({ show: false, playing: false });
  const [volume, setVolume] = React.useState(false);
  const {
    visitor: { latitude, longitude }
  } = useContext(UserContext);
  return (
    <>
      {/* <Bgmusic bgm={bgm} volume={volume} setPlaying={() => {setMusic({show: true, playing : true})}}/> */}
      {!props.isGeolocationAvailable ? (
        <SiteMessage
          type="info"
          message={`Your browser does not support Geolocation. Please refresh to go back`}
          action="Refresh"
        />
      ) : !props.isGeolocationEnabled ? (
        latitude && longitude ? (
          <Suspense fallback={<h4>Loading...</h4>}>
            <Traveltimes
              lat={latitude}
              lon={longitude}
              music={music}
              setMusic={setMusic}
              volume={volume}
              setVolume={setVolume}
            />
          </Suspense>
        ) : (
          <div>
            <SiteMessage
              type="info"
              message={`Geolocation is not enabled. Please enable location. Please refresh to go back`}
              action="Refresh"
            />
            {/* <h5 >Message from Lab : "Geolocation is not enabled. Please enable location. Please <a href="/">refresh</a> to go back"</h5> */}
          </div>
        )
      ) : props.coords ? (
        <>
          <Suspense fallback={<h4>Loading....</h4>}>
            <Traveltimes
              lat={props.coords.latitude}
              lon={props.coords.longitude}
              music={music}
              setMusic={setMusic}
              volume={volume}
              setVolume={setVolume}
            />
          </Suspense>
        </>
      ) : (
        <div>Getting the location data&hellip; </div>
      )}
      {/* me */}
      {/* <Traveltimes lat="52.3741198" lon="4.9630779" music={music} setMusic={setMusic} volume={volume} setVolume={setVolume} method={props.method} school={props.school}/> */}
    </>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Travel);

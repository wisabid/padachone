import React, { useState, useEffect, useContext } from 'react';
import {geolocated} from 'react-geolocated';
import moment from 'moment'; 
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import Traveltimes from '../Travel/Traveltimes'
import Map from '../Lab/Map'
import Search from '../Lab/Search';
// import Bgmusic from '../Prayers/Bgmusic'
// import sufi from '../../assets/mp3/quietTime.mp3'
// import Drawer from './Drawer';
import {useCurrentLocation} from '../../hooks/api-hooks';
import SiteMessage from '../Messages/SiteMessage';
import {UserContext} from '../../store/context/userContext';
import AppPages from '../App/AppPages';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  secondary: {
      color:'#4caf50'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    padding: theme.spacing(3, 2),
    borderRadius: 0,
    padding:0,
    background: '#efefef',
    transition: 'display 0.5s ease-in-out'
},
}));
const Lab = (props) => {
  const {setModal} = useContext(UserContext);
  const classes = useStyles();
  const [currentloc, setCurrentloc] = useCurrentLocation({lat:"52.31406610552598", lon:"4.946411339519716"});
  console.log(currentloc.data);
    const {timings} = props;
    // const [onlyPrayers, setOnlyPrayers] = useState({})
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }

    useEffect(() => {
        // if (timings.hasOwnProperty('Fajr')) {
            // let justPrayers = Object.keys(timings).reduce((all, item) => { 
            //     if (['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].indexOf(item) !== -1) {
            //         all[item] = timings[item];              
            //     }
            //     return all;          
            //   }, {});
            // setOnlyPrayers(justPrayers);
            // Ask user if he wants to fine tune with School and method
            setModal({show : true, name : 'Finetune'})
        // }
    }, []);


   
    
    return (
        <>
        <Header 
            startup={() => console.log('....')} 
            place={localStorage.getItem(`padachone:place`)}
            pdate="..."
            handleDrawerToggle={handleDrawerToggle}
        />
        {/* <Bgmusic bgm={sufi} setPlaying={() => console.log('playing')}/> */}
        <h4 style={{marginTop: '40px'}}>Lab (Alpha Releases)</h4>

        <AppPages />
        {/* <h5>YOU ARE @ - {currentloc.data} {currentloc.error?currentloc.error:''}</h5> */}
        
        <h5>Drawer</h5>
        <p>Live Feature</p>
        {/* <Drawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
        <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton> */}
        <h5>Your TZ : {moment.tz.guess()}</h5>
        {/* <h1>Welcome Alfie</h1>
          <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} /> */}

        {!props.isGeolocationAvailable
            ?<SiteMessage type="info" message={`Your browser does not support Geolocation. Please refresh to go back`} action="Refresh" />
            :!props.isGeolocationEnabled
                ?<SiteMessage type="info" message={`Geolocation is not enabled. Please enable location. Please refresh to go back`} action="Refresh" />                
                :props.coords
                    ? <div>
                      {/* <table>
                    <tbody>
                        <tr><td>latitude</td><td>{props.coords.latitude}</td></tr>
                        <tr><td>longitude</td><td>{props.coords.longitude}</td></tr>
                        <tr><td>altitude</td><td>{props.coords.altitude}</td></tr>
                        <tr><td>heading</td><td>{props.coords.heading}</td></tr>
                        <tr><td>speed</td><td>{props.coords.speed}</td></tr>
                    </tbody>
                    </table> */}
                    
                    
                    <h5>Custom Search</h5>
                    <Search lat={props.coords.latitude} lon={props.coords.longitude}/>
                    
                    <h5>Mosque Map</h5>
                    <div style={{width: '100%', height:'90vh'}}><Map lat={props.coords.latitude} lon={props.coords.longitude} /></div>
                    </div>
                    : <div>Getting the location data&hellip; </div>
                }
                {/* <h4>Lab Alpha Releases</h4> */}
              {/* <Traveltimes lat="52.31406610552598" lon="4.946411339519716" /> */}
              {/* <div style={{width: '100%', height:'90vh'}}><Map lat="52.31406610552598" lon="4.946411339519716" /></div> */}
              {/* <Search lat="52.31406610552598" lon="4.946411339519716" /> */}
              <Footer startup={() => console.log('///')}/>
        </>
    )
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })(Lab);
import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import Clock from 'react-live-clock';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/SettingsBackupRestore';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import logoalt from '../../assets/images/logo-sec.png';
import './layout.css';
import {UserContext} from '../../store/context/userContext';
import InfoMessage from './InfoMessage';
import MusicOption from './MusicOption'
import { useCmsAsset } from '../../hooks/api-hooks';
import {PRISMIC_PADACHONE_LOGO} from '../../utils/constants';
// import Bgmusic from '../Prayers/Bgmusic'
// import bgm from '../../assets/mp3/2019-04-20_-_Quiet_Time_-_David_Fesliyan.mp3'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });




    const useStyles = makeStyles(theme => ({
      progress: {
        margin: theme.spacing(2),
      },
      secondary: {
          color:'#4caf50'
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
  
    


const Header = ({startup, place, pdate, travel=false, address='', volume=true, setVolume, playing, handleDrawerToggle}) => {
    const {tz, setPage, iamin, handleExit} = useContext(UserContext);
    const [logo, setLogo] = useState(logoalt)
    const asset = useCmsAsset(PRISMIC_PADACHONE_LOGO) || logoalt;
    useEffect(() => {
      if (asset.length) {
        setLogo(asset[0].assetImage.url)
      }
    }, [asset])
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true
      });

    
    
      // const handleChange = () => {
      //   setState(() => {
      //     Object.keys(localStorage).map(key => {
      //       if (key !== 'padachone:place' && key !== 'padachone:country' && key !== 'padachone:region' && key !== 'padachone:method' && key !== 'padachone:school') {
      //           localStorage.removeItem(key);
      //       }
      //       return;
      //   });
      //   if (travel) {
      //     // setPage('Setup')
      //   }
      //   else {
      //     startup({country: localStorage.getItem('padachone:country') , region: localStorage.getItem('padachone:region') , place: localStorage.getItem('padachone:place'), finished : false});
      //   }
      //   // return { ...state, [name]: event.target.checked }
      // });
      // };
    return (
        <div className={{flexGrow: 1}}>
          
        <AppBar position="fixed" color="primary" style={travel?{background:'#000'}:null}>
            <Toolbar style={{minHeight: '45px'}}>
              {/* me */}
            {iamin && <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              style={{color:'#fff'}}
            >
              <MenuIcon />
            </IconButton>}
            {logo && <a href="/"><img src={logo} width="150" height="30" alt="Padachone" className="App-logo"  /></a>}
          <div className={classes.grow} />
           
            
            {/* <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="secondary"/> */}
            {/* <Avatar className={classes.avatar}> */}
            {!travel
              ?<SettingsIcon fontSize="default" onClick={handleExit} style={{color:'#fff'}} />
              :<HomeIcon style={{color:'#fff'}} onClick={() => iamin?setPage('Home'):setPage('Setup')}/>
                // ?<HomeIcon />
                // :null

                // :(playing)
              // ?<MusicOption volume={volume} setVolume={setVolume}/>
              //   :null
            }
          {/* </Avatar> */}
            </Toolbar>
            {/* <Slide direction="down" in="true" mountOnEnter unmountOnExit style={{color: 'white', fontStyle:'italic'}}>  
            <Typography variant="subtitle1" color="textSecondary">
              <strong>{pdate}</strong>
              <span style={{color:'#fff', padding: '0 0 0 3px'}}><Clock format={'HH:mm:ss'} ticking={true} timezone={tz} /></span>       
              </Typography>
              </Slide>
              
            <Slide direction="up" in="true" mountOnEnter unmountOnExit>  
              <Typography variant="caption" color="textSecondary" style={{color: 'white', fontStyle:'italic'}}>
                <strong>{(place)
                          ?place
                          :''
                          }</strong> ( {tz}  )
              </Typography>
              
            </Slide> */}
            <Paper className={classes.root}>
            
              
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>  
              <Typography variant="caption" color="textSecondary" style={{padding:'1px 5px', fontStyle:'normal', display: 'flex', justifyContent:'space-between', color: '#555555'}}>
                 <span>{tz}</span>
                          <span style={{fontWeight:'normal'}}>{pdate}</span>
              </Typography>
              
            </Slide>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit style={{fontStyle:'italic'}}>  
            <Typography variant="caption" color="textSecondary" style={{padding:'1px 5px',display: 'flex', justifyContent:'space-between', fontStyle:'normal', color: '#555555', fontSize: '1rem'}}>
            <span>{(place)
                          ?<>{(place != "undefined")?place.substr(0,24):''}{travel && address && <InfoMessage message={`You are closer to : ${address}`}/>}</>
                          :''
                          }</span>
              <span style={{padding: '0 0 0 3px', fontWeight:'normal'}}><Clock format={'HH:mm:ss'} ticking={true} timezone={tz} /></span>       
              </Typography>
              </Slide>
                    </Paper>
        </AppBar>
        {/* <Bgmusic bgm={bgm}/>        */}
        </div>
    )
}

export default Header;
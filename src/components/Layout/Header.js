import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import Clock from 'react-live-clock';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from '../../assets/images/logo.png';
import './layout.css'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });


const useStyles = makeStyles({
      grow: {
        flexGrow: 1,
      }
     
    });
    


const Header = ({timezone, startup, place, pdate}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true
      });
    
      const handleChange = () => {
        setState(() => {
          Object.keys(localStorage).map(key => {
            if (key !== 'padachone:place' && key !== 'padachone:country' && key !== 'padachone:region') {
                localStorage.removeItem(key);
            }
            return;
        });
        
        startup({country: localStorage.getItem('padachone:country') , region: localStorage.getItem('padachone:region') , place: localStorage.getItem('padachone:place'), finished : false});
        // return { ...state, [name]: event.target.checked }
      });
      };
    return (
        <div className={{flexGrow: 1}}>
        <AppBar position="fixed" color="primary">
            <Toolbar style={{minHeight: '45px'}}>
            <img src={logo} width="150" height="30" alt="logo" className="App-logo" style={{marginLeft:'-38px'}} />                        
          <div className={classes.grow} />
           
            <span style={{color:'#fff', padding: '0 0 0 3px'}}><Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} /></span>
            {/* <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="secondary"/> */}
            {/* <Avatar className={classes.avatar}> */}
            <SettingsIcon fontSize="large" className="settings" onClick={handleChange}/>
          {/* </Avatar> */}
            </Toolbar>
            <Slide direction="down" in="true" mountOnEnter unmountOnExit style={{color: 'white', fontStyle:'italic'}}>  
            <Typography variant="subtitle1" color="textSecondary">
              <strong>{pdate}</strong>
                         
              </Typography>
              </Slide>
            <Slide direction="up" in="true" mountOnEnter unmountOnExit>  
              <Typography variant="caption" color="textSecondary" style={{color: 'white', fontStyle:'italic'}}>
                <strong>{(place)
                          ?place
                          :''
                          }</strong> ( {timezone}  )
              </Typography>
              
            </Slide>
            
        </AppBar>
        
        </div>
    )
}

export default Header;
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
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from '../../assets/images/logo-sec.png';
import './layout.css'

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
        background: '#f5f5f5',
    },
    }));
  
    


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
            <img src={logo} width="150" height="30" alt="logo" className="App-logo"  />                        
          <div className={classes.grow} />
           
            
            {/* <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="secondary"/> */}
            {/* <Avatar className={classes.avatar}> */}
            <SettingsIcon fontSize="large" className="settings" onClick={handleChange} style={{color:'#fff'}}/>
          {/* </Avatar> */}
            </Toolbar>
            {/* <Slide direction="down" in="true" mountOnEnter unmountOnExit style={{color: 'white', fontStyle:'italic'}}>  
            <Typography variant="subtitle1" color="textSecondary">
              <strong>{pdate}</strong>
              <span style={{color:'#fff', padding: '0 0 0 3px'}}><Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} /></span>       
              </Typography>
              </Slide>
              
            <Slide direction="up" in="true" mountOnEnter unmountOnExit>  
              <Typography variant="caption" color="textSecondary" style={{color: 'white', fontStyle:'italic'}}>
                <strong>{(place)
                          ?place
                          :''
                          }</strong> ( {timezone}  )
              </Typography>
              
            </Slide> */}
            <Paper className={classes.root}>
            
              
            <Slide direction="up" in="true" mountOnEnter unmountOnExit>  
              <Typography variant="caption" color="textSecondary" style={{padding:'1px 5px', fontStyle:'normal', display: 'flex', justifyContent:'space-between'}}>
                 <span>{timezone}</span>
                          <span style={{fontWeight:'bold'}}>{pdate}</span>
              </Typography>
              
            </Slide>
            <Slide direction="down" in="true" mountOnEnter unmountOnExit style={{fontStyle:'italic'}}>  
            <Typography variant="caption" color="textSecondary" style={{padding:'1px 5px',display: 'flex', justifyContent:'space-between', fontStyle:'normal'}}>
            <strong>{(place)
                          ?`'${place}'`
                          :''
                          }</strong>
              <span style={{padding: '0 0 0 3px'}}><Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} /></span>       
              </Typography>
              </Slide>
                    </Paper>
        </AppBar>
                  
        </div>
    )
}

export default Header;
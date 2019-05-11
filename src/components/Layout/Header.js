import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Clock from 'react-live-clock';
import logo from '../../assets/images/logo.png';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });


const useStyles = makeStyles({
      grow: {
        flexGrow: 1,
      },
    });
    


const Header = ({timezone, startup, city}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true
      });
    
      const handleChange = name => event => {
        setState(() => {
          Object.keys(localStorage).map(key => {
            if (key.startsWith('padachone:')) {
                localStorage.removeItem(key);
            }
            return;
        });
        startup({country: '' , region: '' , finished : false});
        return { ...state, [name]: event.target.checked }
      });
      };
    return (
        <div className={{flexGrow: 1}}>
        <AppBar position="fixed" color="primary">
            <Toolbar>
            <img src={logo} width="150" height="30" alt="logo" className="App-logo"/>
          <div className={classes.grow} />
            <Typography variant="caption" color="inherit" style={{color: 'white'}}>
              {city}
            </Typography>
            <span style={{color:'#fff', padding: '0 0 0 3px'}}>( <Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} /> )</span>
            <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="secondary"/>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;
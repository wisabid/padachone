import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

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
    


const Header = ({timezone, startup}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true
      });
    
      const handleChange = name => event => {
        setState(() => {localStorage.clear();startup({country: '' , region: '' , finished : false});return { ...state, [name]: event.target.checked }});
      };
    return (
        <div className={{flexGrow: 1}}>
        <AppBar position="fixed" color="primary">
            <Toolbar>
            <Typography variant="h6" color="inherit" style={{color: 'white', display:'flex', justifyContent: 'center', marginRight:'10px'}}>
                P  A  D  A  C  H  O  N  E
          </Typography>
          <div className={classes.grow} />
            <Typography variant="h7" color="inherit" style={{color: 'white'}}>
                {timezone}
            </Typography>
            <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="secondary"/>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;
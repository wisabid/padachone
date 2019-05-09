import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });





const Header = ({timezone}) => {
    //const classes = useStyles();

    return (
        <div className={{flexGrow: 1}}>
        <AppBar position="fixed" color="primary">
            <Toolbar>
            <Typography variant="h6" color="inherit" style={{color: 'white'}}>
                {timezone}
            </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;
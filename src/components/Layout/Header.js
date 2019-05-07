import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
    const { classes } = {classes : {root : 'test'}};
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                P A D A C H O N E
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
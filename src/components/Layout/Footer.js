import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles({
//     root: {
//       display: "flex"
//     },
//   });

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Footer = (props) => {
    const classes = useStyles();
    // const [value, setValue] = React.useState('recents');
    // function handleChange(event, newValue) {
    //     setValue(newValue);
    //   }
    return (
        // <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        //     {/* <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} /> */}
        //     <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        //     <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        //     {/* <BottomNavigationAction label="Folder" value="folder" icon={<Icon>...</Icon>} /> */}
        // </BottomNavigation>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
        <Typography variant="h6" color="inherit" style={{color: 'white', display:'flex', justifyContent: 'center'}}>
                A  L  L  A  H
            </Typography>
           
          {/* <IconButton edge="start" color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton> */}
          {/* <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <AddIcon />
          </Fab> */}
          <div className={classes.grow} />
          <Typography variant="h6" color="inherit" style={{color: 'white', display:'flex', justifyContent: 'center', marginRight:'10px'}}>
                P  A  D  A  C  H  O  N  E
          </Typography>
          
          {/* <IconButton color="inherit">
            <SearchIcon />
          </IconButton> */}
          {/* <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
        <Typography variant="caption" display="block" gutterBottom color="secondary">
            version 1.0 - Copyright © 2019 WISMIM. All rights reserved.
          </Typography>
      </AppBar>
    )
}

export default Footer;
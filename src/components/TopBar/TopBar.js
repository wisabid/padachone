import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'yellow'
  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" style={{zIndex: '99999',
    height: '10px', fontSize:'8px', background:'yellow'}}>
        <span style={{color:'red', fontWeight:'bold'}}>Dev Environment</span>
      </AppBar>
    </div>
  );
}
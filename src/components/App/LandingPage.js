import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import AppPages from './AppPages'
import TitleHeader from './TitleHeader';
import {useRenderCounts} from  '../../hooks/api-hooks';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  }
}));


function Setup(props) {
  useRenderCounts('LandingPage.js');  
  const classes = useStyles();  
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <TitleHeader {...props}/>
        <AppPages />
      </div>
      </Slide>
    );
  
}

export default Setup;
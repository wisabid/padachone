import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import './setup.css';
import SetupStepper from './SetupStepper';
import TitleHeader from '../App/TitleHeader';
import {useRenderCounts} from '../../hooks/api-hooks';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  }  
}));



function Setup(props) {
  useRenderCounts('Setup.js'); 
  const classes = useStyles();
    return (
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <TitleHeader {...props} referrer="Setup"/>
          <SetupStepper {...props}/>
        </div>
      </Slide>
    );
  
}

export default Setup;
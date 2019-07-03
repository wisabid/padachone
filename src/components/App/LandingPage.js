import React, {useEffect, useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ForwardIcon from '@material-ui/icons/FastForward';
import Slide from '@material-ui/core/Slide';
import Lab from '../Lab/Lab';
import bg from '../../assets/images/bg-new.png';
// import './setup.css';
import {UserContext} from '../../store/context/userContext';
import OptionsButton from '../OptionsButton';
import AppPages from './AppPages'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  label: {
    color: 'red',
    fontSize: '2rem'
  },
  selfont: {
    // fontSize:'25px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  h1: {
    fontWeight:'bold'
  },
  vertical: {
    color : '#fff'
  },
  iconContainer : {
    fontStyle:'italic'
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Where on earth are you?', 'Almost there!', 'Need More Accuracy?'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `This will Set up your timezone preferance`;
    case 1:
      return 'You can always re-configure these settings on click of a button';
    case 2:
      return 'Key in your Place name for more accurate results.'
    // case 3:
    //   return `Wanna know your Ifthar/Prayer time while moving ? Coming Soon!`;
    default:
      return 'Unknown step';
  }
}

function Setup(props) {
  const {setPage} = useContext(UserContext);
  const {setupdata, country:country_alt, region:region_alt, place: place_alt} = props;
  const classes = useStyles();
  const [state, setState] = React.useState({activeStep : 0, place: place_alt, country : country_alt, region: region_alt})
  const {activeStep, country, region, seccountry, secregion, place } = state;
  // const [activeStep, setActiveStep] = React.useState(0);
  const [ffopen, setFfopen] = useState(false);
  useEffect(() => {
    if ((country_alt && region_alt)) {
      setFfopen(true);
    }
  }, [country_alt, region_alt, place_alt])

  const [colorCode, SetColorCode] = React.useState('rgba(0, 0, 0, 0.54)')
  const steps = getSteps();

  function handleNext() {
    if (state.activeStep === 0 && !country) {
      SetColorCode('red');
      return 
    }
    else if (state.activeStep === 1 && !region) {
      SetColorCode('red');
      return 
    }
    SetColorCode('rgba(0, 0, 0, 0.54)');
    setState({...state, activeStep : state.activeStep + 1});
  }

  function handleBack() {
    SetColorCode('rgba(0, 0, 0, 0.54)');
    setState({...state, activeStep : state.activeStep - 1});
  }

  function handleReset() {
    setState({...state, activeStep : 0});
  }

  const selectCountry = (country) => {
    setState({...state, country})
  }

  useEffect(() => {
    if (country)
    setState({...state, region: '', place : ''})
  }, [country])

  useEffect(() => {
    setState({...state, country : country_alt, region: region_alt})
  }, [])
  const selectRegion = (region) => {
      setState({...state, region})
  }

  const selectsecCountry = (seccountry) => {
    setState({...state, country})
  }
 

  useEffect(() => {
    if (activeStep === steps.length) {
      let newState;
        newState = {...state, finished : true, travel: false};
      setState(() => {        
        props.finished(newState);
        return newState;
      })
      
    }
  })

  const handleChange = name => event => {
    let val = event.target.value;
    if (val.match(/^[a-z A-Z]*$/)) {
      setState({ ...state, place: val });
    }
  };

  const handleTravel = () => {
    setState({ ...state, travel: true });
  }

  const handleFF = () => {
    //hack to fast forward login action..copied from setupstepper;
    props.finished({...state, activeStep: 3, finished: true, travel: false});
  }

  if (state.travel) {
    return (
      
      <Lab />
    )
  }
  else {
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
      <Typography color="textPrimary" variant="h1" component="h1" align="left" 
      style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat',backgroundPosition: 'right top', backgroundSize: 'auto 100%', backgroundColor: '#0c39e3', fontWeight:'bold', fontSize:'4rem', padding:'24px', color: 'rgba(255, 255, 255, 0.7)', marginBottom:0}} gutterBottom>
                  Know You<span onClick={() => { localStorage.clear();return window.location.reload(); }}>r</span> Prayer times {ffopen && <ForwardIcon onClick={handleFF} fontSize="large" style={{color:'#fff', fontSize: '2.8rem', top: '5px', position: 'relative'}} className="landing-navs"/>}
      </Typography>
      
      { <Typography color="textSecondary" align="left" variant="body2" component="p" 
        style={{padding:'0 24px',fontStyle:'italic', fontSize: '0.9rem', marginTop:'10px'}} gutterBottom>
          {/* Are you in a moving train/bus?   */}
          An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day. 
          <br/> "Worries end when Salah begins"
                      {/* <span onClick={handleTravel} style={{fontWeight:'bold', cursor:'pointer'}}>Click here...</span> (Alpha Release) */}
        </Typography> }
        {/* <span onClick={() => setPage('Travel')}> */}
        {/* <Typography color="textSecondary" variant="h2" component="h2" align="left" 
      style={{fontWeight:'bold', fontSize:'1rem', padding:'10px 24px', color: 'rgb(3, 155, 229)', marginBottom:0}} gutterBottom>
                  Travellers click here ... ( in α state)
      </Typography> */}
      {/* <Button variant="contained" color="primary" className={classes.button} onClick={() => setPage('Travel')} align="left" style={{color:'#fff'}}>
        Travellers */}
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        {/* <CloudUploadIcon className={classes.rightIcon} />
      </Button> */}
      {/* <OptionsButton options={[{opt : 'Traveller Onboard', page : 'Travel'}, {opt : 'Near by Mosques', page : ''}, {opt : 'Maps', page : ''}]}
       setPage={(pge) => setPage(pge)} /> */}
      {/* </span> */}
        <AppPages />
      </div>
      </Slide>
    );
  }
  
}

export default Setup;
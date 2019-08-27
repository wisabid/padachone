import React, {useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import CloudUploadIcon from '@material-ui/icons/CardTravel';
import Paper from '@material-ui/core/Paper';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {UserContext} from '../../store/context/userContext';
import {useRenderCounts} from '../../hooks/api-hooks';
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
        return 'Key in your address (eg : XYZ House, Trivandrum)'
      // case 3:
      //   return `Wanna know your Ifthar/Prayer time while moving ? Coming Soon!`;
      default:
        return 'Unknown step';
    }
  }

const SetupStepper = (props) => {
  useRenderCounts('SetupStepper.js'); 
    const {setPage} = useContext(UserContext);
  const {setupdata, country:country_alt, region:region_alt, place: place_alt} = props;
    const classes = useStyles();
    const [state, setState] = React.useState({activeStep : 0, place: place_alt, country : country_alt, region: region_alt})
    const {activeStep, country, region, seccountry, secregion, place } = state;
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
 
  const switchToHome = () => {
    let newState;
    newState = {...state, finished : true, travel: false};
    setState(() => {        
      props.finished(newState);
      return newState;
    })
  }

  useEffect(() => {
    if (activeStep === steps.length) {
      switchToHome();      
    }
  })

  const handleChange = name => event => {
    let val = event.target.value;
    if (val.match(/^[a-z A-Z 0-9 ,]*$/)) {
      setState({ ...state, place: val });
    }
  };
return (
    <>
    <Stepper activeStep={activeStep} orientation="vertical" >
          {steps.map((label, index) => (
            <Step key={label} style={{color: "white", background: '#f5f5f5',borderRadius: '15px', padding:'10px'}}>
              <StepLabel align="left"><span style={{fontSize:'1.5rem', color: 'rgb(3, 155, 229)', fontWeight:'bold'}}>{label}</span></StepLabel>
              <StepContent align="left" style={{border:'none'}}>
                
                {(activeStep === 0) && <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)} className={classes.selfont} 
                style={{maxWidth: '100%', fontSize: '1rem', marginBottom:'10px', minHeight:'40px'}}/>}
  
                {(activeStep === 1) && <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)} className={classes.selfont} 
                style={{maxWidth: '100%', fontSize: '1rem', minHeight:'30px', marginBottom:'10px'}}/>}
              
              {(activeStep === 2) && <TextField
                id="place-name"
                label="Address"
                className={classes.textField}
                value={place}
                onChange={handleChange('place-name')}
                margin="normal"
                variant="outlined"
              />}
                  
                <Typography color="textSecondary" variant="body2" component="p" style={{fontStyle:'italic', fontSize: '1rem', color: colorCode}} gutterBottom>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={`${classes.button} actionButton${activeStep}`}
                      style={{color: "white"}}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : (activeStep === 2 && !place) ? 'Skip' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
         </>
)   
   

}

export default SetupStepper;
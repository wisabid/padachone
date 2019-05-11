import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


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
    color: 'red'
  },
  selfont: {
    // fontSize:'25px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ['P A D A C H O N E !  "Worries end when Salah begins!"', 'Almost there!', 'More Accuracy?', 'Setup your Secondary Preferance - Coming Soon!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `This will Set up your timezone preferance to appear on top of the screen`;
    case 1:
      return 'You can always re-configure these settings on click of a button appearing next to timezone display';
    case 2:
      return 'Key in your Place name for more accurate results'
    case 3:
      return `Do you think Setting up a secondary preferance would always come handy whenever you want to make a 
              comparison between your second home and main?`;
    default:
      return 'Unknown step';
  }
}

function Setup(props) {
  const {setupdata} = props;
  const classes = useStyles();
  const [state, setState] = React.useState({activeStep : 0, place: ''})
  const {activeStep, country, region, seccountry, secregion, place } = state;
  // const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setState({...state, activeStep : state.activeStep + 1});
  }

  function handleBack() {
    setState({...state, activeStep : state.activeStep - 1});
  }

  function handleReset() {
    setState({...state, activeStep : 0});
  }

  const selectCountry = (country) => {
    setState({...state, country})
  }
  const selectRegion = (region) => {
      setState({...state, region})
  }

  const selectsecCountry = (seccountry) => {
    setState({...state, country})
  }
 

  useEffect(() => {
    if (activeStep === steps.length) {
      let newState;
      if (place) {
        newState = {...state, region: place, finished : true};
      }
      else {
        newState = {...state, finished : true};
      }
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

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} style={{color: "white"}}>
            <StepLabel classes={classes.label}>{label}</StepLabel>
            <StepContent>

              {(activeStep === 0) && <CountryDropdown
              value={country}
              onChange={(val) => selectCountry(val)} className={classes.selfont}/>}

              {(activeStep === 1) && <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => selectRegion(val)} className={classes.selfont}/>}
            
            {(activeStep === 2) && <TextField
              id="place-name"
              label="Place"
              className={classes.textField}
              value={place}
              onChange={handleChange('place-name')}
              margin="normal"
              variant="outlined"
            />}
                
              <Typography color="textSecondary" variant="body2" component="p">{getStepContent(index)}</Typography>
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
                    className={classes.button}
                    style={{color: "white"}}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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
    </div>
  );
}

export default Setup;
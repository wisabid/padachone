import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
}));

function getSteps() {
  return ['Padchone !', 'Almost there!', 'Setup your Secondary Preferance'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Please Select your Country`;
    case 1:
      return 'Choose your Region';
    case 2:
      return `Setting up a secondary preferance would always come handy whenever you want to make a 
              comparison between your second home and main`;
    default:
      return 'Unknown step';
  }
}

function Setup(props) {
  const {setupdata} = props;
  const classes = useStyles();
  const [state, setState] = React.useState({activeStep : 0})
  const {activeStep, country, region, seccountry, secregion } = state;
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
  const selectsecRegion = (secregion) => {
      setState({...state, secregion})
  }

  useEffect(() => {
    if (activeStep === 3) {
      props.finished(state);
    }
  })

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} style={{color: "white"}}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {(activeStep === 0) && <CountryDropdown
              value={country}
              onChange={(val) => selectCountry(val)} />}

            {(activeStep === 1) && <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => selectRegion(val)} />}

            
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
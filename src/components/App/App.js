import React, { useState, useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import Layout from '../Layout';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import Location from '../Location/Location'
import Setup from '../Setup/Setup';
import stepperData from '../Setup/setup-stepper-data.json';
import {getPDdata} from '../../utils';
import ErrorBoundary from '../Error/ErrorBoundary';
import CookieConsent from "react-cookie-consent";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary : {
      main: '#fff',
    },
    text: {
      // primary: "#000000",
      // secondary: "#ffffff"
    } 
  },
  typography: {
    // color: '#fff'
  }
});
function App() {  
  const [state, setState] = useState({finished : false, pdtodaysDate: getPDdata().split(' ').join('')});
  const {finished, country, city, pdtodaysDate, prayerdata} = state;
  const handlefinished = (obj) => {
    const {country, region, finished} = obj;
    
    setState({...state, finished, country, city: region});
  }

  

  useEffect(() => {
    const padachon_lsfind = Object.keys(localStorage).filter(key => key.startsWith('padachone:'));
    if (padachon_lsfind.length) {
      setState({...state, finished : true})
    }
  }, [])
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <ErrorBoundary>
          <CookieConsent location="bottom" style={{ background: "#4caf50" }} buttonStyle={{borderRadius: '10px'}}>
            This website uses cookies to enhance the user experience.
        </CookieConsent>
          {!finished && <Setup setupdata={stepperData} finished={(locationstate) => handlefinished(locationstate)}/>}
          {finished && <Layout country={country} city={city} pdate={pdtodaysDate} startup={(resetstate) => handlefinished(resetstate)}/>}
        </ErrorBoundary> 
      </div>
    </ThemeProvider>
    
  );
}

export default App;

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


const theme = createMuiTheme({
  palette: {
    primary: green,
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
  const [state, setState] = useState({finished : false});
  const {finished, country, city} = state;
  
  const handlefinished = (obj) => {
    const {country, region} = obj;
    
    setState({...state, finished: true, country, city: region});
  }

  useEffect(() => {
    if (localStorage.getItem('padachone')) {
      setState({...state, finished : true, country: 'Netherlands', city: 'Amsterdam'})
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        {!finished && <Setup setupdata={stepperData} finished={(locationstate) => handlefinished(locationstate)}/>}
        {finished && <Layout country={country} city={city}/>} 
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
// import 'typeface-roboto';
import Layout from '../Layout';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Setup from '../Setup/Setup';
import stepperData from '../Setup/setup-stepper-data.json';
import {getPDdata} from '../../utils';
import ErrorBoundary from '../Error/ErrorBoundary';
import CookieConsent from "react-cookie-consent";
import Messages from '../Messages'
import SpecialDay from '../Messages/SpecialDay';
import Zoom from '@material-ui/core/Zoom';
import {UserContext} from '../../store/context/userContext';
import Travel from '../Travel';
import Subscribe from '../Subscribe';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
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
  // Global State 
  const [tz, setTz] = useState('');
  const [page, setPage] = useState('Setup');
  const [iamin, setIamin] = useState(false);  
  const [modal, setModal] = useState({show : false, name : ''})
  // Global State ends here
  const [prevScrollpos, setprevScrollpos] = useState(window.pageYOffset);
  const [display, setdisplay] = useState(true);  

  

  const hideHdrFtr = () => {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos >= currentScrollPos) {
        // document.getElementById("navbar").style.top = "0";
        // document.querySelector('.MuiToolbar-gutters').style.display = "flex";
        if (document.querySelector('.padachone-ftr') !== null) {
          document.querySelector('.padachone-ftr').style.visibility = "visible";
        }
      } else {
        // document.getElementById("navbar").style.top = "-50px";
        // document.querySelector('.MuiToolbar-gutters').style.display = "none";
        if (document.querySelector('.padachone-ftr') !== null) {
          document.querySelector('.padachone-ftr').style.visibility = "hidden";
        }
        
      }
      setprevScrollpos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', hideHdrFtr);  
    return () => {
      window.removeEventListener('scroll', hideHdrFtr)
    }  
  }, [])
  const [state, setState] = useState({finished : false, 
    pdtodaysDate: getPDdata().split(' ').join(''), 
    place :localStorage.getItem('padachone:place') , 
    country : localStorage.getItem('padachone:country'), 
    region: localStorage.getItem('padachone:region')});
  const {finished, country, region, pdtodaysDate, prayerdata, place} = state;

  const handlefinished = (obj) => {
    const {country, region, finished, place} = obj;
    setState({...state, finished, country, region: region, place : place});
    if (finished) {
      setPage(() => {
        setIamin(true);
        return 'Home'
      })
    }
    else {
      setPage(() => {
        setIamin(false);
        return 'Setup'
      });
    }
  }

  const handleExit = () => {
    Object.keys(localStorage).map(key => {
      if (key !== 'padachone:place' && key !== 'padachone:country' && key !== 'padachone:region') {
          localStorage.removeItem(key);
      }
    });    
    handlefinished({country: localStorage.getItem('padachone:country') , region: localStorage.getItem('padachone:region') , place: localStorage.getItem('padachone:place'), finished : false});
  };

  const [msg, setMsg] = useState([false, '']);

  useEffect(() => {
    // Logic for displaying Messages
    localStorage.removeItem('padachone_msg');
    localStorage.removeItem('padachone_msg1');
    localStorage.removeItem('padachone_msg2');
    localStorage.removeItem('padachone_msg3');
    localStorage.removeItem('padachone_msg4');
    localStorage.removeItem('padachone_msg5');
    localStorage.removeItem('padachone_msg6');
    if (!localStorage.getItem('padachone_msg7')) {
      const message = `All new Side menu options out for you! Check it out! `;
      setMsg(() => {
        localStorage.setItem('padachone_msg7', message)
        return [true, message]
      });      
    }
    // Logic for displaying Messages end here
    const padachon_lsfind = Object.keys(localStorage).filter(key => key.startsWith('padachone:') && key !== 'padachone:region' && key !== 'padachone:country' && key !== 'padachone:place');
    if (padachon_lsfind.length) {
      setState({...state, finished : true});
      setPage(() => {
        setIamin(true);
        return 'Home'
      })
    }
  }, [])
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <UserContext.Provider value={{
          tz : tz,
          setTz : setTz,
          page : page,
          setPage : setPage,
          iamin : iamin,
          handleExit: handleExit,
          modal : modal, 
          setModal : setModal
        }}>
          <ErrorBoundary>
            <CookieConsent location="bottom" style={{ background: "#29b6f6",marginBottom:'30px' }} buttonStyle={{borderRadius: '10px'}}>
              This website uses cookies to enhance the user experience.
            </CookieConsent>
            <Zoom in={true}>
                <SpecialDay display={display} setdisplay={setdisplay}/>
            </Zoom>
            {msg[0] && <Messages msg={msg[1]}/>}
            {page === 'Travel' && <Travel />}
            {!finished && page === 'Setup' && <Setup setupdata={stepperData} finished={(locationstate) => handlefinished(locationstate)} country={country} region={region} place={place}/>}
            {finished && page === 'Home' && <Layout country={country} region={region} pdate={pdtodaysDate} place={place} startup={(resetstate) => handlefinished(resetstate)}/>}
            {modal.show && modal.name === 'Subscribe' && <Subscribe modal={modal} setModal={setModal}/>}
          </ErrorBoundary>
        </UserContext.Provider> 
      </div>
    </ThemeProvider>
    
  );
}

export default App;

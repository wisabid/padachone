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
import Finetune from '../Finetune';
import Lab from '../Lab';
import {FT_PRAYER, PRISMIC_MSG_BROADCAST_DOC} from '../../utils/constants';
import LandingPage from './LandingPage';
import ConfirmAction from '../ConfirmAction';
import {useRenderCounts, useVisitorDetails, useMessageBroadcast} from  '../../hooks/api-hooks';
import Newsletters from '../Newsletters';

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
  
  useRenderCounts('App.js'); 
  const [msgbroadcast] = useMessageBroadcast();
  // Global State 
  const [tz, setTz] = useState('');
  const [page, setPage] = useState('Setup');
  console.log('%c PAGE'+page, 'font-size:40px;')
  const [iamin, setIamin] = useState(false);  
  const [modal, setModal] = useState({show : false, name : ''})
  // Global State ends here
  const [prevScrollpos, setprevScrollpos] = useState(window.pageYOffset);
  const [display, setdisplay] = useState(true);  
  const [forceTrigger, setForceTrigger] = useState({target : ''});


  const handleForceTrigger = ({target, method, school}) => {
    setForceTrigger(() => {
      setState({...state, 
        method : parseInt(method),
        school : parseInt(school)}
      )
      return {target : FT_PRAYER}
    })
  }
  
  useEffect(() => {
    if (forceTrigger.target === FT_PRAYER) {
      setState({...state, 
        method : localStorage.getItem('padachone:method')?parseInt(localStorage.getItem('padachone:method')):8,
        school : localStorage.getItem('padachone:school')?parseInt(localStorage.getItem('padachone:school')):0}
      )
    }
  }, [forceTrigger])

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
    region: localStorage.getItem('padachone:region'),
    method : localStorage.getItem('padachone:method')?parseInt(localStorage.getItem('padachone:method')):8,
    school : localStorage.getItem('padachone:school')?parseInt(localStorage.getItem('padachone:school')):0
  });
  
  const {finished, country, region, pdtodaysDate, prayerdata, place, method, school} = state;
  const visitor = useVisitorDetails(pdtodaysDate);
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

  const handleNav = (page) => {
    if (page === 'callfunc') {
      handleExit();
    }
    else if (page === 'setmodal') {
      setModal({show : true, name : 'Subscribe'})
    }
    else if (page === 'setFTmodal') {
      setModal({show : true, name : 'Finetune'})
    }
    else if (page === 'reset') {
      setModal({show : true, 
        name : 'ConfirmAction', 
        message: `<p style={{margin:0}}>This will reset all your settings which include Country, region & address Selection in addition to wiping out Fine tune preferences if any. Would you like to proceed ?</p>`,
        handlePrimary : (cb) => {
          localStorage.clear();
          sessionStorage.clear();
          cb();
          return window.location.reload();
        },
        handleSecondary : (cb) => {
          cb();
          return;
        },
        modalconfig : {
          description : "",
          title : "Hard Reset Everything", 
          primaryButton : "Yes",
          secondaryButton : "No",
          error : false,
          loading: false
        }
      })
      
    }
    else {
      setPage(page)
    }
  }

  const handleExit = () => {
    Object.keys(localStorage).map(key => {
      if (key !== 'padachone:place' && key !== 'padachone:country' && key !== 'padachone:region' && key !== 'padachone:method' && key !== 'padachone:school' && key !== `padachone_FT-${FT_PRAYER}`) {
          localStorage.removeItem(key);          
      }
    });    
    handlefinished({country: localStorage.getItem('padachone:country') , region: localStorage.getItem('padachone:region') , place: localStorage.getItem('padachone:place'), method: localStorage.getItem('padachone:method'), school: localStorage.getItem('padachone:school'), finished : false});
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
    localStorage.removeItem('padachone_msg7');
    if (msgbroadcast) {
      // const message = `Chat with us and pass in your feedback/comments. `;
      setMsg(() => {
        // localStorage.setItem('padachone_msg9', message)
        return [true, msgbroadcast.data[PRISMIC_MSG_BROADCAST_DOC].edges[0].node]
      });  
    }
    // Logic for displaying Messages end here
    const padachon_lsfind = Object.keys(localStorage).filter(key => key.startsWith('padachone:') && key !== 'padachone:region' && key !== 'padachone:country' && key !== 'padachone:place' && key !== 'padachone:method' && key !== 'padachone:school');
    if (padachon_lsfind.length) {
      setState({...state, finished : true});
      setPage(() => {
        setIamin(true);
        return 'Home'
      })
    }
  }, [msgbroadcast])
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
          setModal : setModal,
          forceTrigger : forceTrigger, 
          setForceTrigger : setForceTrigger,
          handleNav: handleNav,
          visitor : visitor,
          cmsContents : msgbroadcast
        }}>
          <ErrorBoundary>
            <CookieConsent location="bottom" style={{ background: "#29b6f6",marginBottom:'30px' }} buttonStyle={{borderRadius: '10px'}}>
              This website uses cookies to enhance the user experience.
            </CookieConsent>
            <Zoom in={true}>
                <SpecialDay display={display} setdisplay={setdisplay}/>
            </Zoom>
            {page === 'Newsletters' && <Newsletters />}
            {!finished && page === 'Setup' && <LandingPage finished={(locationstate) => handlefinished(locationstate)} country={country} region={region} place={place}/>}
            {msg[0] && <Messages msg={msg[1]}/>}
            {page === 'Travel' && <Travel method={method} school={school}/>}
            {page === 'Lab' && <Lab timings={{Asr: "18:08", 
                Dhuhr: "13:43",
                Fajr: "02:59",
                Imsak: "02:49",
                Isha: "23:36",
                Maghrib: "22:06",
                Midnight: "01:43",
                Sunrise: "05:20",
                Sunset: "22:06"}} />}
            {page === 'SetMeup' && <Setup setupdata={stepperData} finished={(locationstate) => handlefinished(locationstate)} country={country?country:visitor.country_name?visitor.country_name:''} region={region} place={place}/>}
            {finished && page === 'Home' && <Layout country={country} region={region} pdate={pdtodaysDate} place={place} method={method} school={school} startup={(resetstate) => handlefinished(resetstate)}/>}
            {modal.show && modal.name === 'Subscribe' && <Subscribe modal={modal} setModal={setModal}/>}
            {modal.show && modal.name === 'Finetune' && <Finetune modal={modal} setModal={setModal} method={method} school={school} handleForceTrigger={(obj) => handleForceTrigger(obj)}/>}
            {modal.show && modal.name === 'ConfirmAction' && <ConfirmAction modal={modal} setModal={setModal} message={modal.message} 
              handlePrimary={modal.handlePrimary} 
              handleSecondary={modal.handleSecondary}
              modalconfig={modal.modalconfig}/>}
            {/* <FbChat /> */}
          </ErrorBoundary>
        </UserContext.Provider> 
      </div>
    </ThemeProvider>
    
  );
}

export default App;

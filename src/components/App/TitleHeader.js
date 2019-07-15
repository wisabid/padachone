import React, {useState, useEffect, useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import ForwardIcon from '@material-ui/icons/FastForward';
import Button from '@material-ui/core/Button';
import bg from '../../assets/images/bg-new.png';
import OptionsButton from '../OptionsButton';
import {UserContext} from '../../store/context/userContext';

const TitleHeader = (props) => {
    const {country:country_alt, region:region_alt, place: place_alt, referrer} = props;
    const [state, setState] = React.useState({activeStep : 0, place: place_alt, country : country_alt, region: region_alt})
    const [ffopen, setFfopen] = useState(false);
    const {page, setPage} = useContext(UserContext);
    useEffect(() => {
        if ((country_alt && region_alt)) {
        setFfopen(true);
        }
    }, [country_alt, region_alt, place_alt]);

    const handleFF = () => {
        //hack to fast forward login action..copied from setupstepper;
        props.finished({...state, activeStep: 3, finished: true, travel: false});
      }
    return (
        <>
        <Typography color="textPrimary" variant="h1" component="h1" align="left" 
        style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat',backgroundPosition: 'right top', backgroundSize: 'auto 100%', backgroundColor: '#0c39e3', fontWeight:'bold', fontSize:'4rem', padding:'24px', color: 'rgba(255, 255, 255, 0.7)', marginBottom:0}} gutterBottom>
                    Know Your Prayer times {ffopen && <ForwardIcon className="landing-navs" onClick={handleFF} fontSize="large" style={{color:'#fff', fontSize: '2.8rem', top: '5px', position: 'relative'}} />}
        </Typography>
        
        <Typography color="textSecondary" align="left" variant="body2" component="p" 
        style={{padding:'0 24px',fontStyle:'italic', fontSize: '0.9rem', marginTop:'10px'}} gutterBottom>
            {/* Are you in a moving train/bus?   */}
            An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day. 
            <br/> "Worries end when Salah begins"
                        {/* <span onClick={handleTravel} style={{fontWeight:'bold', cursor:'pointer'}}>Click here...</span> (Alpha Release) */}
          </Typography> 
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
        {/* {page === 'SetMeup' && <OptionsButton options={[{opt : 'Back', page : 'Setup'}]} 
          menuOptIcon={null}
        setPage={(pge) => setPage(pge)} />} */}

        {page === 'SetMeup' && <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(referrer)}
            // className={classes.button}
            style={{color: "white"}}
        >
            Back
        </Button>}
        </>
    )
}

export default TitleHeader;
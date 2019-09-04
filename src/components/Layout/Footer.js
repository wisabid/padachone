import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Zoom from '@material-ui/core/Zoom';
import {RichText} from 'prismic-reactjs';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Subscriptions';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
// import Subscribe from '../Subscribe';
import {UserContext} from '../../store/context/userContext';
import {useSiteTitle} from '../../hooks/api-hooks';
import {PRISMIC_SITEFOOTER_DOC} from '../../utils/constants';


// const useStyles = makeStyles({
//     root: {
//       display: "flex"
//     },
//   });

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#efefef',
    transition: 'display 0.5s ease-in-out'
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Footer = ({startup}) => {
    const classes = useStyles();
    const {modal, setModal} = useContext(UserContext);
    const footerText = useSiteTitle({
      docname : PRISMIC_SITEFOOTER_DOC,
      options : {
        description : `Copyright © 2019 WISMIM."`,
        textcolor: '#555555',
        bgcolor : '#EFEFEF',
        showup : false
      }
    });
    // const [modal, setModal] = useState(false);
    // const [value, setValue] = React.useState('recents');
    // function handleChange(event, newValue) {
    //     setValue(newValue);
    //   }

    // const handleChange = () => {
    //   setModal(true);
    //   //   Object.keys(localStorage).map(key => {
    //   //     if (key !== 'padachone:place' && key !== 'padachone:country' && key !== 'padachone:region') {
    //   //         localStorage.removeItem(key);
    //   //     }
    //   //     return;
    //   //   });
      
    //   // startup({country: localStorage.getItem('padachone:country') , region: localStorage.getItem('padachone:region') , place: localStorage.getItem('padachone:place'), finished : false});
    // };
    
    return (
      
        // <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        //     {/* <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} /> */}
        //     <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        //     <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        //     {/* <BottomNavigationAction label="Folder" value="folder" icon={<Icon>...</Icon>} /> */}
        // </BottomNavigation>
        <>
        {/* <Subscribe modal={modal} setModal={setModal}/> */}
        <AppBar position="fixed" color="primary" className={`${classes.appBar} padachone-ftr`}>
        {/* <Toolbar> */}
        {/* <Typography variant="h6" color="inherit" style={{color: 'white', display:'flex', justifyContent: 'center'}}>
                A  L  L  A  H
            </Typography> */}
           
          {/* <IconButton edge="start" color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton> */}
          {/* <Fab color="secondary" aria-label="Add" className={classes.fabButton} title="Subscribe">
            <SettingsIcon fontSize="large" onClick={() => setModal({show: true, name : 'Subscribe'})}/>            
          </Fab> */}
          <div className={classes.grow} />
          {/* <Typography variant="h6" color="inherit" style={{color: 'white', display:'flex', justifyContent: 'center', marginRight:'10px'}}>
                P  A  D  A  C  H  O  N  E
          </Typography> */}
          
          {/* <IconButton color="inherit">
            <SearchIcon />
          </IconButton> */}
          {/* <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
        {/* </Toolbar> */}
        {/* <Typography variant="caption" display="block" gutterBottom color="secondary" style={{paddingTop:'10px', fontSize:'10px', color: '#555555'
}} align="center">
            Copyright © 2019 WISMIM.
          </Typography> */}
          <Zoom in={footerText.showup}>
        <div 
        style={{textAlign:'center', fontStyle:'italic', color: `${footerText.textcolor}`, background : `${footerText.bgcolor}`, minHeight: '40px'}}>
            
              <RichText render={footerText.description}  />
                        {/* <span onClick={handleTravel} style={{fontWeight:'bold', cursor:'pointer'}}>Click here...</span> (Alpha Release) */}
          </div> 
          </Zoom>
      </AppBar>
      </>
    )
}

export default Footer;
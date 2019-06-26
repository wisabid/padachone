import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import DialogTitle from '@material-ui/core/DialogTitle';
import Emailbox from './Emailbox';
import {sendSubscriptionEmail, handleLocalStorage, validateEmail} from '../../utils';
import * as CONSTANTS from '../../utils/constants'


function Subscribe({modal, setModal}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState({
    value : '', 
    sent : false, 
    button : 'Cancel', 
    loading: false, 
    subscribed: false, 
    error: false, 
    errorlabel: 'Email Address'
  });

  useEffect(() => {
    if (modal.hasOwnProperty('show')) {
      setOpen(modal.show);
    }    
  }, [modal])
  
  function handleClickOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
    setModal({show : false, name : ''});
  }

  const handleSubscribe = () => {
    if (!email.value || !validateEmail(email.value)) {
      return setEmail({...email, value: '', error : true});
    }
    
    setEmail({...email, loading: true});
    if (handleLocalStorage({name : CONSTANTS.P_EMAIL})) {
      setEmail({...email, value : '', button: 'OK', subscribed : true, loading: false});
    }
    else {
      sendSubscriptionEmail(email.value)
        .then((res) => {
            console.log(res);
            setEmail({...email, value : '', sent : true, button: 'OK', loading: false});
            handleLocalStorage({name : CONSTANTS.P_EMAIL, value : email.value});
        })
        .catch(err => {
          setEmail({...email, value: '', error : true, errorlabel: 'Please try later'});
        }) 
      // setTimeout(() => {
      //   setEmail({...email, value : '', sent : true, button: 'OK', loading: false});
      //   handleLocalStorage({name : CONSTANTS.P_EMAIL, value : email.value});
      // }, 2000)    
    } 
  }

  const handleEmail = (event) => {
    setEmail({...email, value : event.target.value, sent : false, error: false, errorlabel: 'Email Address'});
  }

  return (
    <div>      
      {/* <Link
        component="button"
        variant="body2"
        onClick={handleClickOpen}
        >
            Subscribe
        </Link> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      {email.loading && <LinearProgress />}
      <DialogTitle id="form-dialog-title">{(!email.sent && !email.subscribed)?`Subscribe`:''}</DialogTitle>
       
        <DialogContent>
          <Emailbox 
            label={email.errorlabel}
            email={email.value} handleEmail={handleEmail} sent={email.sent} loading={email.loading} subscribed={email.subscribed} error={email.error}/>
        </DialogContent>
        <DialogActions>
          {!email.loading && <Button onClick={handleClose} color="primary">
            {email.button}
          </Button>}
          {!email.sent && !email.loading && !email.subscribed && <Button onClick={handleSubscribe} color="primary">
            Subscribe
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Subscribe;
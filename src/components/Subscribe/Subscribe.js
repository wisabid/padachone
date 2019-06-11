import React, {useRef, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import blue from '@material-ui/core/colors/blue';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import * as emailjs from 'emailjs-com';
import Emailbox from './Emailbox';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: blue[500]
  }
}));
function Subscribe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState({value : '', sent : false, button : 'Cancel', loading: false});
  function handleClickOpen() {
    setOpen(true);
  }

  // useEffect(() => {
  //   if (!email.value) {
      
  //   }
  // }, [email.value])

  function handleClose() {
    setOpen(false);
  }
  const handleSubscribe = () => {
    setEmail({...email, loading: true});
    var template_params = {
      "reply_to": "admirer@padachone.com",
      "from_name": "Admirer",
      "to_name": email.value,
      "message_html": "Thank you for Subscribing to Padachone.com. You are Awesome!"
   }
   
   var service_id = "default_service";
   var template_id = "template_Li3TxnLs";
   emailjs.send(service_id, template_id, template_params, 'user_L109OnczphkyI5bvHhcSe')
    .then((res) => {
      console.log(res);
      // setOpen(false);
      setEmail({...email, value : '', sent : true, button: 'OK'});
    })
    .catch(err => {
      console.error(err)
    })
    // var service_id = 'default_service';
    // var template_id = 'feedback';
    // var template_params = {
    //   name: 'Abid',
    //   reply_email: 'admirer@padachone.com',
    //   message: 'This is awesome Abid!'
    // };

    // emailjs.send(service_id,template_id,template_params, 'user_L109OnczphkyI5bvHhcSe');
  }

  const handleEmail = (event) => {
    setEmail({...email, value : event.target.value, sent : false});
  }

  return (
    <div>      
      {!email.sent && <Link
        component="button"
        variant="body2"
        onClick={handleClickOpen}
        >
            Subscribe
        </Link>}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <Emailbox email={email.value} handleEmail={handleEmail} sent={email.sent}/>
          {email.loading && <CircularProgress className={classes.progress} color="secondary" />}          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {email.button}
          </Button>
          {!email.sent && <Button onClick={handleSubscribe} color="primary">
            Subscribe
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Subscribe;
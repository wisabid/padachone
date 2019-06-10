import React, {useRef} from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as emailjs from 'emailjs-com';

function Subscribe() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const handleSubscribe = () => {
    var template_params = {
      "reply_to": "admirer@padachone.com",
      "from_name": "Admirer",
      "to_name": email,
      "message_html": "Thank you for Subscribing to Padachone.com. You are Awesome!"
   }
   
   var service_id = "default_service";
   var template_id = "template_Li3TxnLs";
   emailjs.send(service_id, template_id, template_params, 'user_L109OnczphkyI5bvHhcSe')
    .then((res) => {
      console.log(res);
      setOpen(false);
      setEmail('');
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
    setEmail(event.target.value);
  }

  return (
    <div>      
      <Link
        component="button"
        variant="body2"
        onClick={handleClickOpen}
        >
            Subscribe
        </Link>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubscribe} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Subscribe;
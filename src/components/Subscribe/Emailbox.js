import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

const Emailbox = ({email, handleEmail}) => {
    return (
        <>
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
        </>
    )
}

export default Emailbox;
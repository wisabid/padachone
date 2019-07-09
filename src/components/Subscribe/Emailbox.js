import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import {useRenderCounts} from '../../hooks/api-hooks';

const Emailbox = ({label='Email Address', email, handleEmail, sent, loading, subscribed, error}) => {
    useRenderCounts('Emailbox.js'); 
        return (
            <>
                    <DialogContentText>
                        {subscribed?
                            `You are already subscribed !`
                            :sent?
                                `Successfully Subscribed ! Please check your email.`
                                :`To subscribe to this website, please enter your email address here. We will send updates
                                occasionally.`
                        }
                        
                    </DialogContentText>
                    {!sent &&  !subscribed && <TextField
                        error={error}
                        autoFocus
                        margin="dense"
                        id="name"
                        label={label}
                        type="email"
                        fullWidth
                        value={email}
                        onChange={handleEmail}
                        autoComplete="Off"
                    />}
            </>
        )
}

export default Emailbox;
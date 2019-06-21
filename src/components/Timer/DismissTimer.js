import React, { useEffect, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import goofy from '../../assets/images/goofy.svg'
import boo from '../../assets/images/boo.svg'
import cool from '../../assets/images/cool.svg'


const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const DismissTimer  = ({dismissMsg, setdismissMsg, anchorEl, setAnchorEl, timerdisplay, setTimerdisplay}) => {    
    const classes = useStyles();
    const onClose1 = (event) => {
        setAnchorEl(event.currentTarget);
        const timeleftEl = document.querySelector('.timerComp .MuiSnackbarContent-message div span:nth-child(1)').innerText.split(' ');
        const minsorsecs = timeleftEl[1];
        const minsorsecsVal = parseInt(timeleftEl[0]);
        if (minsorsecs === "minutes" || minsorsecs === "minute" || minsorsecs === "seconds" || minsorsecs === "second") {
            if ((minsorsecs === "minutes" || minsorsecs === "minute") && minsorsecsVal <= 5) {
                setdismissMsg(['Not Allowed !', goofy])
            }
            else  if((minsorsecs === "seconds" || minsorsecs === "second") && minsorsecsVal <= 30) {
                setdismissMsg(['Line up and be ready !', cool]) 
            }
            else  if((minsorsecs === "seconds" || minsorsecs === "second") && minsorsecsVal <= 60) {
                setdismissMsg(['Forbidden !', boo]) 
            }
            else {
                setTimerdisplay(false);
            }
        }
        else {
            setTimerdisplay(false);
        }
    }
    const [mtop, setMtop] = useState('0px');
    useEffect(() => {
        console.log(dismissMsg)
        if (dismissMsg[0] !== 'Dismiss') {
            setMtop('-38px')
        }
    }, [dismissMsg])
    function handleClose() {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : null;
    return (
        <>
            <Button color="secondary" size="small" onClick={onClose1} style={{marginTop:`${mtop}`}}>
            {(dismissMsg[0] === 'Dismiss')?dismissMsg[0]:null}{dismissMsg[0] !== 'Dismiss' && <img src={dismissMsg[1]} width="60" height="60"/>}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>{dismissMsg[0]}</Typography>
            </Popover>
        </>
    )
}

export default DismissTimer;
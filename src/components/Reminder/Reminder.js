import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import lightBlue from '@material-ui/core/colors/lightBlue';

import IconButton from "@material-ui/core/IconButton";
import AlarmIcon from "@material-ui/icons/AddAlarm";
import CheckedIcon from "@material-ui/icons/AlarmOn";
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import { UserContext } from "../../store/context/userContext";
import { validateUserTimezone } from "../../utils";
import { addAlert } from "../../utils";
import { messaging } from "../../config/firebase";
import TestReminder from "./TestReminder";

const useStyles = makeStyles(theme => ({
  button: {
    // margin: theme.spacing(1),
    // margin: "5px",
    padding: "0",
    // top:'-20px'
    // minHeight: "25px"
  },
  input: {
    display: "none"
  },
  progress: {
    margin: theme.spacing(2),
    color: lightBlue[500]
  },
}));

export default function Reminder({ prayer, time }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(false);
  const [modal, setModal] = useState({ show: false, name: "" });

  const { tz, visitor } = useContext(UserContext);
  const [enableAlarm, setEnableAlarm] = useState(true);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    // Check for Reminder cookie
    if (sessionStorage.getItem(`padachone_reminder:${time}`)) {
      setEnableAlarm(false);
    } else {
      // it should be <, and  > is only for testing
      if (new Date().getHours() < parseInt(time.split(":")[0])) {
        setEnableAlarm(true);
      } else if (new Date().getHours() === parseInt(time.split(":")[0])) {
        if (new Date().getMinutes() >= parseInt(time.split(":")[1])) {
          setHide(true);
        } else {
          setEnableAlarm(true);
        }
      } else {
        setHide(true);
      }
    }
  }, [time]);

  useEffect(() => {
    if (skip) {
      handleAlert();
    }
  }, [skip])

  const handleAlert = () => {
    // call Test reminder screen only when there is no cookie set and if the user has not skipped
    if (!localStorage.getItem(`padachone_testreminder`) && !skip) {
      // setTempdata([{ prayer, time, tz }]);
      // handleNav("testcron");
      setModal({ show: true, name: "testcron" });
    } else {
      setLoading(true)
      addAlert({ prayer, time, tz, visitor }).then(res => {
        if (res === "OK") {
          console.log("%c OKAY", "font-size:50px;");
          setEnableAlarm(false);
        }
      }).finally(() => {
        setModal({ show: false, name: "" });
        setLoading(false);
      })
      
    }
  };

  // Reminder is only available for same timezone
  // Also for Android and chrome only..not for ios safari
  if (validateUserTimezone(tz) && messaging && !hide) {
    console.log('RRR',validateUserTimezone(tz))
    console.log('RRR',messaging)
    return (
      <>
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="add an alarm"
        >
          {!enableAlarm ? (
            <CheckedIcon fontSize="default" />
          ) : !hide ? (
            loading ? (
              <CircularProgress className={classes.progress} color="secondary" size="20px"/>

            ) : (
              <AlarmIcon
                onClick={() => {
                  handleAlert();
                }}
              />
            )
          ) : null}
        </IconButton>
        <TestReminder
          modal={modal}
          setModal={setModal}
          handleAlert={handleAlert}
          setSkip={setSkip}
        />
      </>
    );
  } else if (hide && messaging){
    return <AlarmOffIcon fontSize="default" color="disabled"/>;
  }
  else {
    return null
  }
}

import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useCalcMethods } from "../../hooks/api-hooks";
import { UserContext } from "../../store/context/userContext";
import DialogModal from "../Modal";
import Button from "@material-ui/core/Button";
import AlarmIcon from "@material-ui/icons/Alarm";
import { addTestAlert } from "../../utils";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    minWidth: "220px"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  progress: {
    margin: theme.spacing(2),
    color: "grey"
  }
}));

const TestReminder = props => {
  const { handleAlert, setModal, setSkip } = props;
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [methods] = useCalcMethods();
  const { tz, visitor } = useContext(UserContext);
  const initialState = {
    description:
      "Would you like to see how it works before you set actual ones?",
    title: "Test Prayer Reminder",
    primaryButton: "Skip & Proceed",
    secondaryButton: "Cancel",
    error: false,
    loading: false
  };
  const [modalConfig, setModalConfig] = useState(initialState);
  useEffect(() => {
    if (methods.hasOwnProperty("error")) {
      setModalConfig({
        ...modalConfig,
        description:
          "We are experiencing some issues. Please try after sometime.",
        secondaryButton: "Ok",
        primaryButton: "",
        error: true
      });
    }
  }, [methods]);
  const classes = useStyles();

  const handleSecondary = () => {
    // setModalConfig(initialState);
    setModal({ show: false, name: "" });
  };

  const handlePrimary = event => {
    if (event.target.textContent.includes("Skip")) {
      setSkip(true);
    } else {
      //   setModalConfig({ ...modalConfig, loading: true });
      handleAlert();
    }
    setModal({ show: false, name: "" });
  };
  const setTestReminder = incrementTime => {
    let time = moment()
      .add(incrementTime, "minutes")
      .format("HH:mm");
    setModalConfig({ ...modalConfig, loading: true });
    addTestAlert({ prayer: "testRem", time, tz, visitor })
      .then(res => {
        if (res === "OK") {
          console.log("%c OKAY", "font-size:50px;");
          setMsg(time);
          localStorage.setItem(`padachone_testreminder`, `1`);
          setModalConfig({
            ...modalConfig,
            loading: false,
            description:
              "Feel free to exit application and wait for the reminder.",
            primaryButton: "Continue"
          });
        }
      })
      .catch(err => {
        console.error(err.message);
        setModalConfig({
          ...modalConfig,
          description:
            "We are experiencing some issues. Please try after sometime.",
          secondaryButton: "Ok",
          primaryButton: "",
          error: true
        });
      });
  };
  return (
    <DialogModal
      {...props}
      error={modalConfig.error}
      title={modalConfig.title}
      description={modalConfig.description}
      primaryButton={
        modalConfig.primaryButton ? modalConfig.primaryButton : null
      }
      handlePrimaryAction={handlePrimary}
      secondaryButton={modalConfig.secondaryButton}
      handleSecondaryAction={() => handleSecondary()}
      loading={modalConfig.loading}
    >
      {" "}
      {!loading ? (
        msg ? (
          <div
            style={{ color: "green", textAlign: "center", fontWeight: "bold" }}
          >
            Expect one at {msg} Hrs
          </div>
        ) : (
          <>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              color="primary"
              onClick={() => setTestReminder(2)}
            >
              <AlarmIcon className={classes.leftIcon} />
              Remind me in 2 min
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              color="secondary"
              onClick={() => setTestReminder(5)}
            >
              <AlarmIcon className={classes.leftIcon} />
              Remind me in 5 mins
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={() => setTestReminder(30)}
            >
              <AlarmIcon className={classes.leftIcon} />
              Remind me in 30 mins
            </Button>
          </>
        )
      ) : (
        <CircularProgress className={classes.progress} color="secondary" />
      )}
    </DialogModal>
  );
};

export default TestReminder;


import lightBlue from "@material-ui/core/colors/lightBlue";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UserContext } from "../../store/context/userContext";
import DialogModal from "../Modal";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: lightBlue[500]
  }
}));

const Notification = props => {
  const {
    setModal,
    notification,
    setNotification
  } = useContext(UserContext);
  const initialState = {
    description: "",
    title: "Reminder Notification",
    primaryButton: "Okay",
    secondaryButton: "",
    error: false,
    loading: false
  };
  const [modalConfig, setModalConfig] = useState(initialState);
  // useEffect(() => {
  //   if (notification.hasOwnProperty("error")) {
  //     setModalConfig({
  //       ...modalConfig,
  //       description:
  //         "We are experiencing some issues. Please try after sometime.",
  //       secondaryButton: "Ok",
  //       primaryButton: "",
  //       error: true
  //     });
  //   }
  // }, [notification]);
  const classes = useStyles();
  

  

  const handlePrimary = () => {
    setModal({ show: false, name: "" });
    setNotification({});
  };

  const handleSecondary = () => {
    setModalConfig(initialState);
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
      handlePrimaryAction={() => handlePrimary()}
      secondaryButton={modalConfig.secondaryButton}
      handleSecondaryAction={() => handleSecondary()}
      loading={modalConfig.loading}
    >
      {notification.hasOwnProperty("firebase-messaging-msg-data") && notification["firebase-messaging-msg-data"].notification.body ? (
        <div>
          <List dense className={classes.root}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar`}
                  src={`https://www.padachone.com/Padachone-Twitter.png`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  notification["firebase-messaging-msg-data"].notification.body
                }
              />
            </ListItem>
          </List>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <CircularProgress className={classes.progress} color="secondary" />
        </div>
      )}
    </DialogModal>
  );
};

export default Notification;

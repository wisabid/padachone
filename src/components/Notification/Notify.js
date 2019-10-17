import lightBlue from "@material-ui/core/colors/lightBlue";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UserContext } from "../../store/context/userContext";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Notification from './Notification'

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: lightBlue[500]
  }
}));


const FirebaseNotify = (props) => {
  const classes = useStyles();

  const {
    setModal,
    notification,
    setNotification
  } = useContext(UserContext);
  return (
    <>
      {notification.hasOwnProperty("firebase-messaging-msg-data") &&
        notification["firebase-messaging-msg-data"].notification.body && (
          <Notification {...props} title="Reminder Notification">
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
                      notification["firebase-messaging-msg-data"].notification
                        .body
                    }
                  />
                </ListItem>
              </List>
            </div>
          </Notification>
        )}
      {notification.hasOwnProperty("username-msg-data") &&
        notification["username-msg-data"].message && (
          <Notification {...props} primaryBtn="I'm great! Thank you">
            <div>
              <List dense className={classes.root}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar`}
                      src={`https://www.padachone.com/Padachone-Twitter.png`}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={notification["username-msg-data"].greeting} secondary={notification["username-msg-data"].message}/>
                </ListItem>
              </List>
            </div>
          </Notification>
        )}
      {/* <div style={{ textAlign: "center" }}>
        <CircularProgress className={classes.progress} color="secondary" />
      </div> */}
    </>
  );
}


export default FirebaseNotify;
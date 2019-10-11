import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";
import TravelIcon from "@material-ui/icons/CardTravel";
import MailIcon from "@material-ui/icons/Mail";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import TuningIcon from "@material-ui/icons/Tune";
import SubscribeIcon from "@material-ui/icons/Subscriptions";
import LabIcon from "@material-ui/icons/DirectionsRun";
import PowerIcon from "@material-ui/icons/SettingsBackupRestore";
import { UserContext } from "../../store/context/userContext";
import { P_MENUS, P_MENUS_SEC } from "../../utils/constants";
import { useWhatsapplogger } from "../../hooks/api-hooks";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const Micon = ({ icon }) => {
  switch (icon) {
    case "Home":
      return <HomeIcon />;
    case "Travel":
      return <TravelIcon />;
    case "setmodal":
      return <SubscribeIcon />;
    case "setFTmodal":
      return <TuningIcon />;
    case "Lab":
      return <LabIcon />;
    case "callfunc":
      return <PowerIcon />;
    case "reset":
      return <SettingsPowerIcon />;

    default:
      return <HomeIcon />;
  }
};

export default function TemporaryDrawer({ drawerOpen, handleDrawerToggle }) {
  const classes = useStyles();
  // Whatsapp logger
  const [log, setLogs] = useWhatsapplogger({});
  const { iamin, setPage, handleExit, setModal, handleNav } = useContext(
    UserContext
  );
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
    handleDrawerToggle();
  };

  useEffect(() => {
    if (drawerOpen) {
      // Whatsapp Logger
      setLogs({
        action: "Sidemenu",
        message: `just opened up side menu`
      });
      setState({ ...state, left: true });
    }
  }, [drawerOpen]);

  // const handleNav = (page) => {
  //     if (page === 'callfunc') {
  //       handleExit();
  //     }
  //     else if (page === 'setmodal') {
  //       setModal({show : true, name : 'Subscribe'})
  //     }
  //     else if (page === 'setFTmodal') {
  //       setModal({show : true, name : 'Finetune'})
  //     }
  //     else if (page === 'reset') {
  //       localStorage.clear();
  //       return window.location.reload();
  //     }
  //     else {
  //       setPage(page)
  //     }
  // }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {P_MENUS.map((nav, index) => (
          <ListItem
            button
            key={`${index}-${nav.page}-main`}
            disabled={
              index !== 0 && index !== 1 && index !== 2 && index !== 3
                ? true
                : false
            }
            onClick={() => handleNav(nav.page)}
          >
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemIcon>
              <Micon icon={nav.page} />
            </ListItemIcon>
            <ListItemText primary={nav.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {P_MENUS_SEC.map((nav, index) => (
          <ListItem
            button
            key={`${index}-${nav.page}-sec`}
            disabled={index !== 2 && index !== 0 ? true : false}
            onClick={() => handleNav(nav.page)}
          >
            <ListItemIcon>
              <Micon icon={nav.page} />
            </ListItemIcon>
            <ListItemText primary={nav.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button> */}

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}

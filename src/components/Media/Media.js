import lightBlue from "@material-ui/core/colors/lightBlue";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect, useState, useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useCalcMethods, useWhatsapplogger } from "../../hooks/api-hooks";
import { UserContext } from "../../store/context/userContext";
import DialogModal from "../Modal";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  group: {
    margin: theme.spacing(1, 0),
    flexDirection: "row"
  },
  progress: {
    margin: theme.spacing(2),
    color: lightBlue[500]
  },
  card: {
    display: 'flex',
    flexDirection : 'column'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const Media = props => {
  // All you need for loggin
  // Whatsapp Logger
  const [log, setLogs] = useWhatsapplogger({});
  const iframeRef =  useRef(null)
  const [methods] = useCalcMethods();
  const { setForceTrigger, setModal } = useContext(UserContext);

  const initialState = {
    description:
      "",
    title: "Staying Positive After Hardships",
    primaryButton: "Like it",
    secondaryButton: "cancel",
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

  useEffect(()   => {
    setTimeout(() => console.table(iframeRef.current.onReady), 5000)
    
  }, [])
  const classes = useStyles();
  

  

  const handlePrimary = () => {
    setModalConfig({ ...modalConfig, loading: true });
    

    

    // setForceTrigger(() => {
    //   return {target: FT_PRAYER, method : calcMethod, school : schoolVal}
    // });
    setModal({ show: false, name: "" });
    //window.location.reload();
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
      fullWidth={true}
    >
     
        <Card className={classes.card}>
            {/* <div className={classes.details}> */}
              {/* <CardContent className={classes.content}> */}
                {/* <Typography component="h5" variant="h5">
                  Staying Positive After Hardships
                </Typography> */}
                {/* <Typography variant="subtitle1" color="textSecondary">
                  Mac Miller
                </Typography> */}
              {/* </CardContent> */}
              
            {/* </div> */}
            <CardMedia
              component="iframe"
              // className={classes.cover}
              // image="/static/images/cards/live-from-space.jpg"
              title="Staying Positive After Hardships"
              src="https://www.youtube.com/embed/RgGh2hlHbc4?enablejsapi=1&origin=https://www.padachone.com"
              ref={iframeRef}
              onLoad={() => console.log('HIDE LOADING')}
            />
          </Card>
      
    </DialogModal>
  );
};

export default Media;

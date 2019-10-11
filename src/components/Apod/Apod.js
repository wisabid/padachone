import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import TitleHeader from "../App/TitleHeader";
import { useRenderCounts, useWhatsapplogger } from "../../hooks/api-hooks";
import MediaCard from "./MediaCard";
import { UserContext } from "../../store/context/userContext";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

function Setup(props) {
  useRenderCounts("Apod.js");
  const { pdate, referrer } = props;
  const [data, setData] = useState({});
  const { setPage } = useContext(UserContext);
  const [log, setLogs] = useWhatsapplogger({});
  useEffect(() => {
    // Whatsapp Logger
    setLogs({
      action: "APOD",
      message: `just landed on apod details page`
    });
  }, []);

  
  useEffect(() => {
    if (pdate && localStorage.getItem(`padachone_apod:${pdate}`)) {
      setData(JSON.parse(localStorage.getItem(`padachone_apod:${pdate}`)));
    }
  }, [pdate]);
  const classes = useStyles();
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <TitleHeader {...props} />
        <MediaCard
          {...data}
          linkto="https://apod.nasa.gov/apod/astropix.html"
        />
      </div>
    </Slide>
  );
}

export default Setup;

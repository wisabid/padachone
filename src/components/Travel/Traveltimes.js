import React, {
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  useRef
} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import SwipeableViews from "react-swipeable-views";
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import blue from "@material-ui/core/colors/blue";
import { autoPlay } from "react-swipeable-views-utils";
import {
  usePrayerOnGo,
  useCurrentLocation,
  useDrawer,
  useForceTrigger,
  useForceTriggerRefresh,
  useRenderCounts,
  useWhatsapplogger,
  useHijriHook
} from "../../hooks/api-hooks";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { getJustPrayers } from "../../utils";
import Timer from "../Timer";
import { UserContext } from "../../store/context/userContext";
import Header from "../Layout/Header";
import "./travel.css";
import Menus from "../Menus";
import { FT_PRAYER } from "../../utils/constants";
import Accordion from "../Accordion";
import Metadata from "../Prayers/Metadata";
import TodayIcon from "@material-ui/icons/Today";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  },
  card: {
    minWidth: "100%",
    background: "#000",
    marginBottom: "5px"
  },
  title: {
    fontSize: 14,
    color: "#fff"
  },
  progress: {
    margin: theme.spacing(2),
    color: blue[500]
  }
}));

const Traveltimes = ({
  lat,
  lon,
  startup,
  music,
  volume,
  setVolume,
  method,
  school
}) => {
  useRenderCounts("Traveltimes.js");
  const [expanded, setExpanded] = useState(false);
  useHijriHook({expanded, travelorMain : 'Travel'});

  const [log, setLogs] = useWhatsapplogger({});

  const [drawerOpen, handleDrawerToggle] = useDrawer();
  const [data, setData] = usePrayerOnGo({
    lat: lat,
    lon: lon,
    method: method,
    school: school
  });

  const [loc] = useCurrentLocation({ lat: lat, lon: lon });
  const { setTz, setModal, forceTrigger } = useContext(UserContext);
  //using same ftname for travel too
  useForceTrigger({
    setModal: setModal,
    params: { show: true, name: "Finetune" },
    ftname: FT_PRAYER,
    setData: setData
  });
  // const [volume, setVolume] = React.useState(true);
  let timings;
  if (data.length) {
    timings = data[0].timings;
    let { timezone } = data[0].meta ? data[0].meta : "Europe/Amsterdam";
    //hack for Asia/Calcutta tz
    if (timezone === "Asia/Kolkata") {
      timezone = "Asia/Calcutta";
    }
    setTz(timezone);
  }
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }
  // const [music, setMusic] = useState({show: false, playing : false})
  const [onlyPrayers, setOnlyPrayers] = useState({});
  useEffect(() => {
    if (timings && timings.hasOwnProperty("Fajr")) {
      let justPrayers = getJustPrayers({ timings: timings });
      console.log(
        "%c JUSTP" + JSON.stringify(justPrayers),
        "color: purple;font-size:20px;"
      );
      setOnlyPrayers(justPrayers);
      setVolume(); //play music
      // Whatsapp Logger
      setLogs({
        action: "Traveller Onboard",
        message: `just gotta know the prayer times of ${loc.formattedaddress}`
      });
    }
  }, [timings]);

  if (data.length && data[0].timings) {
    console.table(data);
    return (
      <div className={classes.root}>
        {/* <Bgmusic bgm={bgm} volume={volume} setPlaying={() => setMusic({show: true, playing : true})}/> */}
        <Menus
          drawerOpen={drawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Header
          startup={startup}
          place={loc.data && loc.data.split(",")[0]}
          pdate={data[0].date.readable}
          travel={true}
          address={loc.formattedaddress}
          volume={volume}
          setVolume={setVolume}
          playing={music.playing}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          {/* <Paper square elevation={0} className={classes.header}> */}
          {/* <Typography>tutorialSteps[activeStep].label{data.data[0].timings.Maghrib}</Typography> */}
          {/* </Paper> */}
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            // style={{ marginTop: '22px'}}
          >
            {/* {onlyPrayers.hasOwnProperty('Fajr') && <Timer prayers={onlyPrayers}/>} */}
            {tutorialSteps.map((step, index) => (
              <div key={step.label} style={{ marginTop: "107px" }}>
                {onlyPrayers.hasOwnProperty("Fajr") && (
                  <Timer
                    prayers={onlyPrayers}
                    travel={true}
                    location={loc.formattedaddress}
                  />
                )}

                <div>
                  <Accordion
                    title={<TodayIcon />}
                    secondaryTitle="Hijri"
                    key="prayermeta"
                    expanded={expanded}
                    setExpanded={setExpanded}
                    styles={{ boxShadow: "none", background:'#000', color:'#fff' }}
                  >
                    <div className="metadata-container" style={{background:'#000', color:'#fff'}}>
                      <Metadata data={data[0]} styles={{background:'#000', color:'#fff'}}/>
                      {/* {JSON.stringify(prayerdata.date.hijri)} */}
                    </div>
                  </Accordion>
                  {Math.abs(activeStep - index) <= 2
                    ? // <img className={classes.img} src={step.imgPath} alt={step.label} />
                      Object.keys(data[0].timings).map((prayer, ind) => {
                        let splitdt = data[0].timings[prayer].split(" "),
                          timing = splitdt[0],
                          tzone = splitdt[1];
                        return (
                          <Card className={classes.card} key={ind}>
                            <CardContent className="travelCard">
                              <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                style={{ minWidth: "60px", textAlign: "left" }}
                              >
                                {prayer}
                              </Typography>
                              <Typography variant="h3" component="h2">
                                <strong style={{ color: "#039be5" }}>
                                  {timing}
                                </strong>
                              </Typography>

                              <Typography
                                variant="body2"
                                component="p"
                                color="textSecondary"
                                className={classes.title}
                              >
                                {tzone}
                                {/* <br />
                                {data[0].date.hijri.month.ar} */}
                              </Typography>
                            </CardContent>
                          </Card>
                        );
                      })
                    : null}
                </div>
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Slide>
      </div>
    );
  } else {
    return <CircularProgress className={classes.progress} color="secondary" />;
  }
};

export default React.memo(Traveltimes);

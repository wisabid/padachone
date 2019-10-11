import React, { useEffect, useState, useContext } from "react";
import Countdown from "react-count-down";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Zoom from "@material-ui/core/Zoom";
import moment from "moment";
import "./timer.css";
import { getPDdata } from "../../utils";
import { PRISMIC_PRAYERTIME_BOY_BG } from "../../utils/constants";
import CurrentTime from "./CurrentTime";
import DismissTimer from "./DismissTimer";
import PrayerTime from "./PrayerTime";
import { UserContext } from "../../store/context/userContext";
import { useRenderCounts, useCmsAsset } from "../../hooks/api-hooks";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(1)
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

const Timer = props => {
  useRenderCounts("Timer.js");
  const [upcomingPrayers, setUpcomingPrayers] = useState([]); // hotfix for hiding blank timer display
  const [angel, setAngel] = useState("");
  const asset = useCmsAsset(PRISMIC_PRAYERTIME_BOY_BG);
  useEffect(() => {
    if (asset.length) {
      setAngel(asset[0].assetImage.url);
    }
  }, [asset]);

  // console.log('%c IM THE TIMER', 'font-size:20px;');
  useEffect(() => {
    // console.log('TIMER hellooo');
    startTimer("init");
  }, [props.prayers]);
  const { tz, setTz } = useContext(UserContext);
  const [dt, setdt] = useState(getPDdata("iso"));
  // const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userTimezone = moment.tz.guess();
  const [opts, setOpts] = useState({
    // endDate: '05/21/2019 18:42',
    // prefix: 'Left for Fajr',
    // cb
  });
  const [anim, setAnim] = useState([null]);

  const cb = () => {
    // console.log('expired callback', opts);
    const newmsg = opts.prefix ? opts.prefix.replace("Left", "Time") : "";
    setTimerdisplay(false);
    setUpcomingPrayers([]); // reset upcoming prayers as part of hot fixing blank timer display
    setTimeout(startTimer, 30000);
  };
  const [dismissMsg, setdismissMsg] = useState(["Dismiss"]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const resetAll = () => {
    setAnim([null, anim[1]]);
    setOpts({});
    setdt(getPDdata("iso"));
  };

  const startTimer = flg => {
    resetAll();
    let timeoptEl = document.querySelector(".timerComp time");
    if (timeoptEl) {
      let timeopt = timeoptEl.innerHTML;
      const currTime = timeopt.split(" ")[1];
      //   const abid = {
      //     Fajr: "02:59",
      //     Dhuhr: "04:37",
      //     Asr: "05:56",
      //     Maghrib: "06:46",
      //     Isha: "11:24"
      //   };
      // props.prayers
      const upcomingPs = Object.entries(props.prayers).reduce((all, item) => {
        let firstItemTime = parseInt(item[1].split(":")[0]),
          currTimeSet = parseInt(currTime.split(":")[0]),
          secondItemTime = parseInt(item[1].split(":")[1]),
          currTimeSecSet = parseInt(currTime.split(":")[1]);
        if (firstItemTime >= currTimeSet) {
          if (firstItemTime === currTimeSet) {
            // if (secondItemTime > currTimeSecSet) {
            all.length = 0; //we do not need 2 prayer times in the array within last 1 hour.
            //this logic is put in based on the assumption that times wil b in an increasing order in props.prayers
            //so clearing off array if there is any previous entry for picking up only the latest
            //eg : Maghrib: "18:46", Isha: "18:58" when current time is 18:59
            all.push(item);
            // }
          } else {
            all.push(item);
          }
        } else {
          if (currTimeSet - firstItemTime <= 1 && flg === "init") {
            all.length = 0; //we do not need 2 prayer times in the array within last 1 hour.
            //this logic is put in based on the assumption that times wil b in an increasing order in props.prayers
            //so clearing off array if there is any previous entry for picking up only the latest
            //eg : Maghrib: "18:46", Isha: "18:58" when current time is 18:59
            all.push(item);
          }
          // else if ((currTimeSecSet - secondItemTime) <= 59 && flg === 'init') {
          //     all.length=0; //we do not need 2 prayer times in the array within last 1 hour.this logic is put in based on the assumption that times wil b in an increasing order in props.prayers
          //     all.push(item);
          // }
        }
        return all;
      }, []);
      console.table("now", upcomingPs);
      // console.log('TZ', props.timezone)
      if (upcomingPs.length) {
        // console.log('%c IM THE ABID'+tz, 'font-size:20px;')
        setdismissMsg(["Dismiss"]);
        setTimerdisplay(true);
        timeopt = timeopt.replace(currTime, upcomingPs[0][1]); //upcomingPs[0][1]
        // console.log('timeopt', timeopt)
        setOpts({
          endDate: timeopt,
          prefix: "Left for " + upcomingPs[0][0],
          cb
        });
        setAnim([null, upcomingPs[0][0]]);
      } else {
        setTimerdisplay(false);
      }
      setUpcomingPrayers(upcomingPs);
    }
  };

  useEffect(() => {
    console.log("TIMER USEEFFECT");
    startTimer("init");
  }, []);

  const classes = useStyles();
  const [timerdisplay, setTimerdisplay] = useState(true);

  // hotfix for hiding blank timer display
  /*useEffect(() => {
    if (!upcomingPrayers.length) {
        setTimerdisplay(false);
    }
    else {
        // setTimerdisplay(true);
    }
  }, [upcomingPrayers]);*/

  useEffect(() => {
    console.log("TIMER USEEFFECT buhahaha");
    let spanEl = document.querySelector(
      ".timerComp .MuiSnackbarContent-message div span:nth-child(1)"
    );
    if (!timerdisplay && angel) {
      setAnchorEl(null);
      if (spanEl && spanEl.innerText === " time expired") {
        setAnim(() => [angel, anim[1]]);
      }
      setTimeout(() => {
        if (upcomingPrayers.length) { //hotfix for blank timer display after Isha
          setTimerdisplay(true);
        }
      }, 60000);
    } else {
      // if (!spanEl) {
      //     setTimerdisplay(false)
      // }
    }
  }, [timerdisplay, angel]);

  return (
    <>
      <Zoom in={timerdisplay}>
        <div
          className="timerComp"
          style={{
            margin: "0 10px",
            position: "static",
            top: "95px",
            zIndex: "1"
          }}
        >
          {userTimezone === tz && (
            <SnackbarContent
              align="left"
              className={classes.snackbar}
              message={
                opts.hasOwnProperty("endDate") && <Countdown options={opts} />
              }
              action={
                <DismissTimer
                  dismissMsg={dismissMsg}
                  setdismissMsg={setdismissMsg}
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                  timerdisplay={timerdisplay}
                  setTimerdisplay={setTimerdisplay}
                />
              }
              style={{
                backgroundColor: "#1976d2",
                display: timerdisplay ? "flex" : "none"
              }}
            />
          )}

          {/* {opts.hasOwnProperty('endDate') && <Countdown options={opts} />} */}
          <CurrentTime dt={dt} />
        </div>
      </Zoom>
      <Zoom in={!timerdisplay}>
        <PrayerTime
          anim={anim}
          setAnim={setAnim}
          travel={props.travel ? props.travel : false}
          location={props.location}
        />
      </Zoom>
    </>
  );
};

export default React.memo(Timer);

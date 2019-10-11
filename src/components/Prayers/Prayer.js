import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Lab from "../Lab/Lab";
import { UserContext } from "../../store/context/userContext";
import { useRenderCounts } from "../../hooks/api-hooks";
import Reminder from "../Reminder";
import { messaging } from "../../config/firebase";


const useStyles = makeStyles({
  card: {
    minWidth: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  buttonaction: {
    justifyContent: "center"
  }
});

const Prayer = props => {
  useRenderCounts("Prayer.js");
  const {
    pdata: { timings, date, meta },
    justPrayers
  } = props;
  const { setPage, tz } = useContext(UserContext);
  console.table(Object.entries(timings));
  const classes = useStyles();

  const [alpha, setAlpha] = React.useState(false);
  useEffect(() => {
    console.log("ALF", justPrayers);
  }, [justPrayers]);
  const handleAlpha = () => {
    setAlpha(true);
  };

  if (timings) {
    console.log("TIMINGS", timings);
    if (!alpha) {
      return (
        <>
          {Object.keys(timings).map((prayer, index) => {
            let splitdt = timings[prayer].split(" "),
              justtiming = splitdt[0],
              tzone = splitdt[1];

            console.log("TIMINGS JUST", justtiming);

            return (
              <Card className={classes.card} key={index}>
                <CardContent className="prayer-card">
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    style={{ minWidth: "60px", textAlign: "left" }}
                  >
                    {prayer}
                    <span
                      onClick={() => setPage("Lab")}
                      className="arab-month"
                      style={{ color: "#fff" }}
                    >
                      .
                    </span>
                  </Typography>
                  <Typography variant="h3" component="h2">
                    <strong style={{ color: "#039be5" }}>
                      {/* {timings[prayer]} */}
                      {justtiming}
                    </strong>
                  </Typography>

                  {/* <Typography className={classes.pos} color="textSecondary">
                                    {date.readable} 
                                    <span onClick={handleAlpha}>.</span>
                                    </Typography> */}
                  <div
                    style={{
                      minHeight: "60px",
                      minWidth:"55px",
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    
                    {(justPrayers.hasOwnProperty(prayer) && messaging) ? (
                      <Reminder prayer={prayer} time={justtiming} />
                    ) : (
                      <Typography
                        variant="body2"
                        component="p"
                        color="textSecondary"
                        style={{ fontSize: "11px" }}
                      >
                        {tzone}
                        {/* <br />
                                    {`"${date.hijri.weekday.en}"`*/}
                      </Typography>
                    )}
                  </div>
                </CardContent>

                {/* <CardActions className={classes.buttonaction}>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
              </Card>
            );
          })}
        </>
      );
    } else {
      // console.log('ABID', timings)
      return (
        <Lab
          timings={{
            Asr: "18:08",
            Dhuhr: "13:43",
            Fajr: "02:59",
            Imsak: "02:49",
            Isha: "23:36",
            Maghrib: "22:06",
            Midnight: "01:43",
            Sunrise: "05:20",
            Sunset: "22:06"
          }}
        />
      );
    }
  } else {
    return null;
  }
};

export default React.memo(Prayer);

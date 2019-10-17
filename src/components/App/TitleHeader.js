import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import ForwardIcon from "@material-ui/icons/FastForward";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import { RichText } from "prismic-reactjs";
import { UserContext } from "../../store/context/userContext";
import {
  PRISMIC_TITLE_BG,
  PRISMIC_SITEDESCRIPTION_DOC
} from "../../utils/constants";
import { useCmsAsset, useSiteTitle, useWhatsapplogger } from "../../hooks/api-hooks";

const TitleHeader = props => {
  const [log, setLogs] = useWhatsapplogger({});

  const sitetitle = useSiteTitle({
    docname: PRISMIC_SITEDESCRIPTION_DOC,
    options: {
      description: `An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day. "Worries end when Salah begins"`,
      textcolor: "#90949C",
      bgcolor: "#FAFAFA",
      showup: false
    }
  });
  const [bgimg, setBgimg] = useState("");
  const asset = useCmsAsset(PRISMIC_TITLE_BG);
  useEffect(() => {
    if (asset.length) {
      setBgimg(asset[0].assetImage.url);
    }
  }, [asset]);

  const {
    country: country_alt,
    region: region_alt,
    place: place_alt,
    referrer
  } = props;
  const [state, setState] = useState({
    activeStep: 0,
    place: place_alt,
    country: country_alt,
    region: region_alt
  });
  const [ffopen, setFfopen] = useState(false);

  const { page, setPage, visitor, setNotification, handleNav } = useContext(UserContext);

  useEffect(() => {
    if (country_alt && region_alt) {
      setFfopen(true);
    }
  }, [country_alt, region_alt, place_alt]);

  const handleFF = () => {
    //hack to fast forward login action..copied from setupstepper;
    props.finished({ ...state, activeStep: 3, finished: true, travel: false });
  };
  return (
    <>
      <Typography
        color="textPrimary"
        variant="h1"
        component="h1"
        align="left"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "auto 100%",
          backgroundColor: "#0c39e3",
          fontWeight: "bold",
          fontSize: "4rem",
          padding: "24px",
          color: "rgba(255, 255, 255, 0.7)",
          marginBottom: 0
        }}
        gutterBottom
      >
        Know Yo
        <span
          onClick={() => {
            console.log(
              `%c 👉 You are awesome '${visitor.username}'`,
              "font-size:25px;color:tomato;"
            );
            setNotification({
              'username-msg-data' : {greeting : `Hi '${visitor.username}' !`, message: `How are you today? You are awesome!`}
            });
            handleNav("setNotifymodal");
            setLogs({
              action: "UID",
              message: `just gotta know what his name is`
            })
          }}
        >
          u
        </span>
        r Prayer times{" "}
        {ffopen && (
          <ForwardIcon
            className="landing-navs"
            onClick={handleFF}
            fontSize="large"
            style={{
              color: "#fff",
              fontSize: "2.8rem",
              top: "5px",
              position: "relative"
            }}
          />
        )}
      </Typography>
      <Zoom in={sitetitle.showup}>
        <div
          style={{
            textAlign: "left",
            padding: "0 24px",
            fontStyle: "italic",
            fontSize: "0.9rem",
            marginTop: "10px",
            color: `${sitetitle.textcolor}`,
            background: `${sitetitle.bgcolor}`,
            minHeight: "80px"
          }}
        >
          <RichText render={sitetitle.description} />
        </div>
      </Zoom>

      {(page === "SetMeup" || page === "Apod") && (
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => setPage(referrer)}
          style={{ color: "white" }}
        >
          Back
        </Button>
      )}
    </>
  );
};

export default TitleHeader;

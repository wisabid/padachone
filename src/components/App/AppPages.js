import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  P_MENUS,
  PRISMIC_DYNAMIC_SOURCE_APP_TYPE
} from "../../utils/constants";
import {addEllipsis} from '../../utils';
import { UserContext } from "../../store/context/userContext";
import { useRenderCounts, useApod } from "../../hooks/api-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    // marginTop: "12px",
    padding: "15px",
    paddingTop: "0",
    position: "relative"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0px",
    background: "transparent"
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: "40%",
    paddingBottom: "5%",
    color: "#fff",
    height: "100%"
  },
  cardContent: {
    // flexGrow: 1,
    // position: 'relative',
    // bottom: '127px'
    paddingTop: "56.25%", // 16:9
    paddingTop: "40%",
    paddingBottom: "5%",
    color: "#fff",
    height: "100%"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  text: {
    minHeight: "83px",
    color: "#663399"
    // color: '#000'
  }
}));

const cards = P_MENUS;

function Album() {
  useRenderCounts("AppPages.js");
  const [landingGrid, loading, showfetching] = useApod();
  useEffect(() => {
    console.log("FETCHING", showfetching);
  }, [showfetching]);
  const classes = useStyles();
  const { handleNav, setPage } = useContext(UserContext);

  return (
    <React.Fragment>
      {/* <main> */}
      {/* Hero unit */}
      <Container className={classes.cardGrid} maxWidth="md">
        {loading && <LinearProgress />}
        {/* End hero unit */}
        {showfetching.show && (
          <small style={{ position: "absolute", left: "25%", color: "#000" }}>
            <i>
              <b>{showfetching.msg}</b>
            </i>
          </small>
        )}

        <Grid
          container
          spacing={1}
          style={{
            backgroundImage: `url(${landingGrid.bg})`,
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: `${landingGrid.bgColor}`,
            transition:
              "background-image, background-color,  background-position 1s ease-in-out",
            transitionDelay: "1s",
            transitionDuration: "1s",
            backgroundPosition: "0px 0px",
            // backgroundRepeat: 'repeat-x',
            animation: "animatedBackground 40s linear infinite",
            animationDirection: "alternate"
          }}
        >
          {cards.map((card, indx) => (
            <Grid
              item
              key={`${indx}-${card.page}`}
              xs={6}
              sm={6}
              md={4}
              style={{ padding: "0px", background: "transparent" }}
            >
              <Card className={classes.card}>
                <CardContent
                  className={`${classes.cardContent} ${card.page}`}
                  onClick={() =>
                    handleNav(card.page === "Home" ? "SetMeup" : card.page)
                  }
                >
                  {/* // <CardMedia
                  //   className={classes.cardMedia}
                  //   // image="https://source.unsplash.com/random"
                  //   image={''}
                  //   title="Image title"
                  //   onClick={() => handleNav(card.page === 'Home'?'SetMeup':card.page)}
                  // > */}
                  <Button
                    color="primary"
                    className={`${classes.text} landing-navs`}
                    style={{ animationDelay: `${indx}s` }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      style={{
                        fontWeight: "bold",
                        color: `${landingGrid.fontColor}`
                      }}
                    >
                      {card.label === "Home" ? "Set me up" : card.label}
                    </Typography>
                  </Button>
                  {/* // <Typography>
                    //   This is a media card. You can use this section to describe the content.
                    // </Typography> */}
                </CardContent>
                {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>                   */}
              </Card>
              {/* <GridListTile key={card}>
                  <img src="https://source.unsplash.com/random" alt="title" />
                  <GridListTileBar
                    title="{tile.title}"
                    subtitle={<span>by: Author</span>}
                    actionIcon={
                      <IconButton aria-label={`info about Title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile> */}
            </Grid>
          ))}
        </Grid>
        {landingGrid.type === PRISMIC_DYNAMIC_SOURCE_APP_TYPE && (
          <small
            style={{ textDecoration: "underline", fontStyle: "italic" }}
            onClick={() => setPage("Apod")}
          >
            <pre>{addEllipsis({word : landingGrid.title, maxlength : 40})}</pre>
          </small>
        )}
      </Container>
      {/* </main>      */}
    </React.Fragment>
  );
}

export default React.memo(Album);

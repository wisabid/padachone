import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useWhatsapplogger } from "../../hooks/api-hooks";

const useStyles = makeStyles({
  card: {
    // maxWidth: '100%',
    margin: "15px",
    textAlign: "left"
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [log, setLogs] = useWhatsapplogger({});

  const { url, title, hdurl, explanation, date, linkto } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button
          size="small"
          color="primary"
          onClick={}
        >
          Back
        </Button> */}
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
          <a
            onClick={() => setLogs({
              action: "APOD",
              message: `just clicked on Learn more on APOD`
            })}
            href={linkto}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#03a9f4" }}
          >
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

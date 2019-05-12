import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { EventEmitter } from 'events';
import Lab from '../Lab/Lab';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },    
    buttonaction: {
        justifyContent: 'center'
    }
  });

const Prayer = (props) => {
    const { pdata:{timings, date, meta} } = props;
    
    const classes = useStyles();

    const [alpha, setAlpha] = React.useState(false);

    const handleAlpha = () =>{
      setAlpha(true)
    }

    
    if (timings) {
        if (!alpha) {
            return (
                Object.keys(timings).map((prayer, index) => {
                    return (
                        <Card className={classes.card} key={index}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {prayer}
                                </Typography>
                                <Typography variant="h3" component="h2">
                                {timings[prayer]}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                {date.readable} ( {meta.timezone} 
                                <span onClick={handleAlpha}>)</span>
                                </Typography>
                                <Typography variant="body2" component="p">
                                {date.hijri.month.ar}
                                <br />
                                {`"${date.hijri.weekday.en}"`}
                                </Typography>
                            </CardContent>
                            {/* <CardActions className={classes.buttonaction}>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card> 
                    )
                })

                
            )
        }
        else {
            return (
                <Lab />
            )
        }
    }
    else {
        return null
    }
}

export default Prayer;
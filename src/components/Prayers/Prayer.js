import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Lab from '../Lab/Lab';


const useStyles = makeStyles({
    card: {
      minWidth: '100%',
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
    console.table(Object.entries(timings))
    const classes = useStyles();

    const [alpha, setAlpha] = React.useState(false);

    const handleAlpha = () =>{
      setAlpha(true)
    }

    
    
    if (timings) {
        if (!alpha) {
            return (
                <>
                {
                    Object.keys(timings).map((prayer, index) => {
                        return (
                            <Card className={classes.card} key={index}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize:'17px'}}>
                                    {prayer}<span onClick={handleAlpha} className="arab-month" style={{color:'#fff'}}>.</span>

                                    </Typography>
                                    <Typography variant="h3" component="h2">
                                    <strong style={{color:'#039be5'}}>{timings[prayer]}</strong>
                                    </Typography>
                                    {/* <Typography className={classes.pos} color="textSecondary">
                                    {date.readable} 
                                    <span onClick={handleAlpha}>.</span>
                                    </Typography> */}
                                    <Typography variant="body2" component="p" color="textSecondary">
                                        {date.hijri.month.ar}
                                    {/* <br />
                                    {`"${date.hijri.weekday.en}"`} */}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions className={classes.buttonaction}>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card> 
                        )
                    })
                }
                </>
            )
        }
        else {
            return (
                <Lab timings={timings} timezone={props.timezone}/>
            )
        }
    }
    else {
        return null
    }
}

export default React.memo(Prayer);
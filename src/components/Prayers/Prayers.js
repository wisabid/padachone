import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {usePrayer} from './api';


const Prayers = (props) => {
    const [data, setData] = usePrayer();
    console.log(data)
    debugger;
    const { classes } = {classes : {root : 'test'}};

    
    return (
        <>
        {(typeof data === "object" && Object.keys(data).length)
            ?data.data.map(item => {
                return (
                    <Paper className={classes.root} elevation={1} rounded style={{marginBottom:"10px" }}>
                        <Typography variant="h4" component="h4" gutterBottom>
                            {item.timings.Maghrib}
                        </Typography>
                        <Typography component="p">
                            {item.date.readable}
                        </Typography>
                    </Paper>
                )
            })
            :null

        }        
        </>
    )
}

export default Prayers;
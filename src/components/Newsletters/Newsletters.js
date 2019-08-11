import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link, RichText, Date} from 'prismic-reactjs';
import {UserContext} from '../../store/context/userContext';
import {PRISMIC_NEWSLETTER_DOC} from '../../utils/constants';
import './newsletters.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const {cmsContents} = useContext(UserContext)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const linkResolver = (doc) => {        
        return '/';
    }
  if (cmsContents) {
    return (
        <div className={classes.root}>
            {
                cmsContents.data[PRISMIC_NEWSLETTER_DOC].edges.map((item, index) => {
                    return (
                        <ExpansionPanel expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} key={index}>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography className={classes.heading}>{item.node.date}</Typography>
                            <Typography className={classes.secondaryHeading}>{RichText.asText(item.node.title)}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="nl-body"><RichText render={item.node.body} linkResolver={linkResolver} /></div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    
                    )
                })
            }
        
        </div>
    );
    }
    else {
        return (
            <h5>Loading...</h5>
        )
    }
}
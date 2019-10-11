import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../../store/context/userContext";
import { Link, RichText, Date } from "prismic-reactjs";

import "./newsletters.css";
import Accordion from "../Accordion";
import { PRISMIC_NEWSLETTER_DOC } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
}));

export default function ControlledExpansionPanels() {
  const { cmsContents } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  const linkResolver = doc => {
    return "/";
  };
  if (cmsContents) {
    return (
      <div className={classes.root}>
        {cmsContents.data[PRISMIC_NEWSLETTER_DOC].edges.map((item, index) => {
          return (
            <Accordion
              title={item.node.date}
              secondaryTitle={RichText.asText(item.node.title)}
              key={index}
              keyvalue={index}
              expanded={expanded} 
              setExpanded={setExpanded}
            >
              <div className="nl-body">
                <RichText render={item.node.body} linkResolver={linkResolver} />
              </div>
            </Accordion>
          );
        })}
      </div>
    );
  } else {
    return <h5>Loading...</h5>;
  }
}

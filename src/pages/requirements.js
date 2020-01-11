import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleRequirement from '../components/commons/requirements';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Requirements() {
  const classes = useStyles();

  return (
    <Layout>
    <SEO title="Requirements" />
    
    <List className={classes.root} className="RequirementsWrapper">
        <h2>Fulfil the following</h2>
        <SingleRequirement 
            classes={classes} 
            title="Content"
            content="Web Programming - Frontend(HTML, CSS, Vanilla JS, React) & Backend(RESTFul, NodeJS, Express, Python<Flask />)"
        />
        <SingleRequirement 
            classes={classes} 
            title="Target Audience"
            content="Beginners/Novice. Anybody who wants to be a software engineer and would like guidance/mentorship."
        />
        <SingleRequirement 
            classes={classes} 
            title="Duration"
            content="Approximately 6 months for a complete beginner. Duration depends on individual initial skill, learning curve and availability"
        />
        <SingleRequirement 
            classes={classes} 
            title="Requirements"
            content="A laptop/computer, internet, "
        />
        <SingleRequirement 
            classes={classes} 
            title="Come With ..."
            content="A positive and open mindset, lots of fun and positive energies."
        />
    </List>
  </Layout>
  );
}

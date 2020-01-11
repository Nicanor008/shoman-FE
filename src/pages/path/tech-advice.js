import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid, Paper, List, ListItem, ListItemText } from "@material-ui/core"

const ListItemLink = props => {
  return <ListItem button component="a" {...props} />
}

const ListItemTexts = ({ primary, secondary }) => {
  return <ListItemText primary={primary} secondary={secondary} />
}

const TechAdvice = () => (
  <Layout>
    <SEO title="Tech Advice" />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardComponent
            hint="Essential skills and relevant advice"
            title="Tech Advice"
            skills="The What | Why | How content"
            content="Everyday is a learning day in the career of a software engineers. Growth and adaptability is essential. Here, we 
                    emphasize on the soft skills you should develop as a software engineer. Communication | Team player | Adaptability 
                    | Growth mindset & Fixed mindset | Empathy | Quality & Quanity | Feedback | and many more ⬇️"
            actions=""
            link="/path/tech-advice"
          />
        </Grid>

        <Grid item md={6} style={{ paddingTop: "8%", paddingLeft: "9%" }}>
          Why Soft skills are important in a work place - Video
        </Grid>
      </Grid>

      <br />
      {/* <h4>Activities</h4> */}
      <Grid container spacing={3}>

      {/* feedback */}
        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15 }}>Feedback</h4>
            <ListItemLink
              href="https://medium.com/the-andela-way/can-i-ask-you-something-e8c0a0f18bb7"
              target="blank"
            >
              <ListItemTexts
                primary="ASK Feedback"
                secondary="Feedback is very important for growth and your personal & professional success"
              />
            </ListItemLink>
            <ListItemLink
              href="https://devblogs.microsoft.com/bharry/the-importance-of-feedback-in-software-development/"
              target="blank"
            >
              <ListItemTexts
                primary="Importance of Feedback in Software Development"
                secondary="Would you really need or give feedback in your career choice?"
              />
            </ListItemLink>
          </List>
        </Grid>

        {/* growth */}
        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15 }}>Growth</h4>
            <ListItemLink
              href="https://www.youtube.com/watch?v=KUWn_TJTrnU"
              target="blank"
            >
              <ListItemTexts
                primary="Growth vs Fixed mindset"
                secondary="Develop the right mindset throughout your life."
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.freecodecamp.org/news/how-to-become-an-effective-software-engineer-b2d25b588bc8/"
              target="blank"
            >
              <ListItemTexts
                primary="How to become an effective software engineer"
                secondary="Whether starting or already a professional, you need growth mindset"
              />
            </ListItemLink>
          </List>
        </Grid>
      </Grid>

      <Grid container spacing={3}>

      {/* feedback */}
        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15 }}>Communication</h4>
            <ListItemLink
              href="https://www.toolshero.com/communication-skills/7cs-of-communication/"
              target="blank"
            >
              <ListItemTexts
                primary="The 7 C's of Communication"
                secondary="Clear | Correct | Complete | Concrete | Consice | Consideration | Courteous"
              />
            </ListItemLink>
            <ListItemLink
              href="https://hackernoon.com/communicating-in-software-development-f3434c52eb23"
              target="blank"
            >
              <ListItemTexts
                primary="Communicating in Software Development"
                secondary="Leverage all tools to communicate effectively"
              />
            </ListItemLink>
          </List>
        </Grid>

        {/* growth */}
        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15 }}>Collaboration</h4>
            <ListItemLink
              href="https://steelkiwi.com/blog/collaboration-is-a-key-to-project-success/"
              target="blank"
            >
              <ListItemTexts
                primary="Effective Collaboration"
                secondary="Collaboration is vital for a successful software development"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.youtube.com/watch?v=DYLSkySSF0I"
              target="blank"
            >
              <ListItemTexts
                primary="How Designers, software engineers, project managers work together"
                secondary="Different roles, different people but same product in development"
              />
            </ListItemLink>
          </List>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default TechAdvice

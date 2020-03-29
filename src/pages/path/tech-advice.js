import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid, List, ListItem, ListItemText } from "@material-ui/core"

import "../../components/commons/path.scss"

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
            <h4 style={{ margin: 0, paddingLeft:15, fontWeight:"bolder" }}>Feedback</h4>
            <ListItemLink
              href="https://medium.com/the-andela-way/can-i-ask-you-something-e8c0a0f18bb7"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="ASK Feedback"
                secondary="Feedback is very important for growth and your personal & professional success"
              />
            </ListItemLink>
            <ListItemLink
              href="https://devblogs.microsoft.com/bharry/the-importance-of-feedback-in-software-development/"
              target="blank"
              className="techAdviceItemTitle"
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
            <h4 style={{ margin: 0, paddingLeft:15, fontWeight:"bolder" }}>Growth</h4>
            <ListItemLink
              href="https://www.youtube.com/watch?v=KUWn_TJTrnU"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Growth vs Fixed mindset"
                secondary="Develop the right mindset throughout your life."
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.freecodecamp.org/news/how-to-become-an-effective-software-engineer-b2d25b588bc8/"
              target="blank"
              className="techAdviceItemTitle"
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
            <h4 style={{ margin: 0, paddingLeft:15, fontWeight:"bolder" }}>Communication</h4>
            <ListItemLink
              href="https://www.toolshero.com/communication-skills/7cs-of-communication/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="The 7 C's of Communication"
                secondary="Clear | Correct | Complete | Concrete | Consice | Consideration | Courteous"
              />
            </ListItemLink>
            <ListItemLink
              href="https://hackernoon.com/communicating-in-software-development-f3434c52eb23"
              target="blank"
              className="techAdviceItemTitle"
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
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Effective Collaboration"
                secondary="Collaboration is vital for a successful software development"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.youtube.com/watch?v=DYLSkySSF0I"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="How Designers, software engineers, project managers work together"
                secondary="Different roles, different people but same product in development"
              />
            </ListItemLink>
          </List>
        </Grid>
      
      {/* Self-taught */}
      <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15, fontWeight:"bolder" }}>Self Taught Developers' Stories</h4>
            <ListItemLink
              href="https://www.youtube.com/watch?v=62tsiY5j4_0"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Andy Sterkowitz Story as a self-taught Software Developer"
                secondary="You tube has a bunch of these stories, just search."
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.freecodecamp.org/news/inspirational-success-stories-from-self-taught-web-developers-4f6f375cf17d/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Lessons from 7 self-taught Coders"
                secondary="Commit | Structure | Build | Be Bold | Network | Make it Work | What's in Store for you"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.fullstackpython.com/blog/become-successful-self-taught-software-developer.html"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="How to become a Self-Taught Software Developer"
                secondary="Relevant Advice from just passion to a job as a software developer"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.freecodecamp.org/news/what-ive-learned-six-months-into-my-first-job-as-a-self-taught-software-engineer-516b0703e86/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Lessons learnt in 6 months into the 1st job as a self-taught Software Engineer"
                secondary="Read on Austin Tackaberry Story and the lessons he learnt"
              />
            </ListItemLink>
          </List>
        </Grid>


        {/* Misc */}
        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15, fontWeight:"bolder" }}>In One way or Another, You'll Need This</h4>
            <ListItemLink
              href="https://www.giftegwuenu.com/the-art-of-googling/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="The Art Of Googling"
                secondary="As a developer, you'll really on search engines a lot, you should master how to search what you looking for"
              />
            </ListItemLink>
            <ListItemLink
              href="https://dev.to/ladybug/three-tips-for-managing-impostor-syndrome-2f14"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="3 tips to managing Imposter Syndrom"
                secondary="Read on Dev.to or listen to Ladybug podcast"
              />
            </ListItemLink>
            <ListItemLink
              href="https://medium.com/learn-love-code/developers-how-to-overcome-imposter-syndrome-48edee803cf4"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Developers: How to Overcome Imposter Syndrome"
                secondary="Get a Mentor | Peer Pair | Be curious| Practice | Accept"
              />
            </ListItemLink>
            <ListItemLink
              href="https://codingwithempathy.com/2016/04/26/the-proactive-software-developer/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="The Proactive Software Developer"
                secondary="Why do you really need a proactive mindset. What's the difference between Proactive and Reactive Behaviour."
              />
            </ListItemLink>
          </List>
        </Grid>

        {/* Beginner sites resources */}
        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15 }}>Useful Sites To get You Started</h4>
            <ListItemLink
              href="https://www.freecodecamp.org/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="FreeCodeCamp.org"
                secondary="Learn to Code | Build Projects | Earn a certification"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.w3schools.com/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="W3Schools"
                secondary="Tutorials | References | Examples | Exercises - Try It Yourself"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.codecademy.com/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Code Academy"
                secondary="Access both free and premium courses"
              />
            </ListItemLink>
            <ListItemLink
              href="https://www.w3schools.com/"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Solo Learn"
                secondary="Mobile App and Web based tutorials and code playground."
              />
            </ListItemLink>
            <ListItemLink
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Udemy, Udacity, Google Tech Guide, Tutorials Point, You tube"
                secondary="There are quite a bunch of sites to get you started. Pick one and focus on it!!!"
              className="techAdviceItemTitle"
              />
            </ListItemLink>
          </List>
        </Grid>

        <Grid item md={6}>
          <List component="nav" style={{}} className="AdviceWrapper">
            <h4 style={{ margin: 0, paddingLeft:15 }}>Learning Resources</h4>
            <ListItemLink
              href="https://www.frontendmentor.io/resources"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Frontend Mentor Resources"
                secondary="A list of best learning resources(All Computer Science concepts)"
              />
            </ListItemLink>
            <ListItemLink
              href="https://github.com/Nicanor008/33-js-concepts"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="33 JavaScript Concepts"
                secondary="33 concepts every JS developer should know"
              />
            </ListItemLink>
            <ListItemLink
              href="https://github.com/Nicanor008/app-ideas"
              target="blank"
              className="techAdviceItemTitle"
            >
              <ListItemTexts
                primary="Project ideas(Beginner, intermediate & advanced)"
                secondary="Utilise the already created user stories to build your projects portfolio"
              />
            </ListItemLink>
          </List>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default TechAdvice

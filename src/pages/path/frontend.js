import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import ListData from "../../components/cards/listData"

const HomePage = () => (
  <Layout>
    <SEO title="Path" />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardComponent
            hint="UI/UX"
            title="Front-End"
            skills="HTML | CSS | JavaScript"
            content="You enjoy creating and thinking like a user. We will create user innterfaces that attracts users"
            actions=""
            link="/path/frontend"
          />
        </Grid>

        <Grid item md={6} style={{paddingTop:"8%", paddingLeft:"9%"}}>
          A day in life as a frontend engineer Video
        </Grid>
      </Grid>
      <br />
      <h4>Activities</h4>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <ListData
            subTitle="Content"
            data={[
              // {id: Math.random()},
              { content: "Version Control(git) - enhances teamwork" },
              { content: "HTML & HTML5 - markup language" },
              {
                content:
                  "CSS & CSS3, FlexBox - let's style beautiful web pages",
              },
              {
                content:
                  "JavaScript(Vanilla JS) - From syntax to Functional & OOP javascript programming",
              },
              { content: "Fetch API - http(s) call" },
              {
                content:
                  "ES6 JS code - Async/await, arrow functions, hoisting, closures",
              },
              {
                content:
                  "Test Driven Development - Mocha, Chai, Jest, Jasmine, etc",
              },
              {
                content:
                  "Framework/library(optional) - React (for now) (learning a framework/library is and will not be our goal, but at the end you'll be doing awesome stuff in ReactJS)",
              },
            ]}
          />
        </Grid>
        <Grid item md={4}>
          <ListData
            subTitle="Projects"
            data={[
              // {id: Math.random()},
              {
                content:
                  "Simple & Scientific Calculator - understand the basics and advance concepts of JavaScript",
              },
              {
                content:
                  "Gallery App - keep images on a beatifully made app(focuses on CSS proficiency)",
              },
              { content: "Todo App - Perfect ES6 skills & Test development" },
              {
                content:
                  "Weather App - Perfect your JS & CSS skills while using Fetch API",
              },
              {
                content:
                  "Meet up Planner - Management various meet ups - Combination of all skills",
              },
              { content: "Sendit App - An app to send parcels - Final App" },
            ]}
          />
        </Grid>
        <Grid item md={4}>
          <ListData
            subTitle="What Success Looks"
            data={[
              // {id: Math.random()},
              {
                content:
                  "Create good user interfaces that meets the required user experience. Follows the right coding conventions.",
              },
              {
                content:
                  "Work as a Frontend Engineer/developer, QA engineer, UI/UX designer, software engineer/developer jobs",
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default HomePage

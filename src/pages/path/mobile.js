import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import ListData from "../../components/cards/listData"

const Mobile = () => (
  <Layout>
    <SEO title="Mobile" />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardComponent
            hint="Android | PWA | IOS | Native"
            title="Mobile Applications Developer"
            skills="Android | iPhone | All Phones actually"
            content="Creating Mobile user intefaces. Can also create the backend "
            actions=""
            link="/path/mobile"
          />
        </Grid>

        <Grid item md={6} style={{paddingTop:"8%", paddingLeft:"9%"}}>
          <a href="https://www.youtube.com/watch?v=ulSxrbaj5rs">A day in life as a Mobile Developer</a>
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
              { content: "Mobile Visual design" },
              {
                content: "Styling mobile apps - XML",
              },
              {
                content: "Interactional design & development<Logic />",
              },
              { content: "Executing http(s) call" },
              {
                content: "Utilizing mobile resources e.g. camera, location",
              },
              {
                content:
                  "Test Driven Development",
              }
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
                  "Simple & Scientific Calculator - understand the basics and advance concepts of mobile programming",
              },
              {
                content:
                  "Gallery App - keep images on a beatifully made app(focuses on CSS proficiency)",
              },
              { content: "Todo App -  Advanced Programming skills" },
              {
                content:
                  "Weather App - Perfect your coding skills with HTTP calls",
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
                  "Work as a Mobile designer, Mobile Apps Developer, Android/IOS/Native developer, QA engineer, UI/UX designer, software engineer/developer jobs",
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default Mobile

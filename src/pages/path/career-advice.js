import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import CareerProgress from "../../images/careerProgress.svg"

const CareerAdvicePage = () => (
  <Layout>
    <SEO title="Path" />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardComponent
            hint="Overcome Interview fatigue"
            title="Career Advice"
            skills="CV & Resume Coaching"
            content="Explore how to craft the right CV/Resume content | Skills Assessment | Help on job hunting"
            actions=""
            link="/path/career-advice"
          />
        </Grid>
        <Grid item md={6} className="CareerProgressImg">
          <br />
          <center>
            <img src={CareerProgress} alt="here" width="250" />
          </center>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default CareerAdvicePage

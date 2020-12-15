import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import VideoInLine from "../../components/paths/videoInLine"

const CareerAdvicePage = () => (
  <Layout>
    <SEO
      title="Path"
      description="Explore how to craft the right CV/Resume content | Skills Assessment | Help on job hunting"
    />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6} className="pathDescription">
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
          <VideoInLine
            url="https://www.youtube.com/embed/_lJarNEjT94"
            title="Career Advice"
          />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default CareerAdvicePage

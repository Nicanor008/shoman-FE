import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid, Paper } from "@material-ui/core"

const TechAdvice = () => (
  <Layout>
    <SEO title="Tech Advice" />
    <div style={{padding: `2.504rem 5.4875rem 1.45rem`}}>
    <CardComponent
      hint="Essential skills and relevant advice"
      title="Tech Advice"
      skills="The What | Why | How content"
      content="Everyday is a learning day in the career of a software engineers. Growth and adaptability is essential."
      actions=""
      link="/path/tech-advice"
    />
    <br />
    <h4>Activities</h4>
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper style={{ padding: "15px 0", backgroundColor: "lightgrey" }}>
          <center>Links to be fetched and updated from the backend</center>
        </Paper>
      </Grid>
    </Grid>
    </div>
  </Layout>
)

export default TechAdvice

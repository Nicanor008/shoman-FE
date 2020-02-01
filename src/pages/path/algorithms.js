import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid, Paper } from "@material-ui/core"

const AlgorithmsPage = () => (
  <Layout>
    <SEO title="Algorithms" />
    <div className="homePageWrapper">
      <CardComponent
        hint="Lists | Graph | Heaps| Sorting & Searching | etc"
        title="Data Structures & Algorithms"
        skills="DSA"
        content="Algorithms and data structures are the core requirements of every project. Also interview tips given."
        actions=""
        link="/path/algorithms"
      />
      <br />
      <h4>Activities</h4>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Paper style={{ padding: "15px 0", backgroundColor: "lightgrey" }}>
            <center>
              The <b>Path</b> under this section is being developed and will be
              published soon.
            </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default AlgorithmsPage

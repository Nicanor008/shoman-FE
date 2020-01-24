import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/apply.scss"
import { Link, Grid } from "@material-ui/core"

function HomePage() {
  return (
    <Layout>
      <SEO title="Apply" />
      <div className="applyWrapper">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <center>
            Video description on importance of this programme
          </center>
        </Grid>
        <Grid item md={4}>
        <center>
          <Link
            href="https://docs.google.com/forms/d/1C0MMYr1dPG0n1wAao3FQqgkVJpUjZHJRb3eP3kPo2f8/edit"
            rel="noopener"
            target="_blank"
            className="ApplyHereButton"
            style={{color:"white"}}
          >
            Apply Here
          </Link>
        </center>
        </Grid>
      </Grid>
      </div>
    </Layout>
  )
}

export default HomePage

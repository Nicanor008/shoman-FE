import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/apply.scss"
import { Link, Grid, List } from "@material-ui/core"
import SingleRequirement from "../components/commons/requirements"

function HomePage() {
  return (
    <Layout>
      <SEO title="Apply" />
      <div className="applyWrapper">
        <Grid container spacing={1}>
          <Grid item md={6}>
            <List>
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;What Should you Know</h3>
              <SingleRequirement title="View Our About Page to understand Shoman Mentorship Program" />
              <SingleRequirement title="This is a serious Program and you MUST be committed to it. If you would like to be mentored, this can be organised, 
                                        send us an email" />
            </List>
          </Grid>
          <Grid item md={4} className="ApplyHereButtonWrapper">
            <center>
              <Link
                href="https://docs.google.com/forms/d/1C0MMYr1dPG0n1wAao3FQqgkVJpUjZHJRb3eP3kPo2f8/edit"
                rel="noopener"
                target="_blank"
                className="ApplyHereButton"
                style={{ color: "white"}}
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

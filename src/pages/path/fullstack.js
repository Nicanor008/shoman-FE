import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"

const FullStack = () => (
  <Layout>
    <SEO title="Path" />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardComponent
            hint="HTML | CSS | JavaScript | Python"
            title="FullStack Developer"
            skills="Frontend | Backend"
            content="A fullstack developer does both a frontend and backend software development. Sounds like a superhero, right?
                    You implement the project logic on the backend and then implement the visual part as what the user will be 
                    able to interact with"
            actions=""
            link="/path/fullstack"
          />
        </Grid>

        <Grid item md={6} style={{paddingTop:"8%", paddingLeft:"9%"}}>
          <a href="https://youtu.be/pkdgVYehiTE">A day in life as a FullStack, FrontEnd or Backend Developer</a>
        </Grid>
      </Grid>
      <br />
      <h4>You have to be really good in both of this <span role="img" aria-label="Surprised">🙄</span></h4>
      <Grid container spacing={10}>
        <Grid item md={6}>
          <CardComponent
            hint="UI/UX"
            title="Front-End Developer"
            skills="HTML | CSS | JavaScript"
            content="You enjoy creating and thinking like a user. We will create user innterfaces that attracts users."
            actions=""
            link="/path/frontend"
            hasBg="true"
          />
        </Grid>
        <Grid item md={6}>
          <CardComponent
            hint="Product Logic (RESTFul | GraphQL)"
            title="Back-End Developer"
            skills="JavaScript | Python"
            content="Work on the business and data logic of the project, with the interaction with the different databases."
            actions=""
            hasBg="true"
            link="/path/backend"
          />
        </Grid>
        </Grid>
    </div>
  </Layout>
)

export default FullStack

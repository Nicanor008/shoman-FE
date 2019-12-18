import React from "react"
import { Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardComponent from "../components/cards"
import HomeDescription from "../components/commons/home/description"

const IndexPage = () => (
  <Layout>
    <SEO title="Shoman" />

    <HomeDescription  />

    <div style={{padding: `2.504rem 2.4875rem 1.45rem`,}}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <CardComponent
            hint="UI/UX"
            title="Front-End"
            skills="HTML | CSS | JavaScript"
            content="You enjoy creating and thinking like a user. We will create user innterfaces that attracts users."
            actions=""
            link="/path/frontend"
          />
        </Grid>
        <Grid item md={3}>
          <CardComponent
            hint="business and data logic (REST | GraphQL)"
            title="Back-End"
            skills="JavaScript | Python"
            content="Work on the business and data logic of the project, with the interaction with the different databases."
            actions=""
            link="/path/backend"
          />
        </Grid>
        <Grid item md={3}>
          <CardComponent
            hint="Algorithms and data structures"
            title="Algorithms"
            skills="Arrays | Lists | Hash tables | etc"
            content="Algorithms and data structures are the core requirements of every project. Also interview tips given."
            actions=""
            link="/path/algorithms"
          />
        </Grid>
        <Grid item md={3}>
          <CardComponent
            hint="Essential skills and relevant advice"
            title="Tech Advice"
            skills="The What | Why | How content"
            content="Everyday is a learning day in the career of a software engineers. Growth and adaptability is essential."
            actions=""
            link="/path/tech-advice"
          />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardComponent from "../components/cards"
import HomeDescription from "../components/commons/home/description"
import MentorshipPurpose from "../components/commons/home/purpose"
import Mission from "../components/commons/home/mission"
import { SubContent } from "../components/commons/home/subContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Shoman" />

    {/* description */}
    <HomeDescription
      title="FullStack Mentorship"
      content={<SubContent />}
    />

    <br />
    <br />
    <br />

    {/* paths */}
    <div className="homePageWrapper">
      <Grid container spacing={10}>
        <Grid item md={4}>
          <CardComponent
            hint="UI/UX"
            title="Front-End"
            skills="HTML | CSS | JavaScript"
            content="You enjoy creating and thinking like a user. We will create user innterfaces that attracts users."
            actions=""
            link="/path/frontend"
          />
        </Grid>
        <Grid item md={4}>
          <CardComponent
            hint="Product Logic (REST | GraphQL)"
            title="Back-End"
            skills="JavaScript | Python"
            content="Work on the business and data logic of the project, with the interaction with the different databases."
            actions=""
            link="/path/backend"
          />
        </Grid>
        {/* <Grid item md={3}>
          <CardComponent
            hint="Algorithms and data structures"
            title="Algorithms"
            skills="Arrays | Lists | Hash tables | etc"
            content="Algorithms and data structures are the core requirements of every project. Also interview tips given."
            actions=""
            link="/path/algorithms"
          />
        </Grid> */}
        <Grid item md={4}>
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

    <br />
    <br />
    <br />

    {/* purpose */}
    <MentorshipPurpose />

    {/* mission */}
    <Mission />
  </Layout>
)

export default IndexPage

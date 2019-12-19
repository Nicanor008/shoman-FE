import React from "react"
import { Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardComponent from "../components/cards"
import HomeDescription from "../components/commons/home/description"
import MentorshipPurpose from "../components/commons/home/purpose"
import Mission from "../components/commons/home/mission"
import { SubContent } from "../components/commons/home/subContent"

const contentDesc = () => {
  return (
    <p>
      An{" "}
      <b>
        Online mentorship{" "}
        <span role="img" aria-label="Shake Hands">
          🤝
        </span>{" "}
        program{" "}
      </b>{" "}
      focused on sharing tech Knowledge between mentor and mentees. We believe
      in the Knowledge we have and would like it to benefit others too. We
      currently focus on Web development(backend & Frontend). Check back for
      other areas in the near future{" "}
      <span role="img" aria-label="We Move">
        🚀
      </span>
      .
    </p>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Shoman" />

    {/* description */}
    <HomeDescription
      title="Focused on Knowledge Sharing"
      content={<SubContent />}
    />

    <br />
    <br />
    <br />

    {/* paths */}
    <div style={{ padding: `2.504rem 5.4875rem 1.45rem` }}>
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
            hint="Product Logic (REST | GraphQL)"
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

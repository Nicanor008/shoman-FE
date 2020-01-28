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
    <SEO title="Shoman Mentorship" />

    {/* description */}
    <HomeDescription
      title="Tech Mentorship"
      durationDescription="Starts 12th Feb"
      content={<SubContent />}
    />

    <br />
    <br />
    <br />

    {/* paths */}
    <div className="homePageWrapper">
      <Grid container spacing={5}>
        <Grid item md={4}>
          <CardComponent
            hint="HTML | CSS | JavaScript | Python"
            title="FullStack"
            skills="Frontend | Backend"
            // content="As a frontend developer, create user interfaces using creative design thinking. Backend developers work on the business
            //           and data logic of the application."
            actions=""
            link="/path/fullstack"
          />
        </Grid>
        <Grid item md={4}>
          <CardComponent
            hint="Android | PWA | IOS | Native"
            title="Mobile Developer"
            skills="Android | iPhone"
            // content="Solve user problems by creating mobile applications that meet mobile user experience."
            actions=""
            link="/path/mobile"
          />
        </Grid>
        <Grid item md={4}>
          <CardComponent
            hint="QA"
            title="Quality Assuarance"
            skills="QA | Quality Control"
            actions=""
            link="/path/backend"
          />
        </Grid>
      </Grid>

      <br /><br />

      {/* row 2 */}
      <Grid container spacing={5}>
        <Grid item md={4}>
          <CardComponent
            hint="Lists | Graph | Heaps| Sorting & Searching | etc"
            title="Data Structures & Algorithms"
            skills="DSA"
            actions=""
            link="/path/fullstack"
          />
        </Grid>
        <Grid item md={4}>
        <CardComponent
            hint="Essential soft skills and tech advice"
            title="Tech Advice"
            skills="The What | Why | How "
            // content="Everyday is a learning day in the career of a software engineers. Growth and adaptability is essential. Read top selected articles."
            actions=""
            link="/path/tech-advice"
          />
        </Grid>
        <Grid item md={4}>
          <CardComponent
            hint="Overcome Interview fatigue"
            title="Career Advice"
            skills="CV & Resume Coaching"
            actions=""
            link="/path/backend"
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

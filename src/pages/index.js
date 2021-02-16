import React from "react"
import { Container } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeDescription from "../components/commons/home/description"
import MentorshipPurpose from "../components/commons/home/purpose"
// import Mission from "../components/commons/home/mission"
import { SubContent } from "../components/commons/home/subContent"

import '../components/css/landing_page.scss'
import AllPaths from "../components/paths/allPaths"

const IndexPage = () => (
  <Layout requireAuth={false}>
    <SEO title="Shoman Mentorship" />

    {/* description */}
    <HomeDescription
      title="Software Development Mentorship"
      durationDescription="Cohort 2 in Progress."
      startedDate={new Date("2021-02-05T21:00:00.000+00:00") > new Date() ? 'Cohort 2 applications open' : 'Applications closed. Application in review. Cohort 2 starts 22nd Feb 2021' }
      content={<SubContent />}
    />

    {/* paths */}
    <Container className="homePageWrapper allPaths">
      <AllPaths />
    </Container>

    {/* purpose */}
    <MentorshipPurpose />

    {/* mission */}
    {/* <Mission /> */}
  </Layout>
)

export default IndexPage

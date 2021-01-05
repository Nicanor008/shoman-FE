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
  <Layout>
    <SEO title="Shoman Mentorship" />

    {/* description */}
    <HomeDescription
      title="Software Development Mentorship"
      durationDescription="Cohort 2 in Progress."
      startedDate="Cohort 2 applications open"
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

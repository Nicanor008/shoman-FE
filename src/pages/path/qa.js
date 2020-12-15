import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import VideoInLine from "../../components/paths/videoInLine"

const QAPage = () => (
  <Layout>
    <SEO
      title="QA Engineer"
      description="QA is a way of preventing mistakes and defects in manufactured products and avoiding problems 
                    when delivering products or services to customers; comprises administrative and procedural activities 
                    implemented in a quality system so that requirements and goals for a product, service or activity will 
                    be fulfilled."
    />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6} className="pathDescription">
          <CardComponent
            title="Quality Assuarance Engineer(QA)"
            content="QA is a way of preventing mistakes and defects in manufactured products and avoiding problems 
                    when delivering products or services to customers; comprises administrative and procedural activities 
                    implemented in a quality system so that requirements and goals for a product, service or activity will 
                    be fulfilled. It is the systematic measurement, comparison with a standard, monitoring of processes 
                    and an associated feedback loop that confers error prevention."
            actions=""
            link="/path/qa"
          />
          <br />
          <br />
          <a
            href="https://blog.devmountain.com/a-day-in-the-life-of-a-qa-engineer/"
            target="_blank"
            rel="noreferrer noopener"
          >
            A day in life as a QA Engineer/Tester Article
          </a>
        </Grid>

        <Grid item md={6} style={{ paddingLeft: "9%" }}>
          <VideoInLine
            url="https://www.youtube.com/embed/M0ULllPNdis"
            title="QA Engineer"
          />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default QAPage

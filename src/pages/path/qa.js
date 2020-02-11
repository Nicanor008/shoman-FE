import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"

const QAPage = () => (
  <Layout>
    <SEO title="Path" />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <CardComponent
            // hint="business and data logic (REST | GraphQL)"
            title="Quality Assuarance Engineer(QA)"
            // skills="JavaScript | Python "
            content="QA is a way of preventing mistakes and defects in manufactured products and avoiding problems 
                    when delivering products or services to customers; comprises administrative and procedural activities 
                    implemented in a quality system so that requirements and goals for a product, service or activity will 
                    be fulfilled. It is the systematic measurement, comparison with a standard, monitoring of processes 
                    and an associated feedback loop that confers error prevention."
            actions=""
            link="/path/qa"
          />
        </Grid>

        <Grid item md={6} style={{ paddingTop: "8%", paddingLeft: "9%" }}>
          <a href="https://blog.devmountain.com/a-day-in-the-life-of-a-qa-engineer/">A day in life as a QA Engineer/Tester</a> 
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default QAPage

import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import VideoInLine from "../../components/paths/videoInLine"

const AlgorithmsPage = () => (
  <Layout>
    <SEO
      title="Algorithms"
      description="Algorithms and data structures are the core requirements of every project. A project can't exists without data. 
                    Understanding data structures from basic to advanced will help developers solve daily engineering problems and create 
                    world class solutions."
    />
    <div className="homePageWrapper">
      <Grid container spacing={4}>
        <Grid item md={6} className="pathDescription">
          <CardComponent
            hint="Lists | Graph | Heaps| Sorting & Searching | etc"
            title="Data Structures & Algorithms"
            skills="DSA"
            content="Algorithms and data structures are the core requirements of every project. A project can't exists without data. 
                    Understanding data structures from basic to advanced will help developers solve daily engineering problems and create 
                    world class solutions. At Shoman, we guide mentees to understand the core concepts of DSA and how to approach problems in coding."
            actions=""
            link="/path/algorithms"
          />
        </Grid>
        <Grid item md={6} style={{ paddingLeft: "9%" }}>
          <VideoInLine
            url="https://www.youtube.com/embed/RBSGKlAvoiM"
            title="Data Structures and Algorithms"
          />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default AlgorithmsPage

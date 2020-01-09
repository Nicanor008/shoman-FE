import React from "react"
import { Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardComponent from "../components/cards"
import HomeDescription from "../components/commons/home/description"
import { PathSubContent } from "../components/commons/home/subContent"
import ListData from "../components/cards/listData"
import PairProgramming from "../images/pairProgramming.svg"

const HomePage = () => (
  <Layout>
    <SEO title="Shoman" />

    {/* description */}
    <HomeDescription
      title="Front-End Developer Path"
      content={<PathSubContent />}
    />

    <br />
    <br />
    <br />

    {/* paths */}
    <div className="homePageWrapper">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <CardComponent
            title="A day in life as a FrontEnd Engineer"
            content="Make a video description or write an article describing the above"
            actions=""
          />
        </Grid>
        <Grid item md={6}>
          <ListData
            subTitle="Show Progress here"
            data={[
              // {id: Math.random()},
              { content: "HTML & HTML5 - markup language" },
            ]}
          />
        </Grid>
      </Grid>
    </div>

    <br />
    <br />
    <br />

    <Grid container className="homeGridWrapper" spacing={4}>
      <Grid container md={8} spacing={3}>

      {/* row 1 on a grid */}
        <Grid item md={6}>
          <h3>Article 1</h3>
          <p>
            You Don't have to know everything. You going to work only on one
            path, preferably what you would like to do in your Career. Select
            carefully. Follow you <b>passion</b>.
          </p>
        </Grid>
        <Grid item md={6}>
          <h3>Article 2</h3>
          <p>
            You Don't have to know everything. You going to work only on one
            path, preferably what you would like to do in your Career. Select
            carefully. Follow you <b>passion</b>.
          </p>
        </Grid>

        {/* row 2 on a grid */}
        <Grid item md={6}>
          <h3>Article 3</h3>
          <p>
            You Don't have to know everything. You going to work only on one
            path, preferably what you would like to do in your Career. Select
            carefully. Follow you <b>passion</b>.
          </p>
        </Grid>
        <Grid item md={6}>
          <h3>Article 4</h3>
          <p>
            You Don't have to know everything. You going to work only on one
            path, preferably what you would like to do in your Career. Select
            carefully. Follow you <b>passion</b>.
          </p>
        </Grid>
      </Grid>
      &nbsp;&nbsp;
      <Grid item md={4}>
        <img
          src={PairProgramming}
          alt="df"
          width="600"
          className="pathImageText"
        />
      </Grid>
    </Grid>
  </Layout>
)

export default HomePage

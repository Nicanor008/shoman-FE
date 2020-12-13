import { Grid } from "@material-ui/core"
import React from "react"
import CardComponent from "../cards"

function AllPaths() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item md={4}>
          <CardComponent
            hint="HTML | CSS | JavaScript | Python"
            title="FullStack"
            skills="Frontend | Backend"
            actions=""
            link="/path/fullstack"
          />
        </Grid>
        <Grid item md={4}>
          <CardComponent
            hint="Android | PWA | IOS | Native"
            title="Mobile Developer"
            skills="Android | iPhone | windows"
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
            link="/path/qa"
          />
        </Grid>
      </Grid>

      <br />
      <br />

      {/* row 2 */}
      <Grid container spacing={5}>
        <Grid item md={4}>
          <CardComponent
            hint="Lists | Graph | Heaps| Sorting & Searching | etc"
            title="Data Structures & Algorithms"
            skills="DSA"
            actions=""
            link="/path/algorithms"
          />
        </Grid>
        <Grid item md={4}>
          <CardComponent
            hint="Essential soft skills and tech advice"
            title="Tech Advice"
            skills="The What | Why | How "
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
            link="/path/career-advice"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default AllPaths

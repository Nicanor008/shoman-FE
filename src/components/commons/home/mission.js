import React from "react"
import "./home.scss"
import Nic from "../../../images/pairProgramming.svg"
import { Grid } from "@material-ui/core"

const Mission = () => {
  return (
    <div className="missionWrapper">
      <br />
      <br />
      <Grid container className="purposeGridWrapper" spacing={4}>
        <Grid item md={5}>
          <img src={Nic} alt="df" width="400" className="" />
        </Grid>
        <Grid item md={7} className="missionText">
          {/* My Name is <a href="http://offbeat-drug.surge.sh/">Nicanor Korir</a>{" "}
          and I was inspired to create this platform as a result of the
          mentorship I received at Andela. <br />Mentorship Shaped my career path and
          I would like to pass the knowledge.
          <br /> */}
          Free, accessible & dedicated mentorship program.
          <br />
          <br />
          <b>Mission:</b> To share Tech knowledge widely.
        </Grid>
      </Grid>
    </div>
  )
}

export default Mission

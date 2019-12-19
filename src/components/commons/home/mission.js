import React from "react"
import "./home.scss"
import Nic from "../../../images/nic.png"
import { Grid } from "@material-ui/core"

const Mission = () => {
  return (
    <div className="missionWrapper">
      <br />
      <br />
      <Grid container className="purposeGridWrapper" spacing={4}>
        <Grid item md={6}>
          <img src={Nic} alt="df" width="700" className="" />
        </Grid>
        <Grid item md={6} className="missionText">
          Shoman Codes is created, managed & facilitated by{" "}
          <a href="http://offbeat-drug.surge.sh/">Nicanor</a> is a Software
          Engineer running this programme with an{" "}
          <b>aim to share what I know</b>.
          <br />
          <br />
          <b>Shoman Codes Plans</b>
          <ul>
            <li>Accepting other mentors to join us anytime</li>
            <li>
              Support every other path - Cloud Architect, Data science, AI, ML,
              etc
            </li>
          </ul>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Mission

import React from "react"
import "./home.scss"
import Nic from "../../../images/pairProgramming.svg"
import { Grid, Button } from "@material-ui/core"

const Mission = () => {
  return (
    <div className="missionWrapper">
      <br />
      <br />
      <Grid container className="purposeGridWrapper" spacing={4}>
        <Grid item md={5}>
          <img src={Nic} alt="df" width="400" />
        </Grid>
        <Grid item md={7} className="missionText">
          Free, accessible & dedicated mentorship program.
          <br />
          <br />
          <b>Mission:</b> To share Tech knowledge widely.
          <br />
          <br />
          Help us achive our mission{" "}
          <a href="/donate"
            style={{
              backgroundColor: "yellow",
              fontWeight: "bold",
              border: "0.5px solid blue",
              padding: "8px 15px",
              borderRadius: "5px"
            }}
          >
            Donate
            <span className="subTitleDescription">(Target-$2370)</span>
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

export default Mission

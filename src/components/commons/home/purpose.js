import React from "react"
import "./home.scss"
// import PairProgramming from "../../../images/pairProgramming.svg"
import CodeTyping from "../../../images/code.svg"
import Focus from "../../../images/focus.svg"
import Collaborate from "../../../images/collaborate.svg"
import { Grid } from "@material-ui/core"

const MentorshipPurpose = () => {
  return (
    <div className="purposeWrapper">
    <br /><br /><br />
      <Grid
        container
        className="purposeGridWrapper"
        spacing={4}
      >
        <Grid item md={4}>
          <img
            src={CodeTyping}
            alt="df"
            width="150"
            className="pathImageText"
          />
          <h3>One Path at a Time</h3>
          <p>
            You Don't have to know everything. You going to work only on one
            path, preferably what you would like to do in your Career. Select
            carefully. Follow your <b>passion</b>.
          </p>
        </Grid>
        <Grid item md={4}>
          <img
            src={Focus}
            alt="df"
            width="200"
            className="pathImageText"
          />
          <h3>Focus</h3>
          <p>
            Time to drain your energy on what you've selected. You'll spend
            hours learning individually, while learning with other mentees and
            your mentor.
          </p>
        </Grid>
        <Grid item md={4}>
          <img
            src={Collaborate}
            alt="df"
            width="200"
            className="pathImageText"
          />
          <h3>Collaborate & Execute</h3>
          <p>
            We a <b>practical oriented</b> people. You can't go wrong with lots
            of practice, especially when working with a team.
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default MentorshipPurpose

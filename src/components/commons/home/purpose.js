import React from "react"
import "./home.scss"
import PairProgramming from "../../../images/pairProgramming.svg"
import { Grid } from "@material-ui/core"

const MentorshipPurpose = () => {
  return (
    <div className="purposeWrapper">
      <div className="purposeTitleText">
          <h2>
            How It Works `Mentee`&nbsp;
            <span role="img" aria-label="Edit">
              🤝
            </span>
          </h2>
      </div>

      <Grid
        container
        className="purposeGridWrapper"
        spacing={4}
      >
        <Grid item md={4}>
          <img
            src={PairProgramming}
            alt="df"
            width="100"
            className="pathImageText"
          />
          <h3>Select a Path</h3>
          <p>
            You Don't have to know everything. You going to work only on one
            path, preferably what you would like to do in your Career. Select
            carefully. Follow you <b>passion</b>.
          </p>
        </Grid>
        <Grid item md={4}>
          <img
            src={PairProgramming}
            alt="df"
            width="100"
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
            src={PairProgramming}
            alt="df"
            width="100"
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

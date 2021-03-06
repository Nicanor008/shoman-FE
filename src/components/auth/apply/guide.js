import { Grid } from "@material-ui/core"
import React from "react"
import ApplyDateline from "./applyDateline"
import "./guide.scss"

function ApplyGuide() {
  return (
    <div>
      <center>
        <h1 className="guideTitle"><u>Application & Selection Criteria</u></h1>
        <ApplyDateline classname="apply-subtitle-text" />
      </center>
      <br />
      <Grid container spacing={3} className="guideItems">
        {/* item 1 */}
        <Grid item xs={12} md={4} className="guides">
          <center>
            <img
              src="https://res.cloudinary.com/nicanor/image/upload/v1605546267/shoman-icon-1.svg"
              alt="apply"
              height="60"
              width="60"
            />
            <p>Apply</p>
          </center>
        </Grid>

        {/* item 2 */}
        <Grid item xs={12} md={4} className="guides">
          <center>
            <img
              src="https://res.cloudinary.com/nicanor/image/upload/v1605546267/shoman-icon-2.svg"
              alt="apply"
              height="60"
              width="60"
            />
            <p>Application Review</p>
          </center>
        </Grid>

        {/* item 3 */}
        <Grid item xs={12} md={4} className="guides">
          <center>
            <img
              src="https://res.cloudinary.com/nicanor/image/upload/v1605546267/shoman-icon-3.svg"
              alt="apply"
              height="60"
              width="60"
            />
            <p>Receive feedback</p>
          </center>
        </Grid>

        {/* item 4 */}
        <Grid item xs={12} md={4} className="guides">
          <center>
            <img
              src="https://res.cloudinary.com/nicanor/image/upload/v1605546267/shoman-icon-6.svg"
              alt="apply"
              height="60"
              width="60"
            />
            <p>Make Payments</p>
          </center>
        </Grid>

        {/* item 5 */}
        <Grid item xs={12} md={4} className="guides">
          <center>
            <img
              src="https://res.cloudinary.com/nicanor/image/upload/v1605546267/shoman-icon-5.svg"
              alt="apply"
              height="60"
              width="60"
            />
            <p>Receive Invitation</p>
          </center>
        </Grid>

        {/* item 6 */}
        <Grid item xs={12} md={4} className="guides">
          <center>
            <img
              src="https://res.cloudinary.com/nicanor/image/upload/v1605546267/shoman-icon-4.svg"
              alt="apply"
              height="60"
              width="60"
            />
            <p>You one of us now</p>
          </center>
        </Grid>
      </Grid>
    </div>
  )
}

export default ApplyGuide

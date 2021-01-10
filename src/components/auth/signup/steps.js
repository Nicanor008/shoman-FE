import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: "150px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}))

const StepsComponent = ({ props, steps }) => {
  const classes = useStyles()


  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 200
  }

  return (
    <div
      className={classes.root}
      style={{ minHeight: height, paddingTop: "10rem" }}
    >
      <Stepper activeStep={props} alternativeLabel>
        {steps && steps?.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {(() => {
        switch (props) {
          case 1:
            return (
              <section className={classes.instructions}>
                <p>
                  We have received your credentials. Kindly check your mail and
                  verify the email you provided to proceed to the next step.
                </p>
              </section>
            )
          case 2:
            return (
              <section className={classes.instructions}>
                <p>
                  Thank you for verifying your credentials. Kindly click on
                  Login above and proceed.
                </p>
              </section>
            )
          case 3:
            return (
              <section className={classes.instructions}>
                <p>
                  We have received your Application to be part of the Shoman Mentorship Programme.
                  We've shared some more information in your email. You'll hear from us soon.
                </p>
              </section>
            )
          default:
            break
        }
      })()}
    </div>
  )
}
export default StepsComponent

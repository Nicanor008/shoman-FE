// import SingleRequirement from "../components/commons/requirements"

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import "../components/auth/login/login.scss"
import "../components/header.scss"
import "../components/auth/signup/signup.scss"
import {
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core"
import ButtonComponent from "../components/commons/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CheckboxInput } from "../components/commons/inputs/checkbox"

import "../components/auth/apply.scss"
import ApplyGuide from "../components/auth/apply/guide"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "46%",
    backgroundColor: "#ffffff",
    borderRadius: "3px",
  },
  textArea: {
    width: "100%",
    padding: "1rem",
    borderColor: "#D4D4D4",
    borderRadius: "3px",
  },
}))

export default function Apply() {
  const classes = useStyles()
  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 290
  }

  return (
    <Layout>
      <SEO title="Apply" description="Apply to Shoman mentorship program" />
      <div className="applyInputWrapper" style={{ minHeight: height }}>
        <div className="loginInput signupImage">
          <ApplyGuide />
        </div>
        <div className="applyInputs">
          {/* email address */}
          <div>
            <center>
              <p className="applyTitle">Apply as a Mentee</p>
              <span className="authSubTitle applySubTitle">Accelerate your learning</span>
            </center>
          </div>
          <br />
          <form>
            <Grid container spacing={3}>
              {/* firstname */}
              <Grid item xs={12} md={6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>

              {/* last name */}
              <Grid item xs={12} md={6}>
                <TextField id="lastName" label="Last Name" variant="outlined" />
              </Grid>

              {/* email */}
              <Grid item xs={12} md={6}>
                <TextField id="email" label="Email" variant="outlined" />
              </Grid>

              {/* track */}
              <Grid item xs={12} md={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className={classes.label}
                    variant="outlined"
                  >
                    Track
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className={classes.label}
                  >
                    <MenuItem value="Frontend">
                      Frontend Design & Development
                    </MenuItem>
                    <MenuItem value="Backend">Backend Development</MenuItem>
                    <MenuItem value="FullStack">
                      FullStack - Frontend + Backend + DevOps
                    </MenuItem>
                    <MenuItem value="FullStack">
                      Mobile Dev(Android/iOS/Native)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <p className="requirementsText requirementsTextCheckbox">Requirements Checklist</p>
                <FormGroup row>
                  <CheckboxInput label="Laptop" />
                  <CheckboxInput label="Internet" />
                  <CheckboxInput label="Available for 3 months, 4 hours a day" />
                  <CheckboxInput label="Tech Passion" />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <p className="requirementsText">
                  What are your goals during and after this mentorship?
                </p>
                <TextareaAutosize
                  className={classes.textArea}
                  aria-label="goal"
                  placeholder="Be descriptive, we can take you to the moon, but can you handle our rocket?"
                />
              </Grid>
              <Grid item xs={12}>
                <p className="requirementsText">
                  Any Previous experience in software development?
                </p>
                <TextareaAutosize
                  className={classes.textArea}
                  aria-label="experience"
                  placeholder="Technologies used, years of experience ..."
                />
              </Grid>

              <Grid item xs={12}>
                <FormGroup row>
                  <CheckboxInput label="You understand that you have to pay KSh. 1500 for this mentorship? Why?" />
                </FormGroup>
              </Grid>
            </Grid>

            <div className="actionButtonWrapper">
              <ButtonComponent
                buttonName="Submit Application"
                class="authButton"
              />
              {/* add remember me here */}
            </div>
          </form>
          <div className="actionButtonWrapper">
            <a
              href="/auth/login"
              className="actionButton-link actionButton-link1"
            >
              Register
            </a>
            <span className="actionButton-link">|</span>
            <a
              href="/auth/forgot-password"
              className="actionButton-link actionButton-link2"
            >
              Terms & Conditions
            </a>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  )
}

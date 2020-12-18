import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Axios from "axios"
import "../login/login.scss"
import "../../header.scss"
import "../signup/signup.scss"
import {
  CircularProgress,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core"
import ButtonComponent from "../../../components/commons/button"
import { CheckboxInput } from "../../../components/commons/inputs/checkbox"

import "../apply.scss"
import ApplyDateline from "./applyDateline"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "46%",
    borderRadius: "3px",
  },
  textArea: {
    width: "100%",
    padding: "1rem",
    borderColor: "#D4D4D4",
    borderRadius: "3px",
  },
  paymentError: {
    color: "red",
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  textAreaError: {
    border: `1px solid red`,
  },
  errorMessage: {
    color: "red",
  },
  successMessage: {
    color: "black",
    fontWeight: "bold",
    marginBottom: "1rem",
    backgroundColor: "lime",
    padding: "1rem",
    borderRadius: "3px",
  },
}))

export default function ApplyForm() {
  const classes = useStyles()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [payment, setPayment] = useState("")
  const [response, setResponse] = useState(null)
  const [errorRes, setError] = useState(null)
  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 290
  }

  const onSelectChange = (e) => {
    setError(null)
    if (e.target.type === "checkbox") {
      setPayment("")
      return setData({
        ...data,
        [e.target.name]: e.target.checked,
      })
    }
    return setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const OnSubmitApplication = (e) => {
    setLoading(true)
    if (!data.understand_payment_is_required) {
      return setPayment("You must understand that payment is required!")
    }

    //   proceed
    Axios.post(`${process.env.GATSBY_API_URL}mentees/apply`, data)

      .then((res) => {
        setLoading(false)
        setResponse(res.data)
      })
      .catch((errorResponse) => {
        setLoading(false)
        setError(errorResponse)
      })
  }

  const error = errorRes && errorRes.response && errorRes.response.data
  const errorRequest =
    errorRes && errorRes.request && "Connection Broken. Try again"

  return (
    <div>
      <div className="applyInputWrapper" style={{ minHeight: height }}>
        <div>
          {/* email address */}
          <div>
            <center>
              <p className="applyTitle">Apply as a Mentee</p>
              <span className="authSubTitle applySubTitle">
                Accelerate your learning
              </span>
              <br />
            </center>
            <ApplyDateline classname="applyForm-subtitle-text" />
          </div>
          <br />
          {error && (
            <span className={classes.errorMessage}>{error.message}</span>
          )}
          {response && response.message && (
            <>
              <p className={classes.successMessage}>{response.message}</p>
            </>
          )}
          {errorRequest && (
            <>
              <p className={classes.errorMessage}>{errorRequest}</p>
            </>
          )}
          <form>
            <Grid container spacing={3}>
              {/* firstname */}
              <Grid item xs={12} md={6}>
                <TextField
                  error={error && error.errors.find((e) => e.firstname) && true}
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  onChange={onSelectChange}
                  name="firstname"
                />
              </Grid>

              {/* last name */}
              <Grid item xs={12} md={6}>
                <TextField
                  error={error && error.errors.find((e) => e.lastname) && true}
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  onChange={onSelectChange}
                  name="lastname"
                />
              </Grid>

              {/* email */}
              <Grid item xs={12} md={6}>
                <TextField
                  error={error && error.errors.find((e) => e.email) && true}
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={onSelectChange}
                  name="email"
                />
              </Grid>

              {/* track */}
              <Grid item xs={12} md={6}>
                <FormControl
                  className={classes.formControl}
                  error={error && error.errors.find((e) => e.track) && true}
                >
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
                    onChange={onSelectChange}
                    name="track"
                  >
                    <MenuItem value="Frontend Development">Frontend</MenuItem>
                    <MenuItem value="Backend Development">Backend</MenuItem>
                    <MenuItem value="FullStack Developer">FullStack</MenuItem>
                    <MenuItem value="Mobile Development">Mobile Dev</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <p className="requirementsText requirementsTextCheckbox">
                  Requirements Checklist
                </p>
                <FormGroup row>
                  <CheckboxInput
                    label="Laptop"
                    onChange={onSelectChange}
                    name="laptop"
                  />
                  <CheckboxInput
                    label="Internet"
                    onChange={onSelectChange}
                    name="internet_access"
                  />
                  <CheckboxInput
                    label="Available for 3 months, 4 hours a day"
                    onChange={onSelectChange}
                    name="fully_available"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <p className="requirementsText">
                  What are your goals during and after this mentorship?
                </p>
                <TextareaAutosize
                  className={`${
                    error &&
                    error.errors.find((e) => e.goal) &&
                    classes.textAreaError
                  } ${classes.textArea}`}
                  aria-label="goal"
                  placeholder="Be descriptive, we can take you to the moon, but can you handle our rocket?"
                  onChange={onSelectChange}
                  name="goal"
                />
              </Grid>
              <Grid item xs={12}>
                <p className="requirementsText">
                  Any Previous experience in software development?
                </p>
                <TextareaAutosize
                  className={`${
                    error &&
                    error.errors.find((e) => e.previous_experience) &&
                    classes.textAreaError
                  } ${classes.textArea}`}
                  aria-label="experience"
                  placeholder="Technologies used, years of experience ..."
                  onChange={onSelectChange}
                  name="previous_experience"
                />
              </Grid>

              <Grid item xs={12}>
                <FormGroup row>
                  {payment && <p className={classes.paymentError}>{payment}</p>}
                  <CheckboxInput
                    label={`You understand that you have to pay KSh. 1500 for this mentorship.`}
                    name="understand_payment_is_required"
                    onChange={onSelectChange}
                  />
                  <Link href="/donate" className="link-why" target="_blank">Why?</Link>
                </FormGroup>
              </Grid>
            </Grid>

            <div className="actionButtonWrapper">
              <ButtonComponent
                buttonName="Submit Application"
                class="authButton"
                onClick={OnSubmitApplication}
                loading={loading && <CircularProgress disableShrink />}
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
    </div>
  )
}

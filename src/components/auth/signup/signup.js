import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputComponents from "../../input"
import ButtonComponent from "../../commons/button"
import "../login/login.scss"
import "../../header.scss"
import "./signup.scss"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '46%',
    backgroundColor: '#ffffff',
    border: '1px solid #B094CC',
    borderRadius: '3px'
  },
  label: {
    paddingLeft: '0.5rem',
  }
}))

export default function SignUpComponent() {
  const classes = useStyles()
  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 290
  }

  return (
    <div className="authInputWrapper" style={{ minHeight: height }}>
      <div className="loginInput signupImage">
        <img
          src="https://res.cloudinary.com/nicanor/image/upload/v1605537529/Welcome-Shoman.jpg"
          alt="shoman login"
          height="259"
          width="589"
        />
      </div>
      <div className="authInputs">
        {/* <center> */}
        {/* email address */}
        <div>
          <p className="authTitle">
            Welcome to Shoman Mentorship{" "}
            <span className="authTitleEnd">:)</span>
          </p>
          <span className="authSubTitle authSubTitle-text">Register to Continue</span>
        </div>
        {/* username */}
        <InputComponents
          class={classes.margin}
          label="Username"
          inputType="text"
          placeholder="JohnDoe1"
        />
        <br />
        {/* email */}
        <InputComponents
          class={classes.margin}
          label="Email Address"
          inputType="email"
          placeholder="johndoe@example.com"
        />
        <br />

        {/* password */}
        <InputComponents
          class={classes.margin}
          label="Password"
          inputType="password"
        />
        <br />

        {/* select track */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label" className={classes.label}>Track</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value="Frontend">Frontend Design & Development</MenuItem>
            <MenuItem value="Backend">Backend Development</MenuItem>
            <MenuItem value="FullStack">FullStack - Frontend + Backend + DevOps</MenuItem>
            <MenuItem value="FullStack">Mobile Dev(Android/iOS/Native)</MenuItem>
          </Select>
        </FormControl>
        <div className="actionButtonWrapper">
          <ButtonComponent buttonName="Login" class="authButton" />
          {/* add remember me here */}
        </div>
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
      </div>
    </div>
  )
}

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputComponents from "../input"
import ButtonComponent from "../commons/button"
import "./login.scss"
import "../header.scss"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function LoginComponent() {
  const classes = useStyles()
  let height;
  if (typeof window !== 'undefined') {
    height = window.innerHeight - 290
  }

  return (
    <div className="authInputWrapper" style={{ minHeight: height }}>
      <div className="loginInput">
        <img
          src="https://res.cloudinary.com/nicanor/image/upload/v1605351443/shoman-login.jpg"
          alt="shoman login"
          height="514"
          width="505"
        />
      </div>
      <div className="authInputs">
        {/* <center> */}
        {/* email address */}
        <div>
          <p className="authTitle">
            Welcome Back <span className="authTitleEnd">:)</span>
          </p>
          <span className="authSubTitle">Login to Continue</span>
        </div>
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
        <div className="actionButtonWrapper">
          <ButtonComponent buttonName="Login" class="authButton" />
          {/* add remember me here */}
        </div>
        <div className="actionButtonWrapper">
          <a href="" className="actionButton-link actionButton-link1">
            Create Account
          </a>
          <span className="actionButton-link">|</span>
          <a href="" className="actionButton-link actionButton-link2">
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  )
}

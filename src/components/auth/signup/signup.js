import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@material-ui/core"
import InputComponents from "../../input"
import { postData } from "../../../utils/services/api"
import { toastNotification } from "../../../utils/helpers/toaster"
import ButtonComponent from "../../commons/button"
import "../login/login.scss"
import "../../header.scss"
import "./signup.scss"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  label: {
    paddingLeft: "0.5rem",
  },
  errorMessage: {
    color: "red",
  },
}))

export default function SignUpComponent() {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const [userEmail, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [track, setTrack] = useState("")
  const [userRole, setUserRole] = useState("")
  const [pass, setPass] = useState("")

  //api errors
  const [emailErrors, setEmailErrors] = useState(null)
  const [passErrors, setPassErrors] = useState(null)

  useEffect(() => {
    // don't allow user to sign in if already signed in
    if (localStorage.getItem("user")) {
      window.location.href = "/dashboard/"
    }
  })

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 200
  }
  const authHandler = async () => {
    try {
      if (password !== pass) {
        return setPassErrors("Passwords do not match")
      }
      setLoading(true)
      setEmailErrors(null)
      setPassErrors(null)
      const payload = await postData(
        "/users/register",
        {
          email: userEmail,
          password: password,
          Username: username,
          track: track,
          userType: userRole,
          passwordConfirm: pass,
        },
        false
      )
      if (payload?.message && window !== "undefined") {
        window.location.href = "/auth/login/"
      } else {
        setEmailErrors(payload?.email)
        setPassErrors(payload?.password)
        setLoading(false)
        toastNotification("error", "Authentication failed!")
      }
    } catch (err) {
      setLoading(false)
      if (err.response) toastNotification("error", "Authentication failed!")
    }
  }

  /**
   * @param {{ preventDefault: () => void; }} e
   */
  const onSubmit = (e) => {
    e.preventDefault()
    authHandler()
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
        <div>
          <p className="authTitle">
            Welcome to Shoman Mentorship{" "}
            <span className="authTitleEnd">:)</span>
          </p>
          <span className="authSubTitle authSubTitle-text">
            Register to Continue
          </span>
        </div>
        {/* username */}
        <InputComponents
          class={classes.margin}
          label="Username"
          inputType="text"
          placeholder="JohnDoe1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        {/* email */}
        <InputComponents
          class={classes.margin}
          label="Email Address"
          inputType="email"
          placeholder="johndoe@example.com"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {emailErrors && (
          <span className={classes.errorMessage}>{emailErrors}</span>
        )}
        {/* password */}
        <InputComponents
          class={classes.margin}
          label="Password"
          inputType="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {/* confirm password */}
        <InputComponents
          class={classes.margin}
          label="Confirm Password"
          inputType="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        {passErrors && (
          <span className={classes.errorMessage}>{passErrors}</span>
        )}

        {/* userType */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label" className={classes.label}>
            User
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => setUserRole(e.target.value)}
          >
            <MenuItem value="mentee">Mentee</MenuItem>
            <MenuItem value="mentor">Mentor</MenuItem>
          </Select>
        </FormControl>


        {/* select track */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label" className={classes.label}>
            Track
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => setTrack(e.target.value)}
          >
            <MenuItem value="frontend">Frontend Design & Development</MenuItem>
            <MenuItem value="backend">Backend Development</MenuItem>
            <MenuItem value="fullStack">
              FullStack - Frontend + Backend + DevOps
            </MenuItem>
            <MenuItem value="mobile">Mobile Dev(Android/iOS/Native)</MenuItem>
          </Select>
        </FormControl>
        <div className="actionButtonWrapper">
          <ButtonComponent
            buttonName="Sign Up"
            class="authButton"
            onClick={onSubmit}
            loading={loading && <CircularProgress disableShrink />}
          />
          <div>
            Got an account?{" "}
            <a
              href="/auth/login"
              className="actionButton-link actionButton-link1"
            >
              Login
            </a>
          </div>
        </div>

        {/* TODO: add remember me here */}

        {/* to be used later */}
        {/* <div className="actionButtonWrapper">
          <a
            href="/auth/login"
            className="actionButton-link actionButton-link1"
          >
            Login
          </a>
          <span className="actionButton-link">|</span>
          <a
            href="/auth/forgot-password"
            className="actionButton-link actionButton-link2"
          >
            Terms & Conditions
          </a>
        </div> */}
      </div>
    </div>
  )
}

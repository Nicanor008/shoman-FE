import React, { useState, useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { CircularProgress } from "@material-ui/core"
import { UserContext } from "../../../../state"
import { postData } from "../../../utils/services/api"
import { verifyToken } from "../../../utils/helpers"
import { toastNotification } from "../../../utils/helpers/toaster"
import ButtonComponent from "../../../components/commons/button"
import InputComponents from "../../input"
import "./login.scss"
import "../../header.scss"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  errorMessage: {
    color: "red",
  },
}))

export default function LoginComponent() {
  const userContext = useContext(UserContext)
  useEffect(() => {
    // don't allow user to sign in if already signed in
    if (localStorage.getItem("user") &&  verifyToken(userContext?.state?.token)) {
     window.location.href = "/dashboard/"
    }
  })
  
  const [userEmail, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  //api errors
  const [emailErrors, setEmailErrors] = useState(null)
  const [passErrors, setPassErrors] = useState(null)

  const classes = useStyles()
  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 290
  }

  const authHandler = async () => {
    try {
      setLoading(true)
      const payload = await postData(
        "/users/login",
        { email: userEmail, password: password },
        false
      )
      if (!payload?.token) {
        // throw an error message, user does not exist, or wrong password
        setEmailErrors(payload?.email)
        setPassErrors(payload?.password)
        setLoading(false)
        toastNotification('error', 'Authentication failed!')
      }
      const verified = verifyToken(payload?.token)
      // @ts-ignore
      if (verified) {
        localStorage.setItem("token", payload?.token)
        document.cookie = `token=${payload?.token}; path=/;`
        // write user account details to localStorage for persistence
        localStorage.setItem("user", JSON.stringify(payload?.user, null, 2))

        // update context
        userContext.dispatch({
          type: "SIGNIN_USER",
          payload: {
            authenticated: true,
            token: payload?.token,
            user: payload?.user,
          },
        })
        toastNotification('success', `Welcome ${payload?.user?.Username}`)
        window.location.href = "/dashboard/"
      } 
    } catch (err) {
      setLoading(false)
      toastNotification('error', 'Authentication failed!')
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
          <span className="authSubTitle authSubTitle-text">
            Login to Continue
          </span>
        </div>
        <InputComponents
          class={classes.margin}
          label="Email Address"
          value={userEmail}
          rules={[{ required: true, message: "Please input your Email!" }]}
          inputType="email"
          placeholder="johndoe@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {emailErrors && <span className={classes.errorMessage}>{emailErrors}</span>}
        {/* password */}
        <InputComponents
          class={classes.margin}
          label="Password"
          value={password}
          required={true}
          inputType="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {passErrors && <span className={classes.errorMessage}>{passErrors}</span>}
        <div className="actionButtonWrapper">
          <ButtonComponent
            buttonName="Login"
            class="authButton"
            onClick={onSubmit}
            loading={loading && <CircularProgress disableShrink />}
          />
          {/* add remember me here */}
        </div>
        <div className="actionButtonWrapper">
          <a
            href="/auth/register"
            className="actionButton-link actionButton-link1"
          >
            Create Account
          </a>
          <span className="actionButton-link">|</span>
          <a
            href="/auth/forgot-password"
            className="actionButton-link actionButton-link2"
          >
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  )
}

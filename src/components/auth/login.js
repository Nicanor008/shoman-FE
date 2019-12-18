import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SInputComponents from "../input"
import ButtonComponent from "../commons/button"
import { Link } from "@material-ui/core"
import '../header.scss';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function LoginComponent() {
  const classes = useStyles()

  return (
    <div className="authInputWrapper">
      {/* email address */}
      <SInputComponents
        class={classes.margin}
        label="Email Address"
        inputType="email"
      />
      <br />

      {/* password */}
      <SInputComponents
        class={classes.margin}
        label="Password"
        inputType="password"
      />
      <br />
      <div style={{ display: "inline-block"}}>
        <Link href="#" variant="body2" style={{paddingLeft:"10px"}}>
          Forgot Password
        </Link>
        <Link href="#" variant="body2"  style={{paddingLeft:"100px"}}>
          {/* Sign Up */}
        </Link>
      </div>
      <br />
      <br />

      {/* submit button */}
      <ButtonComponent buttonName="Login" buttonColor="primary" />

      <br />
    </div>
  )
}

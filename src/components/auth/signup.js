import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import SInputComponents from "../input"
import { BootstrapInput } from "../input"
import ButtonComponent from "../commons/button"
import { Link } from "@material-ui/core"

import '../header.scss';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function SignUpComponent() {
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

      {/* Name */}
      <SInputComponents
        class={classes.margin}
        label="Your Name"
        inputType="text"
      />
      <br />

      {/* path selection */}
      <FormControl className={classes.margin} style={{ paddingRight: "150px" }}>
        <InputLabel id="path">Path</InputLabel>
        <Select labelId="path" id="path" value="" input={<BootstrapInput />}>
          <MenuItem value="">
            <em>Path</em>
          </MenuItem>
          <MenuItem value="frontend">Frontend</MenuItem>
          <MenuItem value="backend">Backend</MenuItem>
        </Select>
      </FormControl>
      <br />

      {/* forgot password option */}
      <Link href="#" variant="body2" style={{paddingRight:"80px"}}>
        Forgot Password
      </Link>
      <br />
      <br />

      {/* submit button */}
      <ButtonComponent buttonName="Sign Up" buttonColor="primary" />
    </div>
  )
}

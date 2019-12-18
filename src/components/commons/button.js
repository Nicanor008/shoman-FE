import React from "react"
import { Button } from "@material-ui/core"

const ButtonComponent = (props) => {
  return (
    <Button variant="contained" color={props.buttonColor}>
      {props.buttonName}
    </Button>
  )
}

export default ButtonComponent

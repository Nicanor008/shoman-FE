import React from "react"
import { Button } from "@material-ui/core"

const ButtonComponent = props => {
  return (
    <Button
      variant="contained"
      className={props.class}
      type={props.type}
      onClick={props.onClick}
    >
      {props.buttonName}
    </Button>
  )
}

export default ButtonComponent

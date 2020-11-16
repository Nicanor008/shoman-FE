import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

export function CheckboxInput({label}) {
  return (
    <FormControlLabel
      control={<Checkbox name="checkedC" />}
      label={label}
    />
  )
}

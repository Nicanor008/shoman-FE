import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

export function CheckboxInput({ label, name, onChange }) {
  return (
    <FormControlLabel
      control={<Checkbox name={name} onChange={onChange} />}
      label={label}
    />
  )
}

import React from "react"
import { withStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import InputBase from "@material-ui/core/InputBase"

export const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "300px",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Nunito"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase)

const InputComponents = props => {
  return (
    <FormControl className={props.class}>
      <InputLabel htmlFor="demo-customized-textbox">{props.label}</InputLabel>
      <BootstrapInput
        id="demo-customized-textbox"
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </FormControl>
  )
}

export default InputComponents

// export const SelectInput = props => {
//   return (
    // <FormControl className={classes.formControl}>
    //   <InputLabel id="demo-simple-select-label">Age</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-label"
    //     id="demo-simple-select"
    //     value={age}
    //     onChange={handleChange}
    //   >
    //     <MenuItem value={10}>Ten</MenuItem>
    //     <MenuItem value={20}>Twenty</MenuItem>
    //     <MenuItem value={30}>Thirty</MenuItem>
    //   </Select>
    // </FormControl>


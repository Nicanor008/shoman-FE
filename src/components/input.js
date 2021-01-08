import React from "react"
import { withStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import InputBase from "@material-ui/core/InputBase"
import { TextField } from "@material-ui/core"

export const BootstrapInput = withStyles((theme) => ({
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

const InputComponents = (props) => {
  return (
    <FormControl className={props.class} style={{maxWidth: '20%'}}>
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        type={props.inputType}
        onChange={props.onChange}
        size="small"
        placeholder={props.placeholder}
        fullWidth={false}
      />
      {/* <InputLabel htmlFor="demo-customized-textbox">{props.label}</InputLabel>
      <BootstrapInput
        id="demo-customized-textbox"
        type={props.inputType}
        placeholder={props.placeholder}
        onChange={props.onChange}
      /> */}
    </FormControl>
  )
}

export default InputComponents

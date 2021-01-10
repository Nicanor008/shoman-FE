import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, LinearProgress } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "10px",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const ButtonComponent = (props) => {
  const classes = useStyles()
  return (
    <>
      {props.loading ? (
        <div className={classes.root}>
          <LinearProgress />
        </div>
      ) : (
        <Button
          variant="contained"
          className={props.class}
          type={props.type}
          onClick={props.onClick}
        >
          {props.buttonName}
        </Button>
      )}
    </>
  )
}

export default ButtonComponent

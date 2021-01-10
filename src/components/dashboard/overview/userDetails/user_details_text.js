import { makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(() => ({
    root: {
        fontSize: '20px',
        display: 'flex',
        paddingBottom: '0.8rem'
    },
  label: {
      paddingRight: '0.8rem'
  }
}))

function UserDetailsText({ labelText, labelValue }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {labelValue && <span className={classes.label}>{labelText}</span>}
      <span>{labelValue}</span>
    </div>
  )
}

export default UserDetailsText

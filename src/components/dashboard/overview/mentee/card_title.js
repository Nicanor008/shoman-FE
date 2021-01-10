import React from "react"

import { Divider, makeStyles } from "@material-ui/core"
import "./mentee.scss"

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
}))

export default function CardTitle({ title }) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <p className={classes.title}>{title}</p>
        <h4>...</h4>
      </div>
      <hr />
    </>
  )
}

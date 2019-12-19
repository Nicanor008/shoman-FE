import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "rebeccapurple",
    color: "white",
    borderRadius: 5,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  subTitle: {
    color: "rgb(228, 211, 60)",
    fontWeight: "bold"
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}))

export default function ListData(props) {
  const classes = useStyles()

  return (
    <List className={classes.root} dense>
      <ListSubheader className={classes.subTitle}>{props.subTitle}</ListSubheader>
      {props.data.length > 0 && props.data.map(item => (
        <ListItem key={item.id}>
          <ListItemText primary={item.content} />
        </ListItem>
      ))}
    </List>
  )
}

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import React from "react"

function LearningProgressItem({ icon, title, stack }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="icon status" src={icon} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={<React.Fragment>{stack}</React.Fragment>}
        />
      </ListItem>
      <hr />
    </>
  )
}

export default LearningProgressItem

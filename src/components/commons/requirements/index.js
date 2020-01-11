import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const SingleRequirement = ({ classes, title, content }) => {
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={content}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  )
}

export default SingleRequirement

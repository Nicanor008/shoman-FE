import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar";

const SingleRequirement = ({ title, content, icon }) => {
  return (
    <div>
      <ListItem alignItems="flex-start">
      {icon && 
        <ListItemAvatar>
          <Avatar alt="Icon">{icon}</Avatar>
        </ListItemAvatar>
        }
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

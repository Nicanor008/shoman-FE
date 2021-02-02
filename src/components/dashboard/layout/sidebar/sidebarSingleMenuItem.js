import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import { DashboardLayoutStyles } from "../../../../styles/dashboard_layout_styles"

function SidebarSingleMenuItems({ icon, iconComponent, menuText, url }) {
  const classes = DashboardLayoutStyles()

  return (
    <ListItem button key={Math.random()}>
      <Link to={url} className={classes.linkButton} activeStyle={{ color: "lime", fontWeight: 'bolder' }}>
      <ListItemIcon className={classes.iconButton}>
        {iconComponent ? (
          icon
        ) : (
          <img src={icon} alt="sidebar menu" className={classes.imgIcon} />
        )}
      </ListItemIcon>
      <ListItemText primary={menuText} />
      </Link>
    </ListItem>
  )
}

export default SidebarSingleMenuItems

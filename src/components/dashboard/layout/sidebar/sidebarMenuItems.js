import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import React from "react"
import SidebarSingleMenuItems from "./sidebarSingleMenuItem"
import { DashboardLayoutStyles } from "../../../../styles/dashboard_layout_styles"


function SidebarMenuItems() {
  const classes = DashboardLayoutStyles()

  const handleLogout = () => {
    if(typeof window !== 'undefined') { 
      localStorage.clear()
      return (window.location.href = "/auth/login")
    }
  }

  return (
    <div>
      <List>
        <SidebarSingleMenuItems
          icon="https://res.cloudinary.com/nicanor/image/upload/v1609864630/Time-icon.svg"
          menuText="Overview"
          url="/dashboard"
        />
        <SidebarSingleMenuItems
          icon="https://res.cloudinary.com/nicanor/image/upload/v1609864192/octicon_project-16.svg"
          menuText="Learning Content"
          url="/learning-content"
        />
        <SidebarSingleMenuItems
          icon="https://res.cloudinary.com/nicanor/image/upload/v1609864192/emojione-monotone_briefcase.svg"
          menuText="Projects"
          url="/projects"
        />
        {/* TODO: work on logout after login is done */}
        <ListItem button key={Math.random()} onClick={handleLogout}>
          <ListItemIcon className={classes.iconButton}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  )
}

export default SidebarMenuItems

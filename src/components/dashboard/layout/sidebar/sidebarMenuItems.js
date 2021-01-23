import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import React, { useEffect, useState } from "react"
import SidebarSingleMenuItems from "./sidebarSingleMenuItem"
import { DashboardLayoutStyles } from "../../../../styles/dashboard_layout_styles"

function SidebarMenuItems({ userRole }) {
  const [userType, setUserType] = useState(null)
  const classes = DashboardLayoutStyles()

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear()
      return (window.location.href = "/auth/login")
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"))
      setUserType(user?.userType)
    }
  }, [])

  return (
    <div>
      <List>
        {/* mentee menu */}
        {userRole === "mentee" && (
          <>
            <SidebarSingleMenuItems
              icon="https://res.cloudinary.com/nicanor/image/upload/v1609864630/Time-icon.svg"
              menuText="Overview"
              url="/mentee/overview"
            />
            <SidebarSingleMenuItems
              icon="https://res.cloudinary.com/nicanor/image/upload/v1609864192/octicon_project-16.svg"
              menuText="Learning Content"
              url="/mentee/learning-content"
            />
            <SidebarSingleMenuItems
              icon="https://res.cloudinary.com/nicanor/image/upload/v1609864192/emojione-monotone_briefcase.svg"
              menuText="Projects"
              url="/mentee/projects"
            />
          </>
        )}

        {/* mentor menu */}
        {userRole === "mentor" && (
          <>
            <SidebarSingleMenuItems
              icon="https://res.cloudinary.com/nicanor/image/upload/v1609864630/Time-icon.svg"
              menuText="Overview"
              url="/mentor/overview"
            />
            <SidebarSingleMenuItems
              icon="https://res.cloudinary.com/nicanor/image/upload/v1609864192/octicon_project-16.svg"
              menuText="Learning Content"
              url="/mentor/learning-content"
            />
            <SidebarSingleMenuItems
              icon="https://res.cloudinary.com/nicanor/image/upload/v1609864192/emojione-monotone_briefcase.svg"
              menuText="Projects"
              url="/mentor/projects"
            />
          </>
        )}

        {userType === "admin" && (
          <SidebarSingleMenuItems
            icon="https://res.cloudinary.com/nicanor/image/upload/v1609864628/gridicons_multiple-users.svg"
            menuText="Mentee Applications"
            url="/apply/applications"
          />
        )}
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

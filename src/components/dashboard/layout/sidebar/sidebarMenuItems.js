import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import React, { useEffect, useState } from "react"
import SidebarSingleMenuItems from "./sidebarSingleMenuItem"
import { DashboardLayoutStyles } from "../../../../styles/dashboard_layout_styles"

// icons
import OverviewIcon from "../../../../images/dashboard/overview.svg"
import ContentIcon from "../../../../images/dashboard/content.svg"
import ProjectsIcon from "../../../../images/dashboard/projects.svg"
import TeamsIcon from "../../../../images/dashboard/teams.svg"
import TrackIcon from "../../../../images/dashboard/track.svg"
import ApplicationsIcon from "../../../../images/dashboard/applications.svg"

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
              icon={OverviewIcon}
              menuText="Overview"
              url="/mentee/overview"
            />
            <SidebarSingleMenuItems
              icon={ContentIcon}
              menuText="Learning Content"
              url="/mentee/learning-content"
            />
            <SidebarSingleMenuItems
              icon={ProjectsIcon}
              menuText="Projects"
              url="/mentee/projects"
            />
          </>
        )}

        {/* Mentor/Admin menu */}
        {(userRole === "mentor" || userRole === "admin") && (
          <>
            <SidebarSingleMenuItems
              icon={OverviewIcon}
              menuText="Overview"
              url="/mentor/overview"
            />
            <SidebarSingleMenuItems
              icon={ContentIcon}
              menuText="Learning Content"
              url="/mentor/learning-content"
            />
            <SidebarSingleMenuItems
              icon={ProjectsIcon}
              menuText="Projects"
              url="/mentor/projects"
            />
            {userType === "admin" && (
              <>
                <SidebarSingleMenuItems
                  icon={TeamsIcon}
                  menuText="Team"
                  url="/admin/teams"
                />
                <SidebarSingleMenuItems
                  icon={TrackIcon}
                  menuText="Tracks"
                  url="/admin/tracks"
                />
                <SidebarSingleMenuItems
                  icon={ApplicationsIcon}
                  menuText="Mentee Applications"
                  url="/apply/applications"
                />
                <SidebarSingleMenuItems
                  icon={TeamsIcon}
                  menuText="Users"
                  url="/admin/users"
                />
              </>
            )}
          </>
        )}

        {/* all users */}
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

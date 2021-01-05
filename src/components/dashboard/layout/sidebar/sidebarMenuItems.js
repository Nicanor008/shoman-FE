import { List } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import React from "react"
import SidebarSingleMenuItems from "./sidebarSingleMenuItem"

function SidebarMenuItems() {
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
        <SidebarSingleMenuItems
          icon={<ExitToAppIcon />}
          iconComponent={true}
          menuText="Logout"
        />
      </List>
    </div>
  )
}

export default SidebarMenuItems

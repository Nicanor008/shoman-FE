import React from "react"
import clsx from "clsx"

import { DashboardLayoutStyles } from "../../../styles/dashboard_layout_styles"
import "./dashboard.scss"
import Sidebar from "./sidebar"

function DashboardLayout({ children }) {
  const classes = DashboardLayoutStyles()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      {/* sidebar menu, title & button */}
      <Sidebar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <div style={{width: '100%'}}>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <br />
          <br />
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

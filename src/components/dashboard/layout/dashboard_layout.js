import React, { useState, useEffect } from "react"
import clsx from "clsx"

import { DashboardLayoutStyles } from "../../../styles/dashboard_layout_styles"
import "./dashboard.scss"
import Sidebar from "./sidebar"

function DashboardLayout({ userRole, children }) {
  const classes = DashboardLayoutStyles()
  const [open, setOpen] = useState(true)
  const [authorised, setAuthorised] = useState(false)

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("user") === null
    ) {
      setAuthorised(false)
      window.location.href = "/auth/login/"
    } else {
      setAuthorised(true)
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    authorised && (
      <div className={classes.root}>
        {/* sidebar menu, title & button */}
        <Sidebar
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
          userRole={userRole}
        />
        <div style={{ width: "100%" }}>
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
  )
}

export default DashboardLayout

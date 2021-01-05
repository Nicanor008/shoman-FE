import React from "react"
import { AppBar, Drawer, IconButton, Toolbar, useTheme } from "@material-ui/core"
import clsx from "clsx"
import Header from "../../../header"
import SidebarMenuItems from "./sidebarMenuItems"

import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { DashboardLayoutStyles } from "../../../../styles/dashboard_layout_styles"

function Sidebar({ handleDrawerOpen, handleDrawerClose, open }) {
  const classes = DashboardLayoutStyles()
  const theme = useTheme()
 
  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon /> <h2 className={classes.siteTitle}>Shoman</h2>
          </IconButton>
          <div
            style={{
              width: "100%",
            }}
          >
            <Header siteTitle="" dashboard={true} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.titleWrapper}>
          <h2 className={classes.siteTitle}>Shoman</h2>
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={handleDrawerClose}
              className={classes.iconButton}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        </div>

        <br />
        <SidebarMenuItems />
      </Drawer>
    </>
  )
}

export default Sidebar

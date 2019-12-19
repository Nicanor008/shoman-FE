import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import CodeIcon from "@material-ui/icons/Code"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const drawerWidth = 280

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "rebeccapurple",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  iconButton: {
    color: "white",
  },
  successIconButton: {
    color: "lime",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rebeccapurple",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    color: "white",
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    // <Layout>
    <>
      <SEO title="Dashboard" />
      <div className={classes.root}>
        <CssBaseline />
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
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" noWrap style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <Link to="/" style={{color: "white", textDecoration: "none", cursor: "pointer"}}>Shoman Codes</Link>
            </Typography>
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
          <List>
            <ListItem button key={Math.random()}>
              <ListItemIcon className={classes.iconButton}>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Learn" />
            </ListItem>
          </List>

          <List style={{ paddingLeft: "80px", color: "yellow" }}>
            <ListItem button>
              <ListItemIcon className={classes.successIconButton}>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Content 1" />
            </ListItem>

            <ListItem button>
              <ListItemIcon className={classes.successIconButton}>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Content 2" />
            </ListItem>

            <ListItem button>
              <ListItemIcon className={classes.iconButton}>
                <HighlightOffIcon />
              </ListItemIcon>
              <ListItemText primary="Content 3" />
            </ListItem>
          </List>

          <List>
            <ListItem button key={Math.random()}>
              <ListItemIcon className={classes.iconButton}>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
          </List>

          <List style={{ paddingLeft: "80px", color: "yellow" }}>
            <ListItem button>
              <ListItemIcon className={classes.successIconButton}>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Project 1" />
            </ListItem>

            <ListItem button>
              <ListItemIcon className={classes.successIconButton}>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Project 2" />
            </ListItem>

            <ListItem button>
              <ListItemIcon className={classes.iconButton}>
                <HighlightOffIcon />
              </ListItemIcon>
              <ListItemText primary="Project 3" />
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem button key={Math.random()}>
              <ListItemIcon className={classes.iconButton}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <br /><br />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    </>
    //   </Layout>
  )
}

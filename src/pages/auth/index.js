import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Grid } from "@material-ui/core"
import LoginComponent from "../../components/auth/login"
import SignUpComponent from "../../components/auth/signup"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`auth-${index}`}
      aria-labelledby={`auth-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `auth-${index}`,
    "aria-controls": `auth-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function AuthPage() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <SEO title="Auth" />
      <div className={classes.root}>
      <br />
      <br />
        <center>
          {/* <Grid>
            <Grid item xs={12} md={4}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="Auth"
                >
                  <Tab label="Login" {...a11yProps(0)} />
                  <Tab label="Sign Up" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid> */}

          {/* <TabPanel value={value} index={0}> */}
            <LoginComponent />
          {/* </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUpComponent />
          </TabPanel> */}
        </center>
      </div>
    </Layout>
  )
}

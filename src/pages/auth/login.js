import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LoginComponent from "../../components/auth/login/login"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function AuthPage() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Login" description="Login to Shoman" />
      <div className={classes.root}>
        <LoginComponent />
      </div>
    </Layout>
  )
}

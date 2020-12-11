import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StepsComponent from "../../components/auth/signup/steps"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function AuthPage() {
  const classes = useStyles()

  return (
    <Layout inMain={false}>
      <SEO title="Steps" description="Verify Email" />
      <div className={classes.root}>
        <StepsComponent props={1}/>
      </div>
    </Layout>
  )
}

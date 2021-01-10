import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StepsComponent from "../../components/auth/signup/steps"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const steps = [
  "Apply",
  "Shoman Review Your Application",
  "Application status Feedback",
]
export default function TestPage() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Success" description="Application sent to your email." />
      <div className={classes.root}>
        <StepsComponent props={1} steps={steps} />
      </div>
    </Layout>
  )
}

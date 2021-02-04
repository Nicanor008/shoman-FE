import React, { useState, useEffect } from "react"
import SEO from "../../components/seo"
import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import { UserContextProvider } from "../../state/users/user.context"
import { Grid } from "@material-ui/core"
import MenteeLearningProgressOverview from "../../components/dashboard/overview/mentee/learning_progress"
import UserTeamDetails from "../../components/dashboard/overview/mentee/team/team_details"
import { DashboardOverviewStyles } from "../../components/dashboard/overview/styles"
import UserDetails from "../../components/dashboard/overview/userDetails/user_details"
import { GetData } from "../../utils/services/api"

export default function MentorOverview() {
  const classes = DashboardOverviewStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    GetData("/teams/current-user")
      .then((team) => {
        setLoading(false)
        setData(team)
      })
      .catch((error) => {
        if (error.response) setError(error.response.data)
        setLoading(false)
      })
  }, [])

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />
      <DashboardLayout userRole="mentee">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container>
              {/* learning progress or roadmap */}
              <Grid item xs={12} md={7}>
                <MenteeLearningProgressOverview />
              </Grid>

              {/* mentee team */}
              <Grid item xs={12} md={5}>
                <UserTeamDetails
                  classes={classes}
                  data={data}
                  loading={loading}
                  error={error}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* current user details */}
          <Grid
            item
            xs={12}
            md={4}
            className={classes.grid2}
            style={{ minHeight: height }}
          >
            <div className="grid2Content">
              <UserDetails height={height} teamDetails={data} />
            </div>
          </Grid>
        </Grid>
      </DashboardLayout>
    </UserContextProvider>
  )
}

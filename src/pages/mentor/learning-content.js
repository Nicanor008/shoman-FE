import { CircularProgress } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"


function MentorLearningContent() {
  const classes = CommonDashboardStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [contents, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentUserTeam, setCurrentUserTeam] = useState(null)

  useEffect(() => {
    setLoading(true)
    const data = GetData("/contents")
    data
      .then((content) => {
        setContent(content.content)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) setError(error.response.data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // get current user category, if available
    GetData("/teams/current-user").then((team) => {
      setCurrentUserTeam(
        team.data && team.data.team_name,
      )
    })
  }, [])

  console.error(error)

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />

      <div className={classes.root} style={{ minHeight: height }}>
        <DashboardLayout userRole="mentor">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <div className={classes.topBar}>
                <Link className={classes.button} to="/mentor/new-learning-content">
                  New Learning Content
                </Link>
              </div>
              <div className={classes.secondBar}>
                {contents?.map((content) => (
                  <ProjectCard
                    key={content?._id}
                    id={content?._id}
                    pageType="learning content"
                    title={content?.topic}
                    content={content?.content}
                    category={content?.track?.name}
                    author={content?.author}
                    publicAccess={content?.focusGroup === "shoman" ? true : false}
                    duration={content?.estimatedDuration}
                    deadline={content?.deadline}
                    team={currentUserTeam}
                  />
                ))}
                {contents === null && <h4>No Projects Available</h4>}
              </div>
            </>
          )}
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default MentorLearningContent

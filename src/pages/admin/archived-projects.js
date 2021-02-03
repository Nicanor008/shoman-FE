import { CircularProgress } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"

function ArchivedLearningContent() {
  const classes = CommonDashboardStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [contents, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  let user = JSON.parse(localStorage.getItem("user"))
  user = user && user.userType

  useEffect(() => {
    setLoading(true)
    const data = GetData("/projects/archivedorunarchived/true")
    data
      .then((content) => {
        setContent(content.projects)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) setError(error.response.data)
        setLoading(false)
      })
  }, [])

  console.error(error !== null && error)

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
                <Link className={classes.button} to="/mentor/new-project">
                  New Project
                </Link>
                {user === "admin" && (
                  <Link
                    className={classes.button}
                    to="/admin/archived-projects"
                  >
                    View Archived
                  </Link>
                )}
              </div>
              <div className={classes.secondBar}>
                {contents?.map((project) => (
                  <ProjectCard
                    key={project?._id}
                    id={project?._id}
                    pageType="project"
                    title={project?.topic}
                    content={project?.projectDescription}
                    category={project?.track?.name}
                    publicAccess={project?.showmanAccess}
                    team={project?.team?.team_name}
                    author={project?.author}
                    archivedItem={true}
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

export default ArchivedLearningContent

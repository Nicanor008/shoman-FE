import { CircularProgress } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"


function MentorProject() {
  const classes = CommonDashboardStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [projects, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const data = GetData("/projects")
    data
      .then((project) => {
        setProject(project.projects)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) setError(error.response.data)
        setLoading(false)
      })
  }, [])

  console.error(error)

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />

      <div className={classes.root} style={{ minHeight: height }}>
        <DashboardLayout userRole="mentee">
          {loading ? (
            <CircularProgress />
          ) : (
            <div className={classes.secondBar}>
              {projects?.map((project) => (
                <ProjectCard
                  key={project?._id}
                  id={project?._id}
                  pageType="project"
                  title={project?.topic}
                  content={project?.projectDescription}
                  category={project?.track?.name}
                  userType="mentee"
                  duration={project?.duration}
                />
              ))}
            </div>
          )}
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default MentorProject

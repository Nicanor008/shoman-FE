import { CircularProgress } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"
import { baseUrl } from "../../utils/services/api"
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"
import { toastNotification } from "../../utils/helpers/toaster"

function MentorProject() {
  const classes = CommonDashboardStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [projects, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  let user = JSON.parse(localStorage.getItem("user"))
  user = user && user.userType

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

  // handle delete/archive project
  const HandleDeleteProject = (id) => {
    const token = localStorage.getItem("token")
    axios.defaults.headers.common["Authorization"] = token
    axios
      .delete(`${baseUrl}/projects/${id}`)
      .then((deletedContent) => {
        toastNotification("success", deletedContent.message)
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      })
      .catch((error) => {
        toastNotification("error", error.response.data.message)
      })
  }

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
                <Link className={classes.button} to="#">
                  View Done Projects
                </Link>
              </div>
              <div className={classes.secondBar}>
                {projects?.map((project) => (
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
                    deleteItem={HandleDeleteProject}
                    editLink={`/mentor/edit/project/${project?._id}`}
                  />
                ))}
                {projects === null && <h4>No Projects Available</h4>}
              </div>
            </>
          )}
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default MentorProject

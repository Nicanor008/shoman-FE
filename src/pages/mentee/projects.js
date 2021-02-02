import { CircularProgress, makeStyles } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#DED5EA",
  },
  topBar: {},
  secondBar: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: "rebeccapurple",
    color: "white",
  },
}))
function MentorProject() {
  const classes = useStyles()

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

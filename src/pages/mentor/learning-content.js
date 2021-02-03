import { CircularProgress } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"
import { toastNotification } from "../../utils/helpers/toaster"
import { baseUrl } from "../../utils/services/api"

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
      setCurrentUserTeam(team.data && team.data.team_name)
    })
  }, [])

  // delete learning content
  const HandleDeleteLearningContent = (id) => {
    const token = localStorage.getItem("token")
    axios.defaults.headers.common["Authorization"] = token
    axios
      .delete(`${baseUrl}/contents/${id}`)
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
                <Link
                  className={classes.button}
                  to="/mentor/new-learning-content"
                >
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
                    publicAccess={
                      content?.focusGroup === "shoman" ? true : false
                    }
                    duration={content?.estimatedDuration}
                    deadline={content?.deadline}
                    team={currentUserTeam}
                    deleteItem={HandleDeleteLearningContent}
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

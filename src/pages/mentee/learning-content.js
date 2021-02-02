import { CircularProgress } from "@material-ui/core"
import React, { useState, useEffect } from "react"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { GetData } from "../../utils/services/api"
import { ProjectCard } from "../../components/dashboard/projects/projectCard"
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"

function MenteeLearningContent() {
  const classes = CommonDashboardStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [contents, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  console.error(error !== null && error)

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />

      <div className={classes.root} style={{ minHeight: height }}>
        <DashboardLayout userRole="mentee">
          {loading ? (
            <CircularProgress />
          ) : (
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
                  team=""
                />
              ))}
              {contents === null && <h4>No Projects Available</h4>}
            </div>
          )}
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default MenteeLearningContent

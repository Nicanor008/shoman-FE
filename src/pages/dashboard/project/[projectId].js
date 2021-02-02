import { CircularProgress, makeStyles } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { UserContextProvider } from "../../../state/users/user.context"
import DashboardLayout from "../../../components/dashboard/layout/dashboard_layout"
import { GetData } from "../../../utils/services/api"
import SEO from "../../../components/seo"
import { toastNotification } from "../../../utils/helpers/toaster"
import { CommonDashboardStyles } from "../../../styles/common_dashboard_styles"
import { Link } from "gatsby"

const useStyles = makeStyles(() => ({
  topBar: {
    background: "#CCBEE3",
    padding: "0.7rem 2rem",
    borderRadius: "9px 8px 0 0",
    display: "flex",
  },
  topBarContent: {
    paddingRight: "1rem",
  },
  arrow: {
    color: "rebeccapurple",
    cursor: "pointer",
  },
}))
function SingleProject(props) {
  const contentStyles = useStyles()
  const classes = CommonDashboardStyles()

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const user = JSON.parse(localStorage.getItem("user")).userType
  const projectId = props.params.projectId

  useEffect(() => {
    setLoading(true)
    const data = GetData(`/projects/${projectId}`)
    data
      .then((content) => {
        setContent(content.project)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) {
          toastNotification("error", error.response.data.message)
          setTimeout(() => {
            window.location.href =
              user === "mentee" ? "/mentee/projects" : "/mentor/projects"
          }, 3000)
          setError(error.response.data)
        }
        setLoading(false)
      })
  }, [user, projectId])

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />

      <div className={classes.root} style={{ minHeight: height }}>
        <DashboardLayout userRole={user}>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <div className={contentStyles.topBar}>
                {content && (
                  <>
                    <Link
                      to={
                        user === "mentee"
                          ? "/mentee/projects"
                          : "/mentor/projects"
                      }
                    >
                      <ArrowBackIcon className={contentStyles.arrow} />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    {content?.track && (
                      <>
                        <span className={contentStyles.topBarContent}>
                          {content?.track?.name}
                        </span>{" "}
                        |&nbsp;&nbsp;&nbsp;
                      </>
                    )}
                    {content?.team && (
                      <>
                        <span className={contentStyles.topBarContent}>
                          {content?.team?.team_name}
                        </span>{" "}
                        |&nbsp;&nbsp;&nbsp;{" "}
                      </>
                    )}
                    <span className={contentStyles.topBarContent}>
                      Appr. Duration - {content?.duration}
                    </span>
                  </>
                )}
              </div>
              <div className={classes.secondBar}>
                {error && <p>{error.message}</p>}

                <div>
                  <h1>{content?.topic}</h1>
                  <p>{content?.projectDescription}</p>
                </div>
              </div>
            </>
          )}
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default SingleProject

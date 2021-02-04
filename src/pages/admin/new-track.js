import { Button, FormControl, TextField } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import React, { useState } from "react"
import TagsInput from "react-tagsinput"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { NewProjectStyles } from "../../components/dashboard/projects/styles/new-project-styles"
import { toastNotification } from "../../utils/helpers/toaster"
import { PostWithToken } from "../../utils/services/api"
import "react-tagsinput/react-tagsinput.css"

function NewTrack() {
  const classes = NewProjectStyles()
  const [data, setData] = useState({})
  const [error, setPostErrors] = useState(null)
  const [languages, setLanguages] = useState([])
  const [application_areas, setApplicationAreas] = useState([])

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  //   handle input change
  const handleInputChange = (e) => {
    return setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  //   submit data
  const submitProject = () => {
    PostWithToken(
      "/tracks",
      "post",
      Object.assign({}, data, { languages }, { application_areas })
    )
      .then((response) => {
        if (response.status === "error") {
          setPostErrors(response.errors)
          return toastNotification("error", response.errors.name)
        }
        toastNotification("success", response.message)
        setTimeout(() => {
          window.location.href = "/admin/tracks"
        }, 2000)
      })
      .catch((error) => {
        if (error.response) {
          setPostErrors(error.response.data)
          return toastNotification("error", error.response.data.message)
        } else if (error.request)
          return toastNotification("error", "Connection Broken. Try again.")
      })
  }

  const handlelanguagesOnChange = (tags) => {
    setLanguages(tags)
  }

  const handleApplicationAreasOnChange = (tags) => {
    setApplicationAreas(tags)
  }

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />

      <div className={classes.root} style={{ minHeight: height }}>
        <DashboardLayout userRole="admin">
          <h3 className={classes.title}>New Track/Stack</h3>
          <div className={classes.body}>
            {/* topic */}
            <FormControl>
              <TextField
                id="name"
                label="Track/Stack Name"
                required
                variant="outlined"
                onChange={handleInputChange}
                name="name"
                required
                error={error && error.topic && true}
                style={{ width: "100% !important" }}
              />
            </FormControl>

            <div style={{ width: "50%" }}>
              <br />
              Programming Languages
              <TagsInput value={languages} onChange={handlelanguagesOnChange} />
              <br />
              Application Areas
              <TagsInput
                value={application_areas}
                onChange={handleApplicationAreasOnChange}
              />
            </div>

            {/* submit button */}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={submitProject}
            >
              Create New Track
            </Button>
          </div>
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default NewTrack

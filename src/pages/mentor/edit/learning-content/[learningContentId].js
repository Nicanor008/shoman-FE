import {
    Button,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
  } from "@material-ui/core"
  import AddIcon from "@material-ui/icons/Add"
  import React, { useState, useEffect } from "react"
  import SEO from "../../../../components/seo"
  import { UserContextProvider } from "../../../../state/users/user.context"
  import { ApplyFormStyles } from "../../../../components/auth/apply/applyForm"
  import { NewProjectStyles } from "../../../../components/dashboard/projects/styles/new-project-styles"
  import { toastNotification } from "../../../../utils/helpers/toaster"
  import { GetData, PostWithToken } from "../../../../utils/services/api"
  import DashboardLayout from "../../../../components/dashboard/layout/dashboard_layout"
  
  function NewLearningContent(props) {
    const classes = NewProjectStyles()
    const externalClasses = ApplyFormStyles()
    const [tracks, setTracks] = useState(null)
    const [learningContent, setLearningContent] = useState(null)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState({
      focusGroup: "",
      category: "",
    })
    const [error, setPostErrors] = useState(null)
  
    let height
    if (typeof window !== "undefined") {
      height = window.innerHeight
    }

    const learningContentId = props.params.learningContentId

    useEffect(() => {
        setLoading(true)
        GetData(`/contents/${learningContentId}`).then(content => {
            if(content.status === "error") window.location.href = "/mentor/learning-content"
            setLoading(false)
            setLearningContent(content.data)
            setData({
                ...data,
                focusGroup: content.data.focusGroup,
                category: content.data.category,
                topic: content.data.topic,
                estimatedDuration: content.data.estimatedDuration,
                deadline:content.data.deadline,
                content: content.data.content
            })
        }).catch(error => {
            setLoading(false)
            if(error) window.location.href = "/mentor/learning-content"

        })
        return null
    }, [])
  
    useEffect(() => {
      GetData("/tracks").then((tracks) => {
        setTracks(tracks.tracks)
      })
    }, [])
  
    //   handle input change
    const handleInputChange = (e) => {
      return setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    }
  
    //   submit data
    const submitProject = () => {
      PostWithToken(`/contents/${learningContentId}`, "patch", data)
        .then((response) => {
          if (response.status === "error") {
            setPostErrors(response.errors)
            return toastNotification("error", response.message)
          }
          toastNotification("success", response.message)
          setTimeout(() => {
            window.location.href = "/mentor/learning-content"
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
  
    const focusGroup = ["my mentees", "shoman"]

    console.log(learningContent);
  
    return (
      <UserContextProvider>
        <SEO title="Dashboard" />
  
        <div className={classes.root} style={{ minHeight: height }}>
          <DashboardLayout userRole="mentor">
              {loading ? <CircularProgress /> : <>
            <h3 className={classes.title}>Edit Learning Content</h3>
            <div className={classes.body}>
              <FormControl className={externalClasses.formControl}>
                <InputLabel
                  id="demo-simple-select-label"
                  className={classes.label}
                  variant="outlined"
                >
                  Category
                </InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  className={externalClasses.label}
                  onChange={handleInputChange}
                  name="category"
                  value={data?.category}
                >
                  {tracks?.map((track) => (
                    <MenuItem value={track?._id} key={Math.random()}>
                      {track?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <br />
  
              {/* topic */}
              <FormControl>
                <TextField
                  id="topic"
                  label="Topic"
                  variant="outlined"
                  value={data?.topic}
                  onChange={handleInputChange}
                  name="topic"
                  required
                  error={error && error.topic && true}
                />
              </FormControl>
  
              <Grid className={classes.groupedInputs}>
                {/* Estimated Duration */}
                <Grid item xs={12} md={4}>
                  <FormControl>
                    <TextField
                      id="duration"
                      label="Estimated Duration"
                      variant="outlined"
                  value={data?.estimatedDuration}
                  onChange={handleInputChange}
                      name="estimatedDuration"
                      required
                      error={error && error.duration && true}
                    />
                  </FormControl>
                </Grid>
  
                <Grid item xs={12} md={3}>
                  <FormControl className={classes.container} noValidate>
                    <TextField
                      id="dueDate"
                      label="Due Date(Deadline)"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={handleInputChange}
                      name="deadline"
                      required
                    />
                  </FormControl>
                </Grid>
  
                <Grid item xs={12} md={5}>
                  {/* team */}
                  <FormControl className={externalClasses.formControl}>
                    <InputLabel
                      id="focusGroup-label"
                      className={classes.label}
                      variant="outlined"
                    >
                      Focus Group
                    </InputLabel>
                    <Select
                      labelId="focusGroup-label"
                      id="focusGroup"
                      className={externalClasses.label}
                      onChange={handleInputChange}
                      name="focusGroup"
                      value={data?.focusGroup}
                    >
                      {focusGroup.map((group) => (
                        <MenuItem value={group} key={Math.random()}>
                          {group}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl>
                <TextareaAutosize
                  aria-label="Learning Content Description"
                  rowsMin={3}
                  placeholder="Learning Content Description"
                  className={classes.textArea}
                  name="content"
                  value={data?.content}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
  
              {/* submit button */}
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={submitProject}
              >
                Create Project
              </Button>
            </div>
          </>}
          </DashboardLayout>
        </div>
      </UserContextProvider>
    )
  }
  
  export default NewLearningContent
  
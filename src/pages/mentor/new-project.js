import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import React, { useState, useEffect } from "react"
import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { ApplyFormStyles } from "../../components/auth/apply/applyForm"
import { CheckboxInput } from "../../components/commons/inputs/checkbox"
import { NewProjectStyles } from "../../components/dashboard/projects/styles/new-project-styles"
import { toastNotification } from "../../utils/helpers/toaster"
import { GetData, PostWithToken } from "../../utils/services/api"

function NewProject() {
  const classes = NewProjectStyles()
  const externalClasses = ApplyFormStyles()
  const [tracks, setTracks] = useState(null)
  const [currentUserTeam, setCurrentUserTeam] = useState(null)
  const [teams, setTeams] = useState(null)

  const [data, setData] = useState({
    trackId:
      currentUserTeam && currentUserTeam.track && currentUserTeam.track._id,
    topic: "",
    projectDescription: "",
    duration: "",
    team: currentUserTeam && currentUserTeam._id,
    showmanAccess: false,
  })
  const [error, setPostErrors] = useState(null)

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  useEffect(() => {
    GetData("/tracks").then((tracks) => {
      setTracks(tracks.tracks)
    })
  }, [])

  useEffect(() => {
    // get current user team, if available
    GetData("/teams/current-user").then((team) => {
      setData({
        ...data,
        trackId: team.data && team.data.track && team.data.track._id,
        team: team.data && team.data._id,
      })
      setCurrentUserTeam(team.data)
    })
  }, [])

  useEffect(() => {
    GetData("/teams").then((team) => {
      setTeams(team.teams)
    })
  }, [])

  //   handle input change
  const handleInputChange = (e) => {
    return setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    })
  }

  //   submit data
  const submitProject = () => {
    PostWithToken("/projects", "post", data)
      .then((response) => {
        if (!response.message) {
          setPostErrors(response)
          return toastNotification("error", "Error, check on required fields.")
        }
        toastNotification("success", response.message)
        setTimeout(() => {
          window.location.href = "/mentor/projects"
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

  return (
    <UserContextProvider>
      <SEO title="Dashboard" />

      <div className={classes.root} style={{ minHeight: height }}>
        <DashboardLayout userRole="mentor">
          <h3 className={classes.title}>New Project</h3>
          <div className={classes.body}>
            <FormControl className={externalClasses.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className={externalClasses.label}
                onChange={handleInputChange}
                name="trackId"
                value={data?.trackId}
              >
                {tracks?.map((track) => (
                  <MenuItem value={track?._id}>{track?.name}</MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Category - Optional: Your main Track will be used
              </FormHelperText>
            </FormControl>
            <br />
            <br />

            {/* topic */}
            <FormControl>
              <TextField
                id="topic"
                label="Topic"
                variant="outlined"
                onChange={handleInputChange}
                name="topic"
                required
                error={error && error.topic && true}
              />
            </FormControl>

            <Grid className={classes.groupedInputs}>
              {/* Estimated Duration */}
              <Grid item xs={12} md={2}>
                <FormControl>
                  <TextField
                    id="duration"
                    label="Duration"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="duration"
                    required
                    error={error && error.duration && true}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={3}>
                <FormControl className={classes.container} noValidate>
                  <TextField
                    id="dueDate"
                    label="Due Date"
                    type="date"
                    defaultValue="today"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="deadline"
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                {/* <FormGroup row> */}
                <CheckboxInput
                  label={`Allow Access to everybody in shoman?`}
                  name="showmanAccess"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                {/* team */}
                <FormControl className={externalClasses.formControl}>
                  <Select
                    labelId="team"
                    id="team"
                    className={externalClasses.label}
                    onChange={handleInputChange}
                    name="team"
                    value={data?.team}
                  >
                    {teams?.map((team) => (
                      <MenuItem value={team?._id}>{team.team_name}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    Team - Optional: Your team will be used
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl>
              <TextareaAutosize
                aria-label="project description"
                rowsMin={3}
                placeholder="Project Description"
                className={classes.textArea}
                name="projectDescription"
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
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default NewProject

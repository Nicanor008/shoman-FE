import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import React, { useState, useEffect } from "react"
import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { UserContextProvider } from "../../state/users/user.context"
import { ApplyFormStyles } from "../../components/auth/apply/applyForm"
import { NewProjectStyles } from "../../components/dashboard/projects/styles/new-project-styles"
import { toastNotification } from "../../utils/helpers/toaster"
import { GetData, PostWithToken } from "../../utils/services/api"

function NewTeam() {
  const classes = NewProjectStyles()
  const externalClasses = ApplyFormStyles()
  const [tracks, setTracks] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [mentees, setMentees] = useState(null)
  const [mentors, setMentors] = useState(null)
  const [data, setData] = useState({
    menteesId: [],
    mentorId: "",
    team_name: "",
  })
  const [error, setPostErrors] = useState(null)

  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight
  }

  //   GET all tracks
  useEffect(() => {
    GetData("/tracks").then((tracks) => {
      setTracks(tracks.tracks)
    })
    return null
  }, [])

  //   current user team details
  useEffect(() => {
    GetData("/teams/current-user").then((team) => {
      setCurrentTrack(team.data && team.data.main_trackId)
    })
    return null
  }, [])

  //   current user details
  useEffect(() => {
    GetData("/users/current-user").then((user) => {
      setData({
        ...data,
        mentorId: user.data && user.data._id,
      })
    })
    return null
  }, [])

  // get all mentees
  useEffect(() => {
    GetData("/users/filter-by-role/mentee").then((user) => {
      setMentees(user.data)
    })
    GetData("/users/filter-by-role/mentor").then((user) => {
      setMentors(user.data)
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
    PostWithToken(
      "/teams",
      "post",
      Object.assign({}, data, { trackId: currentTrack !== null ? currentTrack : data.trackId })
    )
      .then((response) => {
        if (response.status === "error") {
          setPostErrors(response.errors)
          return toastNotification("error", response.message)
        }
        toastNotification("success", response.message)
        setTimeout(() => {
          window.location.href = "/admin/teams"
        }, 4000)
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
        <DashboardLayout userRole="admin">
          <h3 className={classes.title}>New Team</h3>
          <div className={classes.body}>
            <FormControl className={externalClasses.formControl}>
              <Select
                labelId="category-label"
                id="category"
                className={externalClasses.label}
                onChange={handleInputChange}
                name="trackId"
                value={currentTrack !== null ? currentTrack : data.trackId}
              >
                {tracks?.map((track) => (
                  <MenuItem value={track?._id} key={Math.random()}>
                    {track?.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Category</FormHelperText>
            </FormControl>
            <br />
            <br />

            {/* topic */}
            <FormControl>
              <TextField
                id="team_name"
                label="team_name"
                variant="outlined"
                onChange={handleInputChange}
                name="team_name"
                required
                error={error && error.topic && true}
              />
            </FormControl>

            {/* mentees */}
            <FormControl className={externalClasses.formControl}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.label}
                variant="outlined"
              >
                Mentee(s)
              </InputLabel>
              <Select
                labelId="menteesId-label"
                id="menteesId"
                multiple
                className={externalClasses.label}
                onChange={handleInputChange}
                name="menteesId"
                value={data.menteesId}
              >
                {mentees?.map((mentee) => (
                  <MenuItem value={mentee?._id} key={Math.random()}>
                    {mentee?.Username}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />

            {/* mentor */}
            <FormControl className={externalClasses.formControl}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.label}
                variant="outlined"
              >
                Mentor(s)
              </InputLabel>
              <Select
                labelId="mentorId-label"
                id="mentorId"
                className={externalClasses.label}
                onChange={handleInputChange}
                name="mentorId"
                value={data.mentorId}
              >
                {mentors?.map((mentor) => (
                  <MenuItem value={mentor?._id} key={Math.random()}>
                    {mentor?.Username}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />



            {/* submit button */}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={submitProject}
            >
              Create a New TEAM
            </Button>
          </div>
        </DashboardLayout>
      </div>
    </UserContextProvider>
  )
}

export default NewTeam

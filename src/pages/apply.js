import React from "react"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/apply.scss"

function HomePage() {
  const [age, setAge] = React.useState("")
  const [experience, setExperience] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const [experienceOpen, setExperienceOpen] = React.useState(false)

  const handleChange = event => {
    setAge(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleChangeExperience = event => {
    setExperience(event.target.value)
  }

  const handleOpenExperience = () => {
    setExperienceOpen(true)
  }

  const handleCloseExperience = () => {
    setExperienceOpen(false)
  }

  return (
    <Layout>
      <SEO title="Shoman" />
      <div className="applyWrapper">
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <form noValidate autoComplete="off">
              {/* name */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input required id="name" name="name" />
              </FormControl>

              {/* email address  */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  required
                  type="password"
                  id="email"
                  name="email"
                  aria-describedby="email-helper-text"
                />
                <FormHelperText id="email-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>

              {/* path */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="path">Learning path</InputLabel>
                <Select
                  labelId="path"
                  id="path"
                  name="path"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={age}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"frontend"}>Frontend Developer</MenuItem>
                  <MenuItem value={"backend"}>Backend Developer</MenuItem>
                  <MenuItem value={"fullstack"}>FullStack Developer</MenuItem>
                </Select>
              </FormControl>

              {/* occupation */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="occupation">
                  What you currently doing
                  <occupation />
                </InputLabel>
                <Input required id="occupation" name="occupation" />
              </FormControl>

              {/* Level of experience/coding level */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="experience">
                  What's your experience with coding
                </InputLabel>
                <Select
                  labelId="experience"
                  id="experience"
                  name="experience"
                  open={experienceOpen}
                  onClose={handleCloseExperience}
                  onOpen={handleOpenExperience}
                  value={experience}
                  onChange={handleChangeExperience}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Novice"}>Novice(Beginner)</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Expert"}>Expert</MenuItem>
                </Select>
              </FormControl>

              <br /><br />

              <Button color="primary" variant="contained" disableElevation>Submit</Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default HomePage

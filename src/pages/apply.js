import React, { useState, useEffect } from "react"
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
//   const [path, setPath] = useState("")
//   const [experience, setExperience] = useState("")
//   const [open, setOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [userData, setUserData] = useState({
    open: false,
    loading: false,
    name: "",
    path: "",
    experience: "",
    email: "",
    occupation: "",
  })

  const { open, name, email, path, experience, occupation } = userData;

  const submitUserData = () => {
    setUserData({loading: true})
    fetch("http://localhost:3001/v1/auth/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
          name, email, path: path, password:"123455", codingLevel: experience, occupation
      }),
    })
      .then(results => results.json())
      .then(data => {
        setUserData({
          loading: false,
        })
        console.log(">>>>>>>>>>>>>", data)
      })
  }

  const handleUserInputOnchange = (e) => {
    //   if([e.target.name] === 'name') {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    //   } else if([e.target.email] === 'email'){
    //     setUserData({ email: e.target.value })
    //   } else if([e.target.occupation] === 'occupation'){
    //     setUserData({ occupation: e.target.value })
    //   }
  }

  const handleChange = e => {
    setUserData({...userData, [e.target.name]: e.target.value})
    // setPath(event.target.value)
  }

  const handleClose = () => {
    setUserData({ open: false })
    // setOpen(false)
  }

  const handleOpen = () => {
    setUserData({ open: true })
    // setOpen(true)
  }

  const handleChangeExperience = e => {
    setUserData({...userData, [e.target.name]: e.target.value})
    // setExperience(event.target.value)
  }

  const handleOpenExperience = () => {
    setExperienceOpen(true)
  }

  const handleCloseExperience = () => {
    setExperienceOpen(false)
  }


  return (
    <Layout>
      <SEO title="Apply" />
      {console.log(">>>>....?>>>>>>>>>...............", open)}
      <div className="applyWrapper">
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <form noValidate autoComplete="off">
              {/* name */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input required id="name" name="name" onChange={handleUserInputOnchange}/>
              </FormControl>

              {/* email address  */}
              <FormControl size="medium" fullWidth className="formInput">
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  required
                //   type="email"
                  id="email"
                  name="email"
                  aria-describedby="email-helper-text"
                  onChange={handleUserInputOnchange}
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
                  value={path}
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
                <Input required id="occupation" name="occupation" onChange={handleUserInputOnchange} />
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

              <br />
              <br />

              <Button color="primary" variant="contained" disableElevation onClick={submitUserData}>
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default HomePage

import { CircularProgress, makeStyles } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { GetData } from "../../../../utils/services/api"
import UserDetailsText from "./user_details_text"

const useStyles = makeStyles(() => ({
  root: {
    padding: "1rem 4rem",
    textAlign: "center",
    width: "100%",
    position: "relative",
  },
  footer: {
    bottom: 10,
    position: "absolute",
    textAlign: "left",
  },
}))

function UserDetails({ height, teamDetails }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    setLoading(true)
    GetData("/users/current-user")
      .then((user) => {
        setLoading(false)
        setData(user.data)
      })
      .catch((error) => {
        if (error.response) setError(error.response.data)
        setLoading(false)
      })
  }, [])

  console.error(error)

  return (
    <div className={classes.root} style={{ minHeight: height - 155 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <img
            src="https://res.cloudinary.com/nicanor/image/upload/v1611324478/User_Profile_Icon.svg"
            alt="user profile"
          />
          <>
            <UserDetailsText
              labelText="Username:-"
              labelValue={data?.Username}
            />
            <UserDetailsText labelText="Email:-" labelValue={data?.email} />
            <UserDetailsText
              labelText="Team Name:"
              labelValue={teamDetails?.team_name}
            />
            <UserDetailsText
              labelText="Team No."
              labelValue={data?.teamNumber}
            />
            <UserDetailsText
              labelText="You logged in as: "
              labelValue={data?.userType}
            />
            <UserDetailsText
              labelText="Active Since:-"
              labelValue={new Date().toLocaleDateString()}
            />
          </>

          {/* footer */}
          <div className={classes.footer}>
            Shoman Contacts:
            <br /> <b>shomancodes@gmail.com</b>
          </div>
        </>
      )}
    </div>
  )
}

export default UserDetails

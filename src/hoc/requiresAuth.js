import { navigate } from "@reach/router"
import React, { useContext, useEffect, Fragment } from "react"
import { UserContext } from "../state/users/user.context"

const RequiresAuth = ({ children }) => {
  const userContext = useContext(UserContext)

  // we use useEffect here to execute this logic only when the component mounts,
  // this is to prevent ssr since localStorage is browser API
  useEffect(() => {
    ensureAuth()
  })

  const ensureAuth = () => {
    const user = localStorage.getItem("user")
    // if there is no user, redirect to sign in
    if (!user) {
      navigate("/auth/")
    }

    const currentUser = JSON.parse(user)

    // if there's a user but missing id or not verified, redirect to login
    if (!currentUser?._id || currentUser?.isVerified === false) {
      navigate("/auth/")
    }

    // set this user to context, with persistence enabled
    // it's good to note that this component wraps all components that requires users to be authenticated,
    // and logic in here runs for every page reload or every page navigation
    // it will only update the context if no user exists
    if (!userContext.state?.user?._id && typeof window !== "undefined") {
      window.document.cookie = `token=${localStorage.getItem("token")}; path=/;`
      return userContext.dispatch({
        type: "SIGNIN_USER",
        payload: {
          authenticated: true,
          token: localStorage.getItem("token"),
          user: currentUser,
        },
      })
    }
  }
  return <Fragment>{children}</Fragment>
}

export default RequiresAuth

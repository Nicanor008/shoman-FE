import React, { createContext, useReducer } from "react"

/**
 *
 */
export const UserInitialState = {
  authenticated: false,
  token: null,
  user: {},
}

export const UserContext = createContext({
  state: UserInitialState,
})

/**
 *
 * 
 * 
 */
export const UserReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      return { ...state, ...action.payload }

    case "UPDATE_USER":
      return { ...state, ...action.payload }

    case "SIGNOUT_USER":
      return { ...UserInitialState }

    default:
      return state
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, UserInitialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

//@ts-check
import axios from "axios"
import { useContext } from "react"
// require("dotenv").config()

import { UserContext } from "../../../state"

const baseUrl =
  process.env.REACT_APP_BASE_URL || "http://127.0.0.1:4000/api/v1"

/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 * @param useAuth - if true, authorization header is added
 */
export const apiPostRequest = async (
  url,
  method,
  bodyParams,
  useAuth = true,
  authHeader = null
) => {
  try {
    const requestUrl = baseUrl + url
    if (useAuth) {
      axios.defaults.headers.common["Authorization"] = authHeader
    }
    const response = await axios.post(requestUrl, bodyParams)
    const { data } = response
    return data
  } catch (error) {
    const {
      response: { data },
    } = error
    return data
  }
}

export const GetData = async (url) => {
  const userContext = useContext(UserContext)
  const requestUrl = baseUrl + url
  const { token } = userContext.state
  const authHeader = `Bearer ${token}`
  axios.defaults.headers.common["Authorization"] = authHeader
  const response = await axios.get(requestUrl)
  const { data } = response
  return data
}

export const PostWithToken = async (url, method, data) => {
  const userContext = useContext(UserContext)
  const { token } = userContext.state
  const authHeader = `Bearer ${token}`
  const responseData = await apiPostRequest(url, method, data, true, authHeader)
  return responseData
}

export const postData = async (url, data, useAuth) => {
  const responseData = await apiPostRequest(url, "post", data, false)
  return responseData
}

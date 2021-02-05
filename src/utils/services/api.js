import axios from "axios"

export const baseUrl = process.env.GATSBY_API_URL

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
  const token = localStorage.getItem("token")
  const requestUrl = baseUrl + url
  axios.defaults.headers.common["Authorization"] = token
  const response = await axios.get(requestUrl)
  const { data } = response
  return data
}

export const PostWithToken = async (url, method, data) => {
  const token = localStorage.getItem("token")
  const authHeader = token
  const responseData = await apiPostRequest(url, method, data, true, authHeader)
  return responseData
}

export const postData = async (url, data, useAuth) => {
  const responseData = await apiPostRequest(url, "post", data, false)
  return responseData
}

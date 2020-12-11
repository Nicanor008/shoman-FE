//@ts-check
import { verify } from "jsonwebtoken"

export const verifyToken = (token) => {
  return verify(
    token,
    'secret',
    (error, decodedToken) => {
      if (error) {
        console.log(error)
        return false
      }
      return true
    }
  )
}

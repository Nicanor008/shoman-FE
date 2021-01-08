import { toast, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const toastNotification = (actionType, message) => {
  toast.configure()
  switch (actionType) {
    case "success":
      // @ts-ignore
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        transition: Zoom,
      })
      break
    case "warning":
      // @ts-ignore
      toast.warning(message, {
        position: toast.POSITION.TOP_CENTER,
        transition: Zoom,
      })
      break
    case "error":
      // @ts-ignore
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        transition: Zoom,
      })
      break
    default:
  }
}

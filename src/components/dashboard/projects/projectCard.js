import React, { useState } from "react"
import EditIcon from "@material-ui/icons/Edit"
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep"
import { ProjectCardStyles } from "../../../styles/common_dashboard_styles"
import { Link } from "gatsby"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

export function ProjectCard({
  title,
  content,
  category,
  publicAccess,
  team,
  userType,
  duration,
  deadline,
  id,
  author,
  pageType,
  deleteItem,
  archivedItem,
  editLink
}) {
  const classes = ProjectCardStyles()
  let user
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user"))._id
  }
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      {/* header */}
      <div className={classes.header}>
        <p className={classes.categoryHeader}>{category}</p>
        {(userType !== "mentee" && author === user || archivedItem) && (
          <div className={classes.icons}>
            <Link to={editLink}><EditIcon className={classes.editIcon} /></Link>
            <DeleteSweepIcon
              className={classes.deleteIcon}
              onClick={handleOpen}
            />
          </div>
        )}
      </div>

      <Link
        to={
          pageType === "project"
            ? `/dashboard/project/${id}`
            : `/dashboard/learning-content/${id}`
        }
        className={classes.link}
      >
        {/* body */}
        <div className={classes.body}>
          <h3>{title}</h3>
          <p>{content.substr(0, 75).concat("...")}</p>
          <div>
            {userType !== "mentee" && (
              <span className={classes.publicAccessStatus}>
                {publicAccess
                  ? "Visible to all Shoman"
                  : `Team access - ${team}`}
              </span>
            )}
            {userType === "mentee" && (
              <div className={classes.time}>
                {duration && (
                  <span className={classes.publicAccessStatus}>
                    Approximate Duration {duration}
                  </span>
                )}
                {deadline && (
                  <span className={classes.publicAccessStatus}>
                    Due Date {deadline}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* modal/pop up */}
      <DeleteDialog handleClose={handleClose} open={open} deleteItem={deleteItem} id={id} />
    </div>
  )
}

export const DeleteDialog = ({ handleClose, open, deleteItem, id }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This will give access to Shoman Admin to manipulate this learning. You
          won't view this item again
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => deleteItem(id)} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

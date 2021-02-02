import React from "react"
import EditIcon from "@material-ui/icons/Edit"
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep"
import { ProjectCardStyles } from "../../../styles/common_dashboard_styles"

export function ProjectCard({
  title,
  content,
  category,
  publicAccess,
  team,
  userType,
  duration,
  deadline,
  author,
}) {
  const classes = ProjectCardStyles()
  const user = JSON.parse(localStorage.getItem("user"))._id

  return (
    <div className={classes.root}>
      {/* header */}
      <div className={classes.header}>
        <p className={classes.categoryHeader}>{category}</p>
        {userType !== "mentee" && author === user && (
          <div className={classes.icons}>
            <EditIcon className={classes.editIcon} />
            <DeleteSweepIcon className={classes.deleteIcon} />
          </div>
        )}
      </div>

      {/* body */}
      <div className={classes.body}>
        <h3>{title}</h3>
        <p>{content.substr(0, 75).concat("...")}</p>
        <div>
          {userType !== "mentee" && (
            <span className={classes.publicAccessStatus}>
              {publicAccess ? "Visible to all Shoman" : `Team access - ${team}`}
            </span>
          )}
          {userType === "mentee" && (
            <div className={classes.time}>
              <span className={classes.publicAccessStatus}>
                Approximate Duration {duration}
              </span>
              <span className={classes.publicAccessStatus}>
                Due Date {deadline}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

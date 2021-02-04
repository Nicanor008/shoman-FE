import { CircularProgress, List } from "@material-ui/core"
import React from "react"
import CardTitle from "../card_title"
import LearningProgressItem from "../learning_progress_item"
import MentorIcon from "../../../../../images/dashboard/mentorIcon.svg"
import MenteeIcon from "../../../../../images/dashboard/menteeIcon.svg"

const UserTeamDetails = ({ classes, data, loading, error }) => {

  return (
    <div>
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <>
          {error && <p style={{ color: "red" }}>{error.message}</p>}
          {/* team details */}
          {data && (
            <List className={`${classes.root}  learningProgressWrapper`}>
              <CardTitle title={data?.data?.team_name} />
              {data?.data?.mentor && (
                <LearningProgressItem
                  icon={MentorIcon}
                  stack={data?.data?.mentor?.userType}
                  title={data?.data?.mentor?.Username}
                />
              )}

              {data?.mentees?.map((mentee) => (
                <LearningProgressItem
                  icon={MenteeIcon}
                  stack={mentee?.userType}
                  title={mentee?.Username}
                  key={mentee?._id}
                />
              ))}
            </List>
          )}
        </>
      )}
    </div>
  )
}

export default (UserTeamDetails)

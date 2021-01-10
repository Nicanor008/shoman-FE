import { CircularProgress, List } from "@material-ui/core"
import React from "react"
import CardTitle from "../card_title"
import LearningProgressItem from "../learning_progress_item"

const UserTeamDetails = ({ classes, data, loading, error, mentees }) => {
  // console.log(">>>>>>>>>>..........", mentees)

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
              <CardTitle title={data.team_name} />
              {data.mentor && (
                <LearningProgressItem
                  icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number1.svg"
                  stack={data.mentor?.userType}
                  title={data.mentor?.Username}
                />
              )}

              {mentees?.map((mentee) => (
                <LearningProgressItem
                  icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number1.svg"
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

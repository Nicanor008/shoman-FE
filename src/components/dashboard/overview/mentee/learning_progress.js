import { List, makeStyles } from "@material-ui/core"
import React from "react"
import CardTitle from "./card_title"
import LearningProgressItem from "./learning_progress_item"
import "./mentee.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  title: {
    fontSize: "20px",
    fontWeight: 'bold'
  },
}))

function MenteeLearningProgressOverview() {
  const classes = useStyles()

  return (
    <List className={`${classes.root}  learningProgressWrapper`}>
      <CardTitle title="Shoman Mentorship Roadmap" />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number1.svg"
        stack="General"
        title="Onboarding, getting to know each other"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number2.svg"
        stack="General"
        title="Join a team of 2/3 led by a mentor"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number3.svg"
        stack="Specific to Chosen Path"
        title="Introduction Content"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number4.svg"
        stack="General"
        title="Weekly Talks"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number5.svg"
        stack="Specific to Chosen Path"
        title="Weekly Learning Content"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number6.svg"
        stack="Specific to Chosen Path"
        title="Daily/Weekly one-on-one meeting(s)"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number7.svg"
        stack="General"
        title="Shoman General meeting Checkins"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number8.svg"
        stack="General"
        title="Final Project"
      />
      <LearningProgressItem
        icon="https://res.cloudinary.com/nicanor/image/upload/v1611155831/numbering/number9.svg"
        stack="General"
        title="Feedback & Recommendation"
      />
    </List>
  )
}

export default MenteeLearningProgressOverview

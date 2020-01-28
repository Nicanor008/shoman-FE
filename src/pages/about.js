import React from "react"
import List from "@material-ui/core/List"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleRequirement from "../components/commons/requirements"
import AdjustIcon from "@material-ui/icons/Adjust"
import TimerIcon from "@material-ui/icons/Timer"
import AddToQueueIcon from "@material-ui/icons/AddToQueue"
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk"
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck"
import EmailIcon from "@material-ui/icons/Email"
import LoyaltyIcon from "@material-ui/icons/Loyalty"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

export default function Requirements() {
  return (
    <Layout>
      <SEO title="About" />

      <List className={`classes.root RequirementsWrapper`}>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;About Shoman | Shoman Codes</h3>
        <SingleRequirement
          title="Not a class/lecture tutorials, It's a mentorship programme"
          content="This is a mentorship program created to help you learn the required content very fast. You will work with a team of 
            available mentees too. Professional Software Development is a collaborative work. Come Learn with the professionals."
          icon={<AdjustIcon />}
        />
        <SingleRequirement
          title="Content"
          content="Web Programming. Frontend - HTML, CSS, Vanilla JS, React. ||--|| Backend - RESTFul, NodeJS, Express, Python<Flask />. NOTE: 
                    Other specialization areas will depend on the mentors availability. Send an application and we will advice "
          icon={<PlaylistAddCheckIcon />}
        />
        <SingleRequirement
          title="Target Audience"
          content="Beginners/Novice. Anybody who wants to be a better software engineer and would like guidance/mentorship."
          icon={<AccountCircleIcon />}
        />
        <SingleRequirement
          title="Duration"
          content="Approximately 6 months for a complete beginner. Duration depends on individual initial skill, learning curve and availability."
          icon={<TimerIcon />}
        />
        <SingleRequirement
          title="Requirements"
          content="A laptop/computer, internet, Tech Passion, Relevant Questions. We use online communication tools to keep 
                    track of your process. A smartphone can work, but imagine how tedious it is to type more than 50 lines."
          icon={<AddToQueueIcon />}
        />
        <SingleRequirement
          title="Come With ..."
          content="A positive, an open mindset, lots of humor and positive energies. {{ Fun === Learning === working }} 🤝💪🏼."
          icon={<DirectionsWalkIcon />}
        />
        <SingleRequirement
          title="Chat With Us"
          content="Send Us a Mail - shomancodes@gmail.com. We welcome a taste of humor"
          icon={<EmailIcon />}
        />
        <SingleRequirement
          title="Join as a mentor"
          content="Yeah sure, we welcome mentors. Send us a mail, and we can add you up. Looking forward to meeting you mentor.
                    The platform is currently under development."
          icon={<LoyaltyIcon />}
        />
      </List>
    </Layout>
  )
}

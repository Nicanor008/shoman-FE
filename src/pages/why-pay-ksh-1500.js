import { Container } from "@material-ui/core"
import React from "react"
import ListData from "../components/cards/listData"
import Layout from "../components/layout"

function WhyPay1500() {
  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 170
  }
  return (
    <Layout requireAuth={false}>
      <div style={{ minHeight: height, paddingTop: "10rem" }}>
        <Container>
          <ListData
            styleName="donate"
            subTitle="Why Pay Ksh 1,500($14)"
            data={[
              {
                content:
                  "We are a volunteer community. We decided to come up with mentorship program to help those who wanted to join tech but find it difficult to go through the content. The following are the plans for the donations money.",
              },
              {
                content:
                  "Hosting - Currently we using netlify free plans and google spreadsheets to store our data.",
              },
              {
                content:
                  "Slack - We currently using Slack free plan that has limited communications plans",
              },
              {
                content:
                  "Zoom Video Conferencing - Zooom free plan only limits calls for 40 minutes, less than 50 participants.",
              },
              {
                content:
                  "Design Tools - Figma/Adobe XD/Sketch. Currently we using figma free plans. Although different mentors prefer different tools. We would love to have one tool with paid plan.",
              },
              {
                content:
                  "Shoman motivation incentives, physical meetups and hackthons plannings.",
              },
            ]}
          />
        </Container>
      </div>
    </Layout>
  )
}

export default WhyPay1500

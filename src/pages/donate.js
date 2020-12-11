import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid } from "@material-ui/core"
import ListData from "../components/cards/listData"

const DonatePage = () => (
  <Layout requireAuth={false}>
    <SEO title="Home" />
    <div className="privacyWrapper">
      <Grid container spacing={2}>
        <Grid item md={4}>
          <center>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className="donateButtons"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="K55S5C8JVF938"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_KE/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
            {/* <br /> */}
            <b>Target - $2,370</b>
          </center>
        </Grid>
        <Grid item md={8}>
          <ListData
            styleName="donate"
            subTitle="Why Donate To US"
            data={[
              {
                content:
                  "We are a volunteer community. Nicanor decided to come up with mentorship program to help those who wanted to join tech but find it difficult to go through the content. The following are the plans for the donations money.",
              },
              { content: "Target - $2,370" },
              {
                content:
                  "Hosting - Currently we using netlify free plans and google spreadsheets to store our data.",
              },
              {
                content:
                  "Slack - we currently using Slack free plan that has limited communications plans",
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
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default DonatePage

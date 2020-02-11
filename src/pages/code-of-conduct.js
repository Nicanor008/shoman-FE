import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

function ListItemContent({ primaryText, secondaryText }) {
  return (
    <ListItem>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  )
}

function CodeOfConduct() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="privacyWrapper">
        At Shoman, we respect and value Each other. We understand that
        Mentor-mentee relationship should be undertaken with respect & dignity.
        This Code of Conduct applies to all communication platforms used by
        Shoman. <br />
        <div className={classes.demo}>
          <List dense>
            <ListItemContent
              primaryText="We encourage good and open communication in Shoman. 
                            Every communication within our model should be treated with respect. Mentees should openly 
                            ask their mentors questions or suggestions in order to be a better person daily"
              secondaryText="Communication, Respect"
            />
            <ListItemContent
              primaryText="We guided with our privacy policy. Nonetheless, we don't encourage sharing of private information. 
                            If there's need, take caution and trust. No private information should be revealed to the public, 
                            public channels or with other individuals without the owner's permission."
              secondaryText="Privacy Policy"
            />
            <ListItemContent
              primaryText="Offensive comments related to gender, gender identity and expression, sexual orientation, disability, 
                            mental illness, physical appearance, body size, age, race, or religion."
              secondaryText="Offensive Comments"
            />
            <ListItemContent
              primaryText="Sharing of sexual attention contents such as sexual images and videos, sexual stories is not allowed 
                            and highly encouraged. Physical contact and simulated physical contact e.g. hug, without consent or after a request to stop."
              secondaryText="Sexual Harassment"
            />
            <ListItemContent
              primaryText="Stalking is not allowed. We encourage open communication. Threat of violence, incitement to violence
                            towards individuals or group is not allowed."
              secondaryText="Stalking | violence"
            />
            <ListItemContent
              primaryText="Continued one-on-one communication after requests to cease should be reported"
              secondaryText="Nagging "
            />
          </List>
          <br />
          Members who violate the Code of Conduct will be given a two time
          warning. If they don't cease, an action will be taken
          <br />
          <br />
          Those who experience mistreatment, unwelcoming or feel unsafe in some
          way should immediately
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeINhTK4HwYUU8u2uwz_ZW_3GgKhcE1Xipw-kW9BQlKjO8ynw/viewform?usp=pp_url&entry.903512528=Constant+communication+on+my+DM(nagging)&entry.289190096=Shoman"
            className="reportHereLink"
          >
            &nbsp;report here
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default CodeOfConduct

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles({
  cardWithBg: {
    backgroundColor: "rebeccapurple",
    color: "white"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  titleWithBg: {
    color: "white"
  },
  contentTitle: {
    color: "rebeccapurple",
  },
  pos: {
    marginBottom: 12,
  },
  posWithBg: {
    color: "white"
  }
})

export default function CardComponent(props) {
  const classes = useStyles()

  return (
    <Link to={props.link}>
      <Card className={props.hasBg ? classes.cardWithBg : "cardComponentWrapper"}>
        <CardContent className={!props.hasBg && "cardContentWrapper"}>
          <Typography
            className={props.hasBg ? classes.titleWithBg : classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.hint}
          </Typography>
          <Typography variant="h5" component="h2" className={props.hasBg ? "contentTitleWithBg" : "contentTitle"}>
            {props.title}
          </Typography>
          <Typography className={props.hasBg ? classes.posWithBg : classes.pos} color="textSecondary">
            {props.skills}
          </Typography>
          <Typography variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
        {props.actions && (
          <CardActions>
            <Button
              size="small"
              style={{
                backgroundColor: "rebeccapurple",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {props.actions}
            </Button>
          </CardActions>
        )}
      </Card>
    </Link>
  )
}

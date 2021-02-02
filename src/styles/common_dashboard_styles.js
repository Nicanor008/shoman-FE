import { makeStyles } from "@material-ui/core"

export const CommonDashboardStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#DED5EA",
  },
  topBar: {
    marginBottom: theme.spacing(2),
    display: "flex",
  },
  secondBar: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "rebeccapurple",
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: 5,
    textDecoration: "none",
    marginRight: theme.spacing(1),
  },
}))

// single project card details
export const ProjectCardStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ECE7F2",
    borderRadius: 3,
    padding: theme.spacing(2),
    width: "400px",
    margin: theme.spacing(2),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  categoryHeader: {
    color: "#6F6868",
  },
  icons: {
    display: "flex",
  },
  editIcon: {
    color: "#663399",
    cursor: 'pointer'
  },
  deleteIcon: {
    color: "red",
    marginLeft: "0.4rem",
    cursor: 'pointer'
  },
  publicAccessStatus: {
    fontSize: "small",
    bottom: 0,
    color: "rebeccapurple",
  },
  time: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: 'black !important',
  }
}))

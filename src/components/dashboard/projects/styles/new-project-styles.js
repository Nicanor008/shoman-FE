import { makeStyles } from "@material-ui/core"

export const NewProjectStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#DED5EA",
  },
  title: {
    paddingLeft: theme.spacing(4),
  },
  body: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: "2rem",
  },
  groupedInputs: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 0",
  },
  textArea: {
    padding: theme.spacing(1),
    borderColor: "gray",
    borderRadius: 3,
  },
  button: {
    backgroundColor: "rebeccapurple",
    color: "white",
    padding: "0.3rem 1rem",
    borderRadius: 5,
    textDecoration: "none",
    marginTop: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

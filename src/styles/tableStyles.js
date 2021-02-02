import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { withStyles } from "@material-ui/styles"

export const StyledTableCellStyles = withStyles((theme) => ({
  head: {
    backgroundColor: "rebeccapurple",
    color: 'white',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

export const StyledTableRowStyles = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  },
}))(TableRow)

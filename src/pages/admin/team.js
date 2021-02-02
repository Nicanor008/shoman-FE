import React, { useState, useEffect } from "react"
import EditIcon from "@material-ui/icons/Edit"
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { CircularProgress } from "@material-ui/core"

import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"
import { GetData } from "../../utils/services/api"
import {
  StyledTableCellStyles,
  StyledTableRowStyles,
} from "../../styles/tableStyles"
import { CommonDashboardStyles, ProjectCardStyles } from "../../styles/common_dashboard_styles"
import { Link } from "gatsby"

function ShomanTeam() {
  const [teams, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const classes = ProjectCardStyles()
  const commonStyles = CommonDashboardStyles()

  useEffect(() => {
    setLoading(true)
    GetData("/teams")
      .then((data) => {
        setData(data?.teams)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) setError(error.response)
        setLoading(false)
      })
    return null
  }, [])

  useEffect(() => {
    if (teams && teams.length === 0) {
      window.location.href = "/login"
    }
  }, [teams])

  console.log(error)

  return (
    <DashboardLayout userRole="admin">
      <SEO title="Applications" />
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <>
          <div className={commonStyles.topBar}>
            <Link className={commonStyles.button} to="/admin/new-team">
              Create a New Team
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table
              aria-label="customized table"
              style={{ padding: "0 4rem", backgroundColor: "white" }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCellStyles>Team Name</StyledTableCellStyles>
                  <StyledTableCellStyles>Team Number</StyledTableCellStyles>
                  <StyledTableCellStyles>Mentor</StyledTableCellStyles>
                  <StyledTableCellStyles>No. of Mentees</StyledTableCellStyles>
                  <StyledTableCellStyles>Track</StyledTableCellStyles>
                  <StyledTableCellStyles></StyledTableCellStyles>
                </TableRow>
              </TableHead>
              <TableBody>
                {teams?.map((team) => (
                  <StyledTableRowStyles key={team?._id}>
                    <StyledTableCellStyles>
                      {team?.team_name}
                    </StyledTableCellStyles>
                    <StyledTableCellStyles>
                      {team?.team_number}
                    </StyledTableCellStyles>
                    <StyledTableCellStyles>
                      {team?.mentor?.Username}
                    </StyledTableCellStyles>
                    <StyledTableCellStyles>
                      {team?.menteesId?.length}
                    </StyledTableCellStyles>
                    <StyledTableCellStyles>
                      {team?.track?.name}
                    </StyledTableCellStyles>
                    <StyledTableCellStyles>
                      <EditIcon className={classes.editIcon} />
                      <DeleteSweepIcon className={classes.deleteIcon} />
                    </StyledTableCellStyles>
                  </StyledTableRowStyles>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </DashboardLayout>
  )
}

export default ShomanTeam

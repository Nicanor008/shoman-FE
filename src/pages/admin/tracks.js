import React, { useState, useEffect } from "react"
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
import { CommonDashboardStyles } from "../../styles/common_dashboard_styles"
import { Link } from "gatsby"

function ShomanTracks() {
  const [teams, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const commonStyles = CommonDashboardStyles()

  useEffect(() => {
    setLoading(true)
    GetData("/tracks")
      .then((data) => {
        setData(data?.tracks)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) setError(error.response)
        setLoading(false)
      })
    return null
  }, [])

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
            <Link className={commonStyles.button} to="/admin/new-track">
              Create a New Track
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table
              aria-label="customized table"
              style={{ padding: "0 4rem", backgroundColor: "white" }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCellStyles>Track Name</StyledTableCellStyles>
                  <StyledTableCellStyles>
                    Programming Languages
                  </StyledTableCellStyles>
                  <StyledTableCellStyles>
                    Application areas
                  </StyledTableCellStyles>
                </TableRow>
              </TableHead>
              <TableBody>
                {teams?.map((team) => (
                  <StyledTableRowStyles key={team?._id}>
                    <StyledTableCellStyles>{team?.name}</StyledTableCellStyles>
                    <StyledTableCellStyles>
                      {team?.languages?.map((language) => (
                        <span>{language}, </span>
                      ))}
                    </StyledTableCellStyles>
                    <StyledTableCellStyles>
                      {team?.application_areas?.map((area) => (
                        <span>{area}, </span>
                      ))}
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

export default ShomanTracks

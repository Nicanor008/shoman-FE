import React, { useState, useEffect } from "react"
import DashboardLayout from "../../components/dashboard/layout/dashboard_layout"
import SEO from "../../components/seo"

import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { CircularProgress } from "@material-ui/core"
import MailIcon from "@material-ui/icons/Mail"
import { GetData } from "../../utils/services/api"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rebeccapurple',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function Applications() {
  const [applicants, setApplicants] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    GetData("/mentees/applications")
      .then((data) => {
        setApplicants(data?.applicants)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) setError(error.reponse)
        setLoading(false)
      })
    return null
  }, [])

  useEffect(() => {
    if (applicants && applicants.length === 0) {
      window.location.href = "/dashboard"
    }
  }, [applicants])

  console.log(error)

  const frontend = applicants?.filter(
    (app) => app.track === "Frontend Development"
  )
  const backend = applicants?.filter(
    (app) => app.track === "Backend Development"
  )
  const fullstack = applicants?.filter(
    (app) => app.track === "FullStack Developer"
  )
  const mobile = applicants?.filter((app) => app.track === "Mobile Development")

  return (
    <DashboardLayout>
      <SEO title="Applications" />
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <>
          <b>Total</b> Applicants - {applicants?.length} | <b>Frontend</b> -{" "}
          {frontend?.length} | <b>Backend</b> - {backend?.length} |{" "}
          <b>Fullstack</b> - {fullstack?.length} | <b>Mobile</b> -{" "}
          {mobile?.length}
          <br />
          <br />
          <TableContainer component={Paper}>
            <Table aria-label="customized table" style={{ padding: "0 4rem", backgroundColor: 'white' }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Application Status</StyledTableCell>
                  <StyledTableCell>Track/Stack</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants?.map((applicant) => (
                  <StyledTableRow key={applicant._id}>
                    <StyledTableCell>{applicant.fullname}</StyledTableCell>
                    <StyledTableCell>{applicant.email}</StyledTableCell>
                    <StyledTableCell>{applicant.status}</StyledTableCell>
                    <StyledTableCell>{applicant.track}</StyledTableCell>
                    <StyledTableCell>
                      <a
                        href={`mailto:${applicant.email}?subject=Shoman Application`}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <MailIcon />
                      </a>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </DashboardLayout>
  )
}

export default Applications

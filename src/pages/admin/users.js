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

function AllUsers() {
    const [users, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const commonStyles = CommonDashboardStyles()

    useEffect(() => {
        setLoading(true)
        GetData("/users/all")
            .then((data) => {
                setData(data)
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
                        <div>
                            <b>Total Users</b> - {users?.total} |{" "}
                            {users?.admin && <><b>Admin</b> - {users?.admin} | </>}<b>Mentors</b> -{" "}
                            {users?.mentors} | <b>Mentees</b> - {users.mentees}
                        </div>
                        <TableContainer component={Paper}>
                            <Table
                                aria-label="customized table"
                                style={{ padding: "0 4rem", backgroundColor: "white" }}
                            >
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCellStyles>Username</StyledTableCellStyles>
                                        <StyledTableCellStyles>
                                            Email
                                        </StyledTableCellStyles>
                                        <StyledTableCellStyles>
                                            User Role
                                        </StyledTableCellStyles>
                                        <StyledTableCellStyles>
                                            Team Number
                                        </StyledTableCellStyles>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users?.users?.map((user) => (
                                        <StyledTableRowStyles key={user?._id}>
                                            <StyledTableCellStyles>{user?.Username}</StyledTableCellStyles>
                                            <StyledTableCellStyles>{user?.email}</StyledTableCellStyles>
                                            <StyledTableCellStyles>{user?.userType}</StyledTableCellStyles>
                                            <StyledTableCellStyles>{user?.teamNumber}</StyledTableCellStyles>
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

export default AllUsers

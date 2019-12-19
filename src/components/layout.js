/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer style={{margin: "20px"}}>
          <Grid style={{ display:"flex", justifyContent: "space-between" }}>
            <Grid item md={6}>
              Back Me 
            </Grid>
            <Grid item md={6}>
              Privacy &nbsp; | &nbsp; Terms & Conditions &nbsp; | &nbsp; © {new Date().getFullYear()}, &nbsp;Shoman
            </Grid>
          </Grid>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/apply.scss"
import { Link } from "@material-ui/core"

function HomePage() {
  return (
    <Layout>
      <SEO title="Apply" />
      <div className="applyWrapper">
        <br />
        <center>
          <Link
            href="https://docs.google.com/forms/d/1C0MMYr1dPG0n1wAao3FQqgkVJpUjZHJRb3eP3kPo2f8/edit"
            bgColor="rebeccapurple"
            rel="noopener"
            target="_blank"
          >
            Link
          </Link>
        </center>
      </div>
    </Layout>
  )
}

export default HomePage

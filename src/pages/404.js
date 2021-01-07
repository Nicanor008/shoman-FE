import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/css/404.scss"
import { Container, Link } from "@material-ui/core"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="Sorry this page doesn't exist at Shoman. Go to the Homepage or use the browser tab to go back to the previous page."/>
    <Container className="NotFoundWrapper">
      <div>
        <h2>404:)</h2>
        <h4>Page Not Found</h4>
        <p>
          Go to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage

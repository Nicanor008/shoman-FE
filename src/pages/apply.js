import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ApplyGuide from "../components/auth/apply/guide"
import ApplyForm from "../components/auth/apply/applyForm"
import "../components/auth/apply.scss"

export default function Apply() {
  let height
  if (typeof window !== "undefined") {
    height = window.innerHeight - 290
  }

  return (
    <Layout requireAuth={false}>
      <SEO title="Apply" description="Apply to Shoman mentorship program" />
      <div className="applyInputWrapper" style={{ minHeight: height }}>
        <div className="loginInput signupImage">
          <br />
          <br />
          <ApplyGuide />
        </div>
        <div className="applyInputs">
          <ApplyForm />
        </div>
      </div>
    </Layout>
  )
}

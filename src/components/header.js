import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => {
  const applicationDeadline = new Date("2021-02-05T21:00:00.000+00:00")
  const currentDate = new Date()
  const diffDays = applicationDeadline - currentDate

  return (
    <header
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div className="headerWrapper">
        <h1 style={{ margin: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <div className="headerTitle">{siteTitle}</div>
            </Link>
            <div className="menuItemWrapper">
              {/* <span className="menuItem">| </span>
              <Link className="menuItem" to="/donate">
                Donate
              </Link> */}
              {/* <span className="menuItem">| </span> */}
              {/* <span to="/" className="menuItem">
              Reach Out - <span style={{color:"yellow"}}>shoman@gmail.com</span>
            </span> */}
              {/* <span className="menuItem">| </span> */}
              {/* unathorised user */}
              {diffDays > 0 && (
                <>
                  <Link
                    to={`${
                      userRole === "mentee"
                        ? "/mentee/overview"
                        : "/mentor/overview"
                    }`}
                    className="menuItem"
                  >
                    Dashboard
                  </Link>
                  <span className="menuItem">| </span>
                  <Link to="/auth/login" className="menuItem">
                    Login
                  </Link>
                  <span className="menuItem">| </span>
                  <Link to="/apply" className="menuItem">
                    Apply <span className="applyingText">As a Mentee</span>
                  </Link>
                  <span className="menuItem">| </span>
                  <Link to="/about" className="menuItem">
                    About
                  </Link>
                </>
              )}
            </div>
          </div>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle, userRole, dashboard }) => {
  const applicationDeadline = new Date("2021-02-05T21:00:00.000+00:00")
  const currentDate = new Date()
  const diffDays = applicationDeadline - currentDate

  let userLoggedIn = "";

  if (typeof window !== "undefined") {
    userLoggedIn = localStorage.getItem('token')
  }

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
              {!dashboard && <>
                {userLoggedIn !== null &&
                  <>
                    <Link
                      to={`${userRole === "mentee"
                        ? "/mentee/overview"
                        : "/mentor/overview"
                        }`}
                      className="menuItem"
                    >
                      Dashboard
                  </Link>
                    <span className="menuItem">| </span>
                  </>
                }
                {userLoggedIn === null && 
                  <>
                    <Link to="/auth/login" className="menuItem">
                      Login
                    </Link>
                    <span className="menuItem">| </span>
                  </>
                }
                {diffDays > 0 && (
                  <>
                    <Link to="/apply" className="menuItem">
                      Apply <span className="applyingText">As a Mentee</span>
                    </Link>
                    <span className="menuItem">| </span>
                  </>
                )}
                <Link to="/about" className="menuItem">
                  About
              </Link>
              </>}
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

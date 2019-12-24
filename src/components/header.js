import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div className="headerWrapper">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="headerTitle">{siteTitle}</div>
            <div className="menuItemWrapper">
              {/* authorised user */}
              <Link to="/home" className="menuItem">
                Home
              </Link>
              <span className="menuItem">| </span>
              <Link to="/dashboard" className="menuItem">
                Dashboard
              </Link>

              {/* for the authorised user */}
              <span className="menuItem">| </span>
              <Link to="/mentees" className="menuItem">
                Mentees
              </Link>
              <span className="menuItem">| </span>
              <Link to="/" className="menuItem">
                Discord
              </Link>
              <span className="menuItem">| </span>

              {/* unathorised user */}
              <Link to="/auth" className="menuItem">
                Join
              </Link>
              <span className="menuItem">| </span>
              <Link to="/apply" className="menuItem">
                Apply <span className="applyingText">As a Mentee</span>
              </Link>
            </div>
          </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

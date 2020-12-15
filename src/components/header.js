import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => {
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
              <Link to="/apply" className="menuItem">
                Apply <span className="applyingText">As a Mentee</span>
              </Link>
              <span className="menuItem">| </span>
              <Link className="menuItem" to="/donate">
                Donate
              </Link>
              <span className="menuItem" style={{ color: "yellow" }}>
                |{" "}
              </span>
              <Link to="/about" className="menuItem">
                About
              </Link>
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

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
            {/* authorised user */}
            {/* <Link to="/home" className="menuItem">
              Home
            </Link> */}
            {/* <span className="menuItem">| </span> */}
            

            {/* for the authorised user */}
            <a href="https://docs.google.com/forms/d/1C0MMYr1dPG0n1wAao3FQqgkVJpUjZHJRb3eP3kPo2f8/edit" target="blank" className="menuItem">
              Apply
            </a>
            <span className="menuItem" style={{color:"yellow"}}>| </span>
            <Link to="/about" className="menuItem">
              About
            </Link>
            {/* <span className="menuItem">| </span> */}
            {/* <span to="/" className="menuItem">
              Reach Out - <span style={{color:"yellow"}}>shoman@gmail.com</span>
            </span> */}
            {/* <span className="menuItem">| </span> */}

            {/* unathorised user */}
            {/* <Link to="/auth" className="menuItem">
              Login
            </Link>
            <span className="menuItem">| </span>
            <Link to="/apply" className="menuItem">
              Apply <span className="applyingText">As a Mentee</span>
            </Link> */}
          </div>
        </div>
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

import React, { useState } from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import LogoLarge from '../images/site/logo-large.png'
import FeatherIcon from '../components/FeatherIcon'

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ siteTitle }) => {

  const [navOpen, setNavOpen] = useState(false)

  const handleNavClose = () => {
    setNavOpen(false)
  }
  const handleNavOpen = () => {
    setNavOpen(true)
  }

  return (
    <>
      <header className="header">
        <div className="brand">
          <div className="nav-btn" onClick={handleNavOpen} role="button" tabIndex="0" onKeyDown={() => { }}>
            <FeatherIcon
              icon="menu"
            />
          </div>
          <figure className="brand-logo">
            <img src={LogoLarge} alt={siteTitle} />
          </figure>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <AnchorLink
                to="/"
                title="Home"
              />
            </li>
            <li>
              <AnchorLink
                to="/#features"
                title="Features"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#projects"
                title="Projects"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#learning"
                title="Learning"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#team"
                title="Team"
                stripHash
              />
            </li>
          </ul>
          <ul>
            <li>
              <button className="button button-nav">Login</button>
            </li>
            <li>
              <button className="button button-nav-p">Register</button>
            </li>
            <li>
              <AnchorLink to="/#contact" title="Query">
                <FeatherIcon icon="help-circle" />
              </AnchorLink>
            </li>
          </ul>
        </nav>
        {/* ---- Mobile Nav ---- */}
        <div className={`nav-bg ${navOpen ? '' : 'close'}`} aria-label="Nav Bg close" role="button" tabIndex={0} style={{ 'outline': 'none' }} onClick={handleNavClose} onKeyDown={() => { }}></div>
        <nav className={`navigation-side ${navOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <AnchorLink
                to="/"
                title="Home"
              />
            </li>
            <li>
              <AnchorLink
                to="/#features"
                title="Features"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#projects"
                title="Projects"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#learning"
                title="Learning"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#team"
                title="Team"
                stripHash
              />
            </li>
            <li>
              <AnchorLink
                to="/#contact"
                title="Query"
                stripHash
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

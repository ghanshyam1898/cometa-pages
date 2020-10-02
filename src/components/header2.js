import React from "react"
import PropTypes from "prop-types"
import LogoLarge from '../images/site/logo-large.png'
import { Link } from 'gatsby'
const Header2 = ({ siteTitle }) => {

  return (
    <>
      <header className="header education-header">
        <div className="brand">
          <figure className="brand-logo">
            <img src={LogoLarge} alt={siteTitle} />
          </figure>
        </div>
        <Link to="/education/register/?action=demo" activeClassName="hidden" className="button button-nav-p button-trial" style={{ 'fontWeight': '600' }}>Book FREE Trial</Link>
      </header>
    </>
  )
}

Header2.propTypes = {
  siteTitle: PropTypes.string,
}

Header2.defaultProps = {
  siteTitle: ``,
}

export default Header2

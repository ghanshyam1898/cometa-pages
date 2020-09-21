import React from "react"
import PropTypes from "prop-types"
import LogoLarge from '../images/site/logo-large.png'

const Header2 = ({ siteTitle }) => {

  return (
    <>
      <header className="header">
        <div className="brand">
          <figure className="brand-logo">
            <img src={LogoLarge} alt={siteTitle} />
          </figure>
        </div>
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

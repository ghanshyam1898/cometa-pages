import React,{useState} from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import LogoLarge from '../images/site/logo-large.png'
import FeatherIcon from '../components/FeatherIcon'

const Header = ({ siteTitle }) =>{

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
      <div className="nav-btn" onClick={handleNavOpen} role="button" tabIndex="0">
        <FeatherIcon
          icon="menu"
        />
      </div>
      <figure className="brand-logo">
        <img src={LogoLarge} alt={siteTitle}/>
      </figure>
    </div>
    <nav className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Learning</a>
        </li>
        <li>
          <a href="/">About Us</a>
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
          <a href="/" title="Query">
            <FeatherIcon
              icon="help-circle"
            />
          </a>
        </li>
      </ul>
    </nav>
    {/* ---- Mobile Nav ---- */}
    <div className={`nav-bg ${navOpen ? '' : 'close'}`} onClick={handleNavClose}></div>
    <nav className={`navigation-side ${navOpen ? 'open':''}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

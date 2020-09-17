import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/style.css"
import FeatherIcon from "./FeatherIcon"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="site-body">
        <main>{children}</main>
        <div className="footer">
          <nav>
            <div className="footer-nav-box">
              <h2>Quick Links</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <a href="#!">Some Link</a>
                </li>
                <li>
                  <a href="#!">Some Link</a>
                </li>
              </ul>
            </div> 
            <div className="footer-nav-box">
              <h2>Quick Links</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <a href="#!">Some Link</a>
                </li>
                <li>
                  <a href="#!">Some Link</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-box footer-nav-social">
              <h2>Connect with Us</h2>
              <ul className="footer-nav-box-links">
                <li className="social-media-list">
                  <a href="#!">
                    <FeatherIcon
                      icon="facebook"
                    />
                  </a>
                  <a href="#!">
                    <FeatherIcon
                      icon="instagram"
                    />
                  </a>
                  <a href="#!">
                    <FeatherIcon
                      icon="slack"
                    />
                  </a>
                  <a href="#!">
                    <FeatherIcon
                      icon="linkedin"
                    />
                  </a>
                </li>
              </ul>
              <h2>Contact Us</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <a href="tel:+91378483412">+91-32926419</a>
                </li>
                <li>
                  <a href="mailto:me@example.com">me@example.com</a>
                </li>
              </ul>
            </div>  
          </nav>
          <footer className="site-footer abs-center">
            <span>
              &copy; Copyrights - 2020, Cometa Intellect LLP
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

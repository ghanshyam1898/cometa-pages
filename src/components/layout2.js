import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header2 from "./header2"
import "../css/style.css"
import FeatherIcon from "./FeatherIcon"

const Layout2 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header2 siteTitle={data.site.siteMetadata.title} />
      <div className="site-body">
        <main>{children}</main>
        <div className="footer">
          <nav>
            <div className="footer-nav-box footer-nav-social" id="contact">
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
            </div>
            <div className="footer-nav-box">
              <h2>Contact Us</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <a href="tel:+91378483412" className="icon-link left">
                    <FeatherIcon icon="phone" />
                    <span>+91-32926419</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:me@example.com" className="icon-link left">
                    <FeatherIcon icon="mail" />
                    <span>me@example.com</span>
                  </a>
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

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2

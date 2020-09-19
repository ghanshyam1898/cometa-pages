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
                  <a href="/#features" className="icon-link left">
                    <FeatherIcon icon="award" />
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a href="/#projects" className="icon-link left">
                    <FeatherIcon icon="folder" />
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a href="/#learning" className="icon-link left">
                    <FeatherIcon icon="code" />
                    <span>Learning</span>
                  </a>
                </li>
                <li>
                  <a href="#!" className="icon-link left">
                    <FeatherIcon icon="hash" />
                    <span>Hackathon</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-box">
              <h2>Company</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <a href="/#team" className="icon-link left">
                    <FeatherIcon icon="users" />
                    <span>Team</span>
                  </a>
                </li>
                <li>
                  <a href="/#about" className="icon-link left">
                    <FeatherIcon icon="info" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/company/cometa-intellect/jobs" target="_blank" rel="noreferrer noopener" className="icon-link">
                    <span>Jobs</span>
                    <FeatherIcon icon="external-link" />
                  </a>
                </li>
              </ul>
            </div>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

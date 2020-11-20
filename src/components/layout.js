import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";


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
                  <AnchorLink to="/#features" className="icon-link left">
                    <FeatherIcon icon="award" />
                    <span>Services</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink to="/#projects" className="icon-link left">
                    <FeatherIcon icon="folder" />
                    <span>Projects</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink to="/#learning" className="icon-link left">
                    <FeatherIcon icon="code" />
                    <span>Learning</span>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink to="#!" className="icon-link left">
                    <FeatherIcon icon="hash" />
                    <span>Hackathon</span>
                  </AnchorLink>
                </li>
              </ul>
            </div>
            <div className="footer-nav-box">
              <h2>Company</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <AnchorLink to="/#team" className="icon-link left">
                    <FeatherIcon icon="users" />
                    <span>Team</span>
                  </AnchorLink>
                </li>
                <li>
                  <a href="https://angel.co/company/cometa-intellect/jobs" target="_blank" rel="noreferrer noopener" className="icon-link">
                    <span>Jobs</span>
                    <FeatherIcon icon="external-link" />
                  </a>
                </li>
                <li>
                  <a href="https://internshala.com/internships/internship-at-Cometa%20Intellect%20LLP" target="_blank" rel="noreferrer noopener" className="icon-link">
                    <span>Internships</span>
                    <FeatherIcon icon="external-link" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-box footer-nav-social">
              <h2>Connect with Us</h2>
              <ul className="footer-nav-box-links">
                <li className="social-media-list">
                  <a href="https://www.facebook.com/cometa.intellect/" target="_blank" rel="noreferrer noopener">
                    <FeatherIcon
                      icon="facebook"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/cometa-intellect-llp/" target="_blank" rel="noreferrer noopener">
                    <FeatherIcon
                      icon="linkedin"
                    />
                  </a>
                </li>
              </ul>
              <h2>Contact Us</h2>
              <ul className="footer-nav-box-links">
                <li>
                  <a href="tel:+918117014347" className="icon-link left">
                    <FeatherIcon icon="phone" />
                    <span>+91-8117014347</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:ghanshyam@cometaintellect.com" className="icon-link left">
                    <FeatherIcon icon="mail" />
                    <span>ghanshyam@cometaintellect.com</span>
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

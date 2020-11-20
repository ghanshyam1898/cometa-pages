import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
//
import AndroidImg from '../images/site/features/android_full.png'
import AWSImg from '../images/site/features/aws.png'
import HybridImg from '../images/site/features/hybrid.png'
import RestImg from '../images/site/features/api.png'
import HostImg from '../images/site/features/hosting.png'
import WebImg from '../images/site/features/webapp.png'
//
import TrueBuddyImg from '../images/site/clients/truebuddy.png'
import HerbicalImg from '../images/site/clients/herbical.png'
import BidwaanImg from '../images/site/clients/bidwaan.png'
import WSAImg from '../images/site/clients/wsa.png'
import KIImg from '../images/site/clients/kiteintellect.png'
import KSImg from '../images/site/clients/kedia_steel_corporation.png'
import GCEKImg from '../images/site/clients/gcek.png'
//
import GhanuImg from '../images/site/team/ghanshyam.png'
import SumanImg from '../images/site/team/suman.png'
import SarojImg from '../images/site/team/saroj.png'
import SakshiImg from '../images/site/team/sakshi_uppoor.png'
import SupriyaImg from '../images/site/team/supriya.png'
//
import GPIcon from '../images/google-play-badge.png'
import FeatherIcon from "../components/FeatherIcon"
import { signupForNewsletter, submitContact } from "../helpers"

const IndexPage = () => {
  const [newsLetterData, setNewsLetterData] = useState({
    "email_id": ""
  })
  const [nlLoading, setNlLoading] = useState(false)
  const [cLoading, setCLoading] = useState(false)
  const [nlMsg, setNlMsg] = useState(undefined)
  const [cMsg, setCMsg] = useState(undefined)

  const [contactData, setContactData] = useState({
    "full_name": "",
    "phone_number": "",
    "email_id": "",
    "message": ""
  })

  const handleNewsLetterSubmit = (e) => {
    e.preventDefault()
    setNlLoading(true)
    setNlMsg(undefined)
    signupForNewsletter(newsLetterData, (data) => {
      setNlLoading(false)
      if (data.id) {
        console.log('signup success')
        setNlMsg("Signedup Successfully")
        console.log(data)
      }
    })
  }

  const handleContact = (e) => {
    e.preventDefault()
    setCLoading(true)
    setCMsg(undefined)
    submitContact(contactData, (data) => {
      setCLoading(false)
      if (data.id) {
        setCMsg('Query Submitted. Our team will contact you shortly.');
        console.log(data);
      }
    })
  }

  return (
    <Layout>
      <SEO title="Cometa Intellect LLP" single={true} />
      <header className="hero hero-home abs-center">
        <div className="hero-intro">
          <h1><span>Welcome to</span>Cometa Intellect LLP</h1>
        </div>
      </header>
      <article className="announcement-inside">
        <FeatherIcon classes="i-b" icon="hash" />
        <h2>Hackathons @ Cometa</h2>
        <p>{`We’re working on it. Something cool coming up :)`}</p>
      </article>
      <section className="section section_features" id="features">
        <h2 className="section-heading"><span>Features</span> We Provide</h2>
        <div className="features">
          <article className="feature">
            <figure className="feature__img abs-center">
              <img src={AndroidImg} alt="Android Apps" />
            </figure>
            <h3 className="feature__head">Android Apps <span>(Native Android Apps - Java/Kotlin)</span></h3>
            <p className="feature__text">Mobile apps built using java or kotlin programming languages and run on Android devices</p>
          </article>
          <article className="feature">
            <figure className="feature__img abs-center">
              <img src={HybridImg} alt="Hybrid Apps" />
            </figure>
            <h3 className="feature__head">Hybrid Apps<span>(Android and iOS)</span></h3>
            <p className="feature__text">One single code base using Hybrid app frameworks and built apps that run on both Android devices and on iPhones</p>
          </article>
          <article className="feature">
            <figure className="feature__img abs-center">
              <img src={AWSImg} alt="AWS" />
            </figure>
            <h3 className="feature__head">AWS <span>(Popular Services of AWS)</span></h3>
            <p className="feature__text">Many of our popular apps are hosted in AWS. We love the way it auto scales according to requirements and traffic</p>
          </article>
          <article className="feature">
            <figure className="feature__img abs-center">
              <img src={RestImg} alt="REST API" />
            </figure>
            <h3 className="feature__head">REST API <span>(Scalable, Fast APIs)</span></h3>
            <p className="feature__text">Most of the apps do at least some kind of cloud interaction. When applicable, REST APIs work like magic for your app/ website</p>
          </article>
          <article className="feature">
            <figure className="feature__img abs-center">
              <img src={HostImg} alt="Hosting" />
            </figure>
            <h3 className="feature__head">Cometa Hosting <span>(Reliable, 99.9% uptime Hosting Plans)</span></h3>
            <p className="feature__text">Host your applications in our clouds. They are optimised for speed and security. They are also maintained regularly and are monitored by experts.</p>
          </article>
          <article className="feature">
            <figure className="feature__img abs-center">
              <img src={WebImg} alt="WebApps" />
            </figure>
            <h3 className="feature__head">Websites and Web Apps <span>(Blazing fast, attractive websites and webapps)</span></h3>
            <p className="feature__text">UI/UX rich, Ultra fast Websites and Web Apps built with Modern Web Technologies gives you a headstart to start your business</p>
          </article>
        </div>
      </section>
      <section className="section section-projects" id="projects">
        <h2 className="section-heading">Our <span>Projects</span></h2>
        <div className="projects">
          <Project
            pName="Truebuddy"
            pImg={TrueBuddyImg}
            pText="World’s first astrological social networking app"
            pLink={`https://play.google.com/store/apps/details?id=com.truebuddyapp.truebuddy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
            pLinkImg={GPIcon}
          />
          <Project
            pName="Herbical"
            pImg={HerbicalImg}
            pText="Online marketplace for raw herbal products"
            pLink={`https://play.google.com/store/apps/details?id=com.theherbical.herbical&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
            pLinkImg={GPIcon}
          />
          <Project
            pName="Bidwaan"
            pImg={BidwaanImg}
            pText="Online test and scholarship by SS Solutions."
          />
          <Project
            pName="World Startups Association"
            pImg={WSAImg}
            pText="Integrated platform to connect with startups, mentors, incubators. Online marketplace, handy events tool, blog, forum and more."
            pLink={`https://www.worldstartupsassociation.com/`}
            pLinkText="Visit Website"
          />
          <Project
            pName="KiteIntellect SSE"
            pImg={KIImg}
            pText="Protect your APIs, websites from attacks."
            pLink={`/#contact`}
            pLinkText="Contact Us to Know More"
          />
          <Project
            pName="Kedia Steel Corporations"
            pImg={KSImg}
            pText="Our team developed Kedia Steel Corporation's website."
            pLink={`https://www.kediasteelcorporation.com/`}
            pLinkText="Visit Website"
          />
        </div>
      </section>
      <section className="section" id="open_source">
        <h2 className="section-heading">Cometa <span aria-label="Love" role="img">❤️</span> <span>Open Source</span></h2>
        <p className="section-text">Some of the great open source projects we admire.</p>
        <div className="os-container">
          <a href="https://source.android.com/" target="_black" rel="noreferrer noopener" className="icon-display">
            <img src={AndroidImg} alt="Android" />
            <div className="icon-link">
              <span>Android</span>
              <FeatherIcon icon="external-link" />
            </div>
          </a>
          <a href="https://github.com/nginx/nginx" target="_black" rel="noreferrer noopener" className="icon-display">
            <img src="./open/nginx-logo.png" alt="Nginx" />
            <div className="icon-link">
              <span>Nginx</span>
              <FeatherIcon icon="external-link" />
            </div>
          </a>
          <a href="https://github.com/torvalds/linux" target="_black" rel="noreferrer noopener" className="icon-display">
            <img src="./open/tux.png" alt="Linux kernel" />
            <div className="icon-link">
              <span>Linux Kernel</span>
              <FeatherIcon icon="external-link" />
            </div>
          </a>
          <a href="https://github.com/django/django" target="_black" rel="noreferrer noopener" className="icon-display">
            <img src="./open/django.webp" alt="Django" />
            <div className="icon-link">
              <span>Django</span>
              <FeatherIcon icon="external-link" />
            </div>
          </a>
          <a href="https://www.python.org/downloads/source/" target="_black" rel="noreferrer noopener" className="icon-display">
            <img src="./open/python-logo.png" alt="Python" />
            <div className="icon-link">
              <span>Python</span>
              <FeatherIcon icon="external-link" />
            </div>
          </a>
        </div>
      </section>
      <section className="section section_clients" id="clients">
        <h2 className="section-heading">Trusted by <span>Clients</span></h2>
        <div className="clients">
          <div className="client">
            <img src={GCEKImg} alt="GCEK" title="Govt. College of Engineering, Bhawanipatna" />
            <img src={KSImg} alt="Kedia Steel Corporation" title="Kedia Steel Corporation" />
            <img src={WSAImg} alt="World Startups Association" title="World Startups Association" />
            <img src={BidwaanImg} alt="SS Solutions Exams Platform" title="SS Solutions Exams Platform" style={{ 'borderRadius': '8px' }} />
            <img src={HerbicalImg} alt="Herbical" title="Herbical" />
            <img src={TrueBuddyImg} alt="Truebuddy.com" title="Truebuddy" style={{ 'borderRadius': '8px' }} />
          </div>
        </div>
      </section>
      <section className="section section-learning" id="learning">
        <h2 className="section-heading">Learning &amp; Certifications</h2>
        <p className="section-text">We have been developing our own courses for advanced computer science. Until its ready, checkout some great courses we appreciate.</p>
        <div className="abs-center" style={{ 'height': '8rem' }}>
          <ul>
            <li>
              <a className="icon-link" target="_blank" rel="noreferrer noopener" href="https://classroom.udacity.com/courses/ud851">
                <span>Android Course</span>
                <FeatherIcon icon="external-link" />
              </a>
            </li>
            <li>
              <a className="icon-link" target="_blank" rel="noreferrer noopener" href="https://classroom.udacity.com/courses/ud894">
                <span>Frontend Frameworks</span>
                <FeatherIcon icon="external-link" />
              </a>
            </li>
            <li>
              <a className="icon-link" target="_blank" rel="noreferrer noopener" href="https://www.digitalocean.com/community/tutorials">
                <span>Tutorials at Digitalocean</span>
                <FeatherIcon icon="external-link" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section-team" id="team">
        <h2 className="section-heading">The <span>Team</span></h2>
        <div className="team">
          <div className="member">
            <figure>
              <img src={GhanuImg} alt="Ghanshyam Agrawal" />
            </figure>
            <h3>Ghanshyam Agrawal</h3>
            {/* <p>Founder</p> */}
          </div>
          <div className="member">
            <figure>
              <img src={SumanImg} alt="Suman Agrawal" />
            </figure>
            <h3>Suman Agrawal</h3>
            {/* <p>Designation</p> */}
          </div>
          <div className="member">
            <figure>
              <img src={SarojImg} alt="Saroj Kumar Sahoo" />
            </figure>
            <h3>Saroj Kumar Sahoo</h3>
            {/* <p>Designation</p> */}
          </div>
          <div className="member">
            <figure>
              <img src={SupriyaImg} alt="Supriya Pradhan" />
            </figure>
            <h3>Supriya Pradhan</h3>
            {/* <p>Designation</p> */}
          </div>
          <div className="member">
            <figure>
              <img src={SakshiImg} alt="Sakshi Uppoor" />
            </figure>
            <h3>Sakshi Uppoor</h3>
            {/* <p>Designation</p> */}
          </div>
        </div>
      </section>
      <section className="section section-newletter abs-center">
        <div className="newletter-form-container">
          <h3>Signup to our Monthly Newletter, get Exciting Benefits!</h3>
          {nlMsg ? (<p className="form-msg success">
            <FeatherIcon icon="check-circle" />
            <span>{nlMsg}</span>
          </p>) : (<>
          </>)}
          <form action="" method='POST' onSubmit={handleNewsLetterSubmit}>
            <div className="input-field">
              <input type="email" name="email" placeholder="e.g. me@example.com" required onInput={(e) => { setNewsLetterData({ "email_id": e.target.value }) }} readOnly={nlLoading} />
              {nlLoading ? (
                <button type="reset" className="button button-submit button-submit-disabled" disabled>Submitting</button>) : (
                  <button type="submit" className="button button-submit">Submit</button>
                )}
            </div>
          </form>
        </div>
      </section>
      <section className="section section-contact" id="contact">
        <h2 className="section-heading"><span>Contact</span> Us</h2>
        
        <div className="newletter-form-container form_container form_container--home">
          {cMsg ? (<p className="form-msg success" style={{ 'marginBottom': '1rem' }}>
            <FeatherIcon icon="check-circle" />
            <span>{cMsg}</span>
          </p>) : (<></>)}
          <form action="" method="post" autoComplete="off" spellCheck="false" onSubmit={handleContact}>
            <div className="input_field">
              <label htmlFor="c_f_name">Full Name *</label>
              <input type="text" name="c_f_name" id="c_f_name" onInput={(e) => { setContactData({ ...contactData, "full_name": e.target.value }) }} required />
            </div>
            <div className="input_field">
              <label htmlFor="c_email">Email Address *</label>
              <input type="email" name="c_email" id="c_email" onInput={(e) => { setContactData({ ...contactData, "email_id": e.target.value }) }} required />
            </div>
            <div className="input_field">
              <label htmlFor="c_ph_no">Phone Number *</label>
              <input type="number" name="c_ph_no" id="c_ph_no" onInput={(e) => { setContactData({ ...contactData, "phone_number": e.target.value }) }} required />
            </div>
            <div className="input_field">
              <label htmlFor="c_msg">Message *</label>
              <textarea name="c_msg" id="c_msg" required rows="3" onInput={(e) => { setContactData({ ...contactData, "message": e.target.value }) }}></textarea>
            </div>
            <div className="input_field right-align">
              {cLoading ? (
                <button type="reset" className="button button-submit button-submit-disabled" disabled>SUBMITTING ...</button>) : (
                  <button type="submit" className="button button-submit">SUBMIT</button>)}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

import React from 'react'
import Layout2 from '../components/layout2'
import SEO from '../components/seo'
import { Link } from 'gatsby'
//
import EduCometaImg from '../images/education/cometa_poster.png'
import SyllabusImg from '../images/education/syllabus.png'
import KidsCertImg from '../images/education/kids_certificate.png'

const Education = () => {
	return (
		<Layout2>
			<SEO title="Education @ Cometa" description="App developer coaching for class 5th to 10th" />
			<header className="hero abs-center" style={{ 'minHeight': '35vh', 'padding': '2rem' }}>
				<div className="hero-intro">
					<h1>Education @ Cometa</h1>
					{/* <figure >
						<img src={withCertImg} alt="Aparna with Certificate" />
					</figure> */}
				</div>
			</header>
			<section className="section">
				<div className="education-intro">
					<figure className="poster">
						<img src={EduCometaImg} alt="Education@Cometa" />
					</figure>
					<iframe className="cometa-iframe" title="Cometa App Developer Coaching" src="https://www.youtube.com/embed/toYac31Q9yU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className="abs-center" style={{ 'padding': '1rem' }}>
						<Link to="/education/register/" className="button button-nav-p education-cta">Register</Link>
					</div>
				</div>
			</section>
			<section className="section edu-syllabus">
				<figure className="edu-syllabus-fig cert">
					<img src={KidsCertImg} alt="Kids with Certificate" />
				</figure>
				<figure className="edu-syllabus-fig syllabus">
					<img src={SyllabusImg} alt="Cometa Syllabus" />
				</figure>
			</section>
			<section className="abs-center" style={{ 'padding': '3rem' }}>
				<Link className="button button-nav-p education-cta" to="/education/register/">Join Now</Link>
			</section>
		</Layout2>
	)
}

export default Education

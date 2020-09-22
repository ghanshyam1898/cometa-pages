import React from 'react'
import Layout2 from '../components/layout2'
import SEO from '../components/seo'
import { Link } from 'gatsby'
//
import EduCometaImg from '../images/education/cometa_poster.png'
import SyllabusImg from '../images/education/syllabus.png'
import withCertImg from '../images/education/with_certificate2.png'

const Education = () => {
	return (
		<Layout2>
			<SEO title="Education @ Cometa" />
			<header className="hero abs-center" style={{ 'minHeight': '35vh', 'padding': '2rem' }}>
				<div className="hero-intro">
					<h1>Education @ Cometa</h1>
				</div>
			</header>
			<section className="section">
				<div className="education-intro">
					<figure className="poster">
						<img src={EduCometaImg} alt="Education@Cometa" />
					</figure>
					<figure style={{ 'height': '23rem' }}>
						<img src={withCertImg} alt="Aparna with Certificate" />
					</figure>
					<div className="abs-center" style={{ 'padding': '1rem' }}>
						<Link to="/education/register/" className="button button-nav-p education-cta">Register</Link>
					</div>
				</div>
			</section>
			<section className="section">
				<figure className="edu-syllabus-fig">
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

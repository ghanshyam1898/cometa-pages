import React from 'react'
import Layout2 from '../components/layout2'
import SEO from '../components/seo'
//
import EduCometaImg from '../images/education/education_cometa2.jpeg'
import SyllabusImg from '../images/education/cometa_syllabus2.jpeg'
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
				<h2 className="section-heading">Our <span>Syllabus</span></h2>
				<div className="education-intro">
					<figure>
						<img src={EduCometaImg} alt="Education@Cometa" />
					</figure>
					<figure>
						<img src={SyllabusImg} alt="Syllabus" />
					</figure>
				</div>
			</section>
			<section className="section">
				<h2 className="section-heading">Happy <span>Students</span></h2>
				<div className="education-cta">
					<figure>
						<img src={withCertImg} alt="Aparna with Certificate" />
					</figure>
					<div className="abs-center">
						<button className="button button-nav-p">Register</button>
					</div>
				</div>
			</section>
		</Layout2>
	)
}

export default Education

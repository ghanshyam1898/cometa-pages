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
				{/* <table className="edu-table">
					<thead>
						<tr>
							<th>
								<span>Unit 1</span>
								<h3>UI Elements</h3>
							</th>
							<th>
								<span>Unit 2</span>
								<h3>Programming Features</h3>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<h4>Interactive Mobile App</h4>
								<ul>
									<li>Text Box</li>
									<li>Text Input Box</li>
									<li>Password Input Box</li>
									<li>Buttons</li>
								</ul>
							</td>
							<td>
								<h4>Price Calculator App</h4>
								<ul>
									<li>Conditionals</li>
									<li>Variables</li>
									<li>Loops</li>
									<li>Functions</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="edu-table">
					<thead>
						<tr>
							<th>
								<span>Unit 3</span>
								<h3>Gaming Technology</h3>
							</th>
							<th>
								<span>Unit 4</span>
								<h3>Web App Development</h3>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<h4>Space Shooter Game</h4>
								<ul>
									<li>Motion</li>
									<li>Events</li>
									<li>Sprites</li>
									<li>Actions</li>
								</ul>
							</td>
							<td>
								<h4>Business Website</h4>
								<ul>
									<li>HTML
										<ul>
											<li>Tags</li>
											<li>Attributes</li>
										</ul>
									</li>
									<li>CSS
										<ul type="-">
											<li>Selectors</li>
											<li>Types of CSS</li>
											<li>Properties</li>
										</ul>
									</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table> */}
			</section>
			<section className="abs-center" style={{ 'padding': '3rem' }}>
				<Link className="button button-nav-p education-cta" to="/education/register">Join Now</Link>
			</section>
		</Layout2>
	)
}

export default Education

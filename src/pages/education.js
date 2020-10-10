import React, { useState, useEffect } from 'react'
import Layout2 from '../components/layout2'
import SEO from '../components/seo'
import { Link } from 'gatsby'
//
import EduCometaImg from '../images/education/cometa_poster.png'
import SyllabusImg from '../images/education/syllabus.png'
import KidsCertImg from '../images/education/kids_certificate.png'
import HeroBg from '../images/education/hero_bg.jpg'
import CourseCard from '../components/CourseCard'
import { professionalCourseData, advancedCourseData, beginnerCourseData } from '../helpers/eduCourseData'

const Education = () => {

	const [activeCard, setActiveCard] = useState(undefined)
	const [cardData, setcardData] = useState(undefined)

	useEffect(() => {
		setActiveCard('beginner')
		setcardData(beginnerCourseData)
	}, [beginnerCourseData])

	const handleCourseNavClick = (e) => {
		e.persist()
		const cType = e.target.closest('.edu-course-nav--link').dataset.courseType;
		setActiveCard(cType)
		switch (cType) {
			case 'beginner':
				setcardData(beginnerCourseData)
				break;
			case 'advanced':
				setcardData(advancedCourseData)
				break;
			case 'professional':
				setcardData(professionalCourseData)
				break;
			default:
				console.log('default')
				break;
		}
	}

	return (
		<Layout2>
			<SEO title="Education @ Cometa" description="App developer coaching for class 5th to 10th" />
			<header className="hero hero-edu abs-center" style={{ 'backgroundImage': `url(${HeroBg})` }}>
				<div className="hero-intro">
					<h1>Education @ Cometa</h1>
					<div className="center hero-cta-container">
						<Link className="button button-hero" to="/education/register/?action=demo">Book a FREE Trial</Link>
					</div>
				</div>
			</header>
			<section className="section">
				<div className="education-intro">
					<figure className="poster">
						<img src={EduCometaImg} alt="Education@Cometa" />
					</figure>
					<iframe className="cometa-iframe" title="Cometa App Developer Coaching" src="https://www.youtube.com/embed/toYac31Q9yU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<div className="abs-center" style={{ 'padding': '1rem' }}>
						<Link to="/education/register/" className="button button-nav-p education-cta">REGISTER</Link>
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
				<Link className="button button-nav-p button-trial education-cta" to="/education/register/">JOIN NOW</Link>
			</section>
			<section className="section edu-course">
				<h2 className="section-heading">Curriculum &amp; Pricing</h2>
				<div className="edu-course-nav">
					<div className={`edu-course-nav--link ${activeCard === 'beginner' ? 'active' : ''}`} data-course-type="beginner" onClick={handleCourseNavClick} >Beginner<span>{`(Standard 5-7)`}</span></div>
					<div className={`edu-course-nav--link ${activeCard === 'advanced' ? 'active' : ''}`} data-course-type="advanced" onClick={handleCourseNavClick} >Advanced<span>{`(Standard 8-9)`}</span></div>
					<div className={`edu-course-nav--link ${activeCard === 'professional' ? 'active' : ''}`} data-course-type="professional" onClick={handleCourseNavClick} >Professional<span>{`(Standard 10+)`}</span></div>
				</div>
				<div className="edu-course-card--container cometa-scroll scroll-x">
					{cardData && cardData.map((card, i) => {
						return (<CourseCard
							key={i}
							heading={card.heading}
							c={card.c}
							save={card.save}
							desc={card.desc}
							pdfLink={card.pdfLink}
							cPrice={card.cPrice}
							aPrice={card.aPrice}
							buyLink={card.buyLink}
							achievement={card.achievement}
						/>)
					})}
				</div>
			</section>
		</Layout2>
	)
}

export default Education

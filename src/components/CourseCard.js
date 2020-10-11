import { Link } from 'gatsby'
import React from 'react'
import FeatherIcon from '../components/FeatherIcon'

const CourseCard = ({ heading, c, save, desc, pdfLink, cPrice, aPrice, buyLink, achievement }) => {
	return (
		<div className="edu-course-card">
			<div className="edu-course-card__heading">
				<h3>{heading}</h3>
				<div>
					<span>{c}</span>
					<span className="badge">{save}% OFF</span>
				</div>
			</div>
			<div className="edu-course-card__details">
				<h4>Curriculum Includes</h4>
				<p>{desc}</p>
				<a href={pdfLink} className="base-link">View Detailed Curriculum</a>
			</div>
			<div className="edu-course-card__cta">
				<div className="price">
					<span className="current">Rs. {cPrice}</span>
					<del className="save">Rs. {aPrice}</del>
				</div>
				<Link to={buyLink} style={{ 'textTransform': 'uppercase' }} className="button button-nav-p full-w button-trial">Book a FREE Trial</Link>
			</div>
			<div className="edu-course-card__meta">
				<h4>
					<FeatherIcon icon="star" />
					<span>Achievements</span>
				</h4>
				<div className="meta__list">
					{achievement && achievement.map((a, i) => {
						return (
							<div className="i-item" key={i}>
								<figure>
									<FeatherIcon icon={a.icon} />
								</figure>
								<p dangerouslySetInnerHTML={{ __html: a.text }} />
							</div>)
					})}
				</div>
			</div>
		</div>
	)
}

export default CourseCard

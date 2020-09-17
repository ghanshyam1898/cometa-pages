import React from 'react'
import FeatherIcon from './FeatherIcon'

const Projects = ({pImg,pName,pText,pLink,pLinkImg,pLinkText}) => {
	return (
		<article className="project">
			<figure className="project__img">
				<img src={pImg} alt={pName} />
			</figure>
			<div className="project__content">
				<h3 className="project__head">{pName}</h3>
				<p className="project__meta">{pText}</p>
			</div>
			{pLink ? (
				<div className="project__cta">
					{pLinkImg ? (
						<a href={pLink}><img alt='Goto Project' src={pLinkImg} /></a>
					):(
						<a href={pLink} target="_blank" rel="noreferrer noopener" className="project-link">
							<span>{pLinkText}</span>
							<FeatherIcon icon="external-link"/>
						</a>
					)}
				</div>
			):(<></>)}
		</article>
	)
}

export default Projects

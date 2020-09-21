import React from 'react'

const FeatherIcon = ({ classes, icon }) => {
	return (
		<svg className={`i-s ${classes ? classes : ''}`}>
			<use href={`/icon-sprite.svg#${icon}`}></use>
		</svg>
	)
}

export default FeatherIcon

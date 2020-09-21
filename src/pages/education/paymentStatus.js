import React, { useState, useEffect } from 'react'
import FeatherIcon from '../../components/FeatherIcon'
import SEO from '../../components/seo'
import withLocation from '../../components/withLocation'
import '../../css/style.css'
import { Helmet } from 'react-helmet'

const PaymentStatus = ({ search }) => {
	const { payment_status, message } = search

	const [isSuccess, setIsSuccess] = useState(false)
	const [isErr, setIsErr] = useState(false)
	const [isPending, setIsPending] = useState(false)

	useEffect(() => {
		if (window.history && window.history.pushState) {
			window.addEventListener('popstate', (e) => {
				console.log(e)
				window.location = '/education/'
			})
			window.history.replaceState({ id: null }, null, window.location.href);
			window.history.pushState({ id: 1 }, null, '#!/e1');
		}

		if (payment_status === 'TXN_SUCCESS') { setIsSuccess(true) }
		else if (payment_status === 'TXN_FAILURE') { setIsErr(true) }
		else if (payment_status === 'PENDING') { setIsPending(true) }
	}, [payment_status])

	return (
		<div className="section abs-center section-pay-status">
			{isSuccess ? (<>
				<SEO title="Payment Successful" />
				<Helmet>
					<meta name="theme-color" content="#007E33" />
				</Helmet>
				<div className="section-pay-design success"></div>
				<div className="message success">
					<FeatherIcon icon="smile" />
					<h2>{message}</h2>
				</div>
			</>) : (<></>)}
			{isErr ? (<>
				<SEO title="Payment Failed" />
				<Helmet>
					<meta name="theme-color" content="#CC0000" />
				</Helmet>
				<div className="section-pay-design error"></div>
				<div className="message error">
					<FeatherIcon icon="frown" />
					<h2>{message}</h2>
				</div>
			</>) : (<></>)}
			{isPending ? (<>
				<SEO title="Payment Pending" />
				<Helmet>
					<meta name="theme-color" content="#FF8800" />
				</Helmet>
				<div className="section-pay-design warn"></div>
				<div className="message warn">
					<FeatherIcon icon="meh" />
					<h2>{message}</h2>
				</div>
			</>) : (<></>)}
		</div>
	)
}

export default withLocation(PaymentStatus)
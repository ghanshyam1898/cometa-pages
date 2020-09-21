import React from 'react'
import SEO from '../../components/seo'
import withLocation from '../../components/withLocation'

const PaymentStatus = ({ search }) => {
	const { errorMessage } = search
	return (
		<div className="section abs-center">
			<SEO title={errorMessage ? "Payment Error" : "Payment Successful"} />
			{errorMessage ? (<>
				<h1>{errorMessage}</h1>
			</>) : (<>
				<h1>Payment Successful!</h1>
			</>)}
		</div>
	)
}

export default withLocation(PaymentStatus)
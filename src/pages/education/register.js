import React, { useState } from 'react'
import Layout2 from '../../components/layout2'
import SEO from '../../components/seo'
import { Helmet } from 'react-helmet'

const Register = () => {

	const [regData, setRegData] = useState({
		"full_name": "",
		"standard": "",
		"phone_number": "",
		"place": ""
	})
	const [pay1Data, setPay1Data] = useState(undefined)

	const makePayMent = (data, callback) => {
		fetch(`https://quiz-app.cometaintellect.com/apiv1/save_form_and_generate_paytm_checksum/`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res_data => {
				callback(res_data)
			})
			.catch(err => console.log('ERR', err))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit')
		makePayMent(regData, (data) => {
			setPay1Data(data)
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('payData', JSON.stringify(data))
			}
		})
	}


	return (
		<Layout2>
			<SEO title="Register - Education @ Cometa" />
			{pay1Data ? (<>
				<section className="section">
					<form method="post" action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${pay1Data.mid}&orderId=${pay1Data.orderId}`} name="paytm">
						<table border="1">
							<tbody>
								<input type="hidden" name="mid" value={pay1Data.mid} />
								<input type="hidden" name="orderId" value={pay1Data.orderId} />
								<input type="hidden" name="txnToken" value={pay1Data.txnToken} />
							</tbody>
						</table>
					</form>
					<Helmet>
						<script type="text/javascript"> document.paytm.submit(); </script>
					</Helmet>
				</section>
			</>) : (<>
				<section className="section">
					<div className="form_container">
						<h2 className="center">Register for App Developer</h2>
						<div className="divider"></div>
						<form method="POST" action="" onSubmit={handleSubmit}>
							<div className="input_field">
								<label htmlFor="f_name">Full Name</label>
								<input type="text" name="f_name" id="f_name" placeholder="e.g. Harry Potter" onChange={(e) => { setRegData({ ...regData, "full_name": e.target.value }) }} required />
							</div>
							<div className="input_field">
								<label htmlFor="std">Standard</label>
								<select name="std" id="std" onBlur={(e) => { setRegData({ ...regData, "standard": e.target.value }) }} defaultValue="" required>
									<option value="">SELECT</option>
									<option value="5">5th</option>
									<option value="6">6th</option>
									<option value="7">7th</option>
									<option value="8">8th</option>
									<option value="9">9th</option>
									<option value="10">10th</option>
								</select>
							</div>
							<div className="input_field">
								<label htmlFor="p_no">Phone Number</label>
								<input type="number" name="p_no" id="p_no" onChange={(e) => { setRegData({ ...regData, "phone_number": e.target.value }) }} required />
							</div>
							<div className="input_field">
								<label htmlFor="place">Place</label>
								<input type="text" name="place" placeholder="e.g. Hogwarts" onChange={(e) => { setRegData({ ...regData, "place": e.target.value }) }} required />
							</div>
							<div className="input_field right-align">
								<button type="submit" className="button button-nav-p edu-reg-btn">Submit</button>
							</div>
						</form>
					</div>
				</section>
			</>)}

		</Layout2>
	)
}

export default Register

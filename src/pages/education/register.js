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
	const [isModalOpen, setIsModalOpen] = useState(false)

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
			setIsModalOpen(true)
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('payData', JSON.stringify(data))
			}
		})
	}

	const submitPay1 = () => {
		document.getElementById('pay1Form').submit();
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<Layout2>
			<SEO title="Register - Education @ Cometa" />
			<div className={`modal-bg ${isModalOpen ? 'open' : ''}`} onClick={closeModal}></div>
			<div className={`modal ${isModalOpen ? 'open' : ''}`}>
				<div className="modal-content">
					<h3>Payment</h3>
					<p>You can pay the first month fees &#x20B9; 3000 to complete your registration.</p>
					{pay1Data ? (<>
						<form id="pay1Form" method="post" action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${pay1Data.mid}&orderId=${pay1Data.orderId}`} name="paytm">
							<input type="hidden" name="mid" value={pay1Data.mid} />
							<input type="hidden" name="orderId" value={pay1Data.orderId} />
							<input type="hidden" name="txnToken" value={pay1Data.txnToken} />
						</form>
						<div className="right-align">
							<button className="button button-nav-p" onClick={submitPay1}>Pay Now</button>
						</div>
					</>) : (<></>)}
				</div>
			</div>
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
		</Layout2>
	)
}

export default Register

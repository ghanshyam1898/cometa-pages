import React, { useState, useEffect } from 'react'
import Layout2 from '../../components/layout2'
import SEO from '../../components/seo'
import withLocation from '../../components/withLocation'

const Register = ({ search }) => {

	const { action } = search

	const [regData, setRegData] = useState({
		"student_full_name": "",
		"father_full_name": "",
		"mother_full_name": "",
		"student_dob": "",
		"is_demo": false,
		"standard": "",
		"phone_number": "",
		"place": ""
	})

	const [pay1Data, setPay1Data] = useState(undefined)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [processing, setProcessing] = useState(false)
	const [pay1Err, setPay1Err] = useState(undefined)

	useEffect(() => {
		if (action) {
			console.log(action)
			setRegData({ ...regData, "is_demo": true })
		}
		document.querySelector('header.header a.button').classList.add('hidden');
	}, [action])

	const makePayMent = (data, callback) => {
		// https://quiz-app.cometaintellect.com/apiv1/save_form_and_generate_paytm_checksum/
		fetch(`https://api.cometaintellect.com/education_student_registration/`, {
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
		setLoading(true)
		makePayMent(regData, (data) => {
			setLoading(false)
			console.log('data', data);
			if (data) {
				setPay1Data(data)
				setIsModalOpen(true)
				if (typeof window !== 'undefined') {
					window.localStorage.setItem('payData', JSON.stringify(data))
				}
			}
			else {
				setPay1Err(data)
			}
		})
		console.log(regData);
	}

	const submitPay1 = () => {
		setProcessing(true)
		document.getElementById('pay1Form').submit();
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<Layout2>
			<SEO title="Register - Education @ Cometa" />
			<div className={`modal-bg ${isModalOpen ? 'open' : ''}`} aria-label="Pay Modal Close" onClick={closeModal} role="button" tabIndex={0} onKeyDown={() => { }}></div>
			<div className={`modal ${isModalOpen ? 'open' : ''}`}>
				<div className="modal-content">
					{pay1Data ? (<>
						<p>{pay1Data.message}</p>
						{pay1Data.proceed_to_payment ? (<>
							<h2>&#x20B9; {pay1Data.amount}</h2>
							<form id="pay1Form" method="post" action={`https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=${pay1Data.mid}&orderId=${pay1Data.orderId}`} name="paytm">
								<input type="hidden" name="mid" value={pay1Data.mid} />
								<input type="hidden" name="orderId" value={pay1Data.orderId} />
								<input type="hidden" name="txnToken" value={pay1Data.txnToken} />
							</form>
							<div className="right-align" style={{ 'marginTop': '2rem' }}>
								{processing ? (<>
									<button className="button disabled">Processing ...</button>
								</>) : (<>
									<button className="button button-nav-p" onClick={submitPay1}>Pay Now</button>
								</>)}
							</div>
						</>) : (<>
							<div className="right-align" style={{ 'marginTop': '2rem' }}>
								<button className="button button-nav-p" onClick={closeModal}>Okay</button>
							</div>
						</>)}

					</>) : (<></>)}
				</div>
			</div>
			<section className="section">
				<div className="form_container">
					{action ? (<>
						<h2 className="center">Book FREE Trial</h2>
						<p className="center">Register for App Developer Coaching</p>
					</>) : (<>
						<h2 className="center">Register for App Developer Coaching</h2>
					</>)}
					<div className="divider"></div>
					{pay1Err ? (<p className="err-text">API_ERR, Please reload.</p>) : (<></>)}
					<form method="POST" action="" onSubmit={handleSubmit}>
						<div className="input_field">
							<label htmlFor="f_name">Full Name</label>
							<input type="text" name="f_name" id="f_name" placeholder="e.g. Harry Potter" onChange={(e) => { setRegData({ ...regData, "student_full_name": e.target.value }) }} required />
						</div>
						<div className="input_field">
							<label htmlFor="father_name">Father's Name</label>
							<input type="text" name="father_name" id="father_name" onChange={(e) => { setRegData({ ...regData, "father_full_name": e.target.value }) }} required />
						</div>
						<div className="input_field">
							<label htmlFor="mother_name">Mother's Name</label>
							<input type="text" name="mother_name" id="mother_name" onChange={(e) => { setRegData({ ...regData, "mother_full_name": e.target.value }) }} required />
						</div>
						<div className="input_field">
							<label htmlFor="student_dob">Date of Birth</label>
							<input type="date" name="dob" id="student_dob" onChange={(e) => { setRegData({ ...regData, "student_dob": e.target.value }) }} required />
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
							<input type="number" name="p_no" id="p_no" min="0" onChange={(e) => { setRegData({ ...regData, "phone_number": e.target.value }) }} required />
						</div>
						<div className="input_field">
							<label htmlFor="place">Place</label>
							<input type="text" name="place" placeholder="e.g. Hogwarts" onChange={(e) => { setRegData({ ...regData, "place": e.target.value }) }} required />
						</div>
						<div className="input_field right-align">
							{loading ? (
								<button className="button disabled edu-reg-btn">Submitting...</button>
							) : (
									<button type="submit" className="button button-nav-p edu-reg-btn">Submit</button>
								)}
						</div>
					</form>
				</div>
			</section>
		</Layout2>
	)
}

export default withLocation(Register)

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
		makePayMent(regData, (data) => {
			console.log(data)
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
				<form method="POST" action="" onSubmit={handleSubmit}>
					<div className="">
						<label htmlFor="f_name">
							Full Name
				</label>
						<input type="text" name="f_name" id="f_name" onChange={(e) => { setRegData({ ...regData, "full_name": e.target.value }) }} />
					</div>
					<div className="">
						<label htmlFor="std">
							Standard
				</label>
						<select name="std" id="std" onBlur={(e) => { setRegData({ ...regData, "standard": e.target.value }) }}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>
					<div className="">
						<label htmlFor="p_no">
							Phone Number
				</label>
						<input type="number" name="p_no" id="p_no" onChange={(e) => { setRegData({ ...regData, "phone_number": e.target.value }) }} />
					</div>
					<div className="">
						<label htmlFor="place">
							Place
				</label>
						<textarea name="place" onChange={(e) => { setRegData({ ...regData, "place": e.target.value }) }}></textarea>
					</div>
					<div className="">
						<button type="submit">Submit</button>
					</div>
				</form>
			</>)}

		</Layout2>
	)
}

export default Register

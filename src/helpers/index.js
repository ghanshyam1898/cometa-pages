const API = `https://api.cometaintellect.com`;
// https://quiz-app.cometaintellect.com/apiv1/save_form_and_generate_paytm_checksum/

export const makePayMent = async (data, callback) => {
	await fetch(`${API}/education_student_registration/`, {
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

export const signupForNewsletter = async (data, callback) => {
	await fetch(`${API}/subscribe_for_news_letter/`, {
		method: 'POST',
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(res_data => {
			callback(res_data)
		})
		.catch(err => console.log('NEWSLETTER_ERR', err))
}

export const submitContact = async (data, callback) => {
	await fetch(`${API}/contact_us/`, {
		method: 'POST',
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(res_data => {
			callback(res_data)
		})
		.catch(err => console.log('CONTACT_ERR', err))
}
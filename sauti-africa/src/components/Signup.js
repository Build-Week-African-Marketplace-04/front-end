import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Signup = () => {

	// const { push } = useHistory();

	// Local State
	const [user, setUser] = useState({
		username: '',
		password: ''
	});
	const [error, setError] = useState({
		message: ''
	})

	// Functions
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// axios.post('', user)
		// 	.then(res => {
		// 		console.log(res);
		// 		push('/marketplace')
		// 	})
		// 	.catch(err => console.error(err));
	}

	// DOM
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					id='username'
					value={user.username}
					placeholder='Username'
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					id='password'
					value={user.password}
					placeholder='Password'
					onChange={handleChange}
				/>
				<button>Sign Up</button>
			</form>
		</div>
	);
}

export default Signup;
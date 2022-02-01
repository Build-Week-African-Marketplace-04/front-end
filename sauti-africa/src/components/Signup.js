import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

	const navigate = useNavigate();

	// Local State
	const [user, setUser] = useState({
		username: '',
		password: '',
		role: ''
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
		axios.post('https://build-4.herokuapp.com/api/users/signup', user)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				navigate('/marketplace');
			})
			.catch(err => {
				console.error(err);
				setError({
					message: err.response.data.error
				});
			});
		setUser({
			...user,
			username: '',
			password: '',
			role: ''
		});
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
				<input
					type='text'
					name='role'
					id='role'
					value={user.role}
					placeholder='Role'
					onChange={handleChange}
				/>
				<button>Sign Up</button>
				{error.message ? <p>{error.message}</p> : ''}
			</form>
		</div>
	);
}

export default Signup;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
	
	const navigate = useNavigate();

	useEffect(() => {
		axios.post('https://build-4.herokuapp.com/api/users/logout')
			.then(res => {
				localStorage.removeItem('token');
				navigate('/login');
			})
			.catch(err => console.error(err));
	}, []);

	// DOM
	return(<div></div>);
}

export default Logout;
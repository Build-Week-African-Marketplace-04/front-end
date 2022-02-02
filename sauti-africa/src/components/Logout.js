import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {
	
	const navigate = useNavigate();

	useEffect(() => {
		axiosWithAuth.post('/users/logout')
			.then(res => {
				localStorage.removeItem('token');
				navigate('/login');
			})
			.catch(err => console.error(err));
	});

	// DOM
	return(<div></div>);
}

export default Logout;
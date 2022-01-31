import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const isLoggedIn = localStorage.getItem('token');

	// DOM
	return(
		<div className='nav-bar'>
			<div className='nav-container'>
				<div className='main-nav'>
					{isLoggedIn && <NavLink className='main-nav-link' to='/marketplace'>Marketplace</NavLink>}
					{isLoggedIn && <NavLink className='main-nav-link' to='/add-item'>Add Item</NavLink>}
				</div>
				<div className='sub-nav'>
					{isLoggedIn && <NavLink className='sub-nav-link' to='/logout'>Log Out</NavLink>}
					{!isLoggedIn && <NavLink className='sub-nav-link' to='/signup'>Sign Up</NavLink>}
					{!isLoggedIn && <NavLink className='sub-nav-link' to='/login'>Log In</NavLink>}
				</div>
			</div>
		</div>
	);
}

export default Navigation;
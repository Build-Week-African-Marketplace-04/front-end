import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useNavigate } from 'react-router-dom';

const AddItemForm = () => {

	const navigate = useNavigate();

	// Local State
	const [item, setItem] = useState({
		name: '',
		description: '',
		price: ''
	});

	// Functions
	const handleChange = (e) => {
		setItem({
			...item,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth().post('/items', item)
			.then(res => {
				console.log(res);
				navigate('/marketplace');
			})
			.catch(err => console.error(err));
	}

	// DOM
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					id='name'
					value={item.name}
					placeholder='Name'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='price'
					id='price'
					value={item.price}
					placeholder='Price'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='description'
					id='description'
					value={item.description}
					placeholder='Description'
					onChange={handleChange}
				/>
				<button>Add Item</button>
			</form>
		</div>
	);
}

export default AddItemForm;
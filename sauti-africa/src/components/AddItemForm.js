import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useNavigate } from 'react-router-dom';

const AddItemForm = () => {

	const navigate = useNavigate();

	// Local State
	const [item, setItem] = useState({
		item_id: '',
		item_name: '',
		item_description: '',
		item_price: '',
		category_id: 2,
		market_id: 3
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
		axiosWithAuth().post('/items/new-item', item)
			.then(res => {
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
					name='item_name'
					id='name'
					value={item.item_name}
					placeholder='Name'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='item_price'
					id='price'
					value={item.item_price}
					placeholder='Price'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='item_description'
					id='description'
					value={item.item_description}
					placeholder='Description'
					onChange={handleChange}
				/>
				<button>Add Item</button>
			</form>
		</div>
	);
}

export default AddItemForm;
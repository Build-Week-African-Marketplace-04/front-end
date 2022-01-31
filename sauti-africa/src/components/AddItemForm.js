import React from 'react';

const AddItemForm = () => {

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
	}

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
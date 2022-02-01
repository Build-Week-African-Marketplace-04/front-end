import React from 'react';

const Category = (props) => {

	// Destructure Props
	const { category, switchCategory } = props;

	// Functions
	const handleClick = () => {
		switchCategory(category.id);
	}

	// DOM
	return(
		<div className='category'>
			<button onClick={handleClick}>{category.name}</button>
		</div>
	);
}

export default Category;
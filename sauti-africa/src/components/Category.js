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
		<div>
			<button className='category' onClick={handleClick}>{category.category}</button>
		</div>
	);
}

export default Category;
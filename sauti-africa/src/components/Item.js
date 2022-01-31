import React from 'react';

const Item = (props) => {

	// Destructure Props
	const { name, description, price } = props;

	return(
		<div className='item'>
			<div className='itemHeader'>
				<h3>{name}</h3>
				<p>{price}</p>
			</div>
			<div className='itemBody'>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Item;
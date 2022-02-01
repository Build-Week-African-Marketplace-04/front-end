import React from 'react';

const Item = (props) => {

	// Destructure Props
	const { item } = props;

	return(
		<div className='item'>
			<div className='itemHeader'>
				<h3>{item.name}</h3>
				<p>{item.price}</p>
			</div>
			<div className='itemBody'>
				<p>{item.description}</p>
			</div>
		</div>
	);
}

export default Item;
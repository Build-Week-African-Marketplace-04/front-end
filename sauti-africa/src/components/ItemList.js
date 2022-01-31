import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {

	// State
	const [itemList] = useState([]); // Once ready, add setItemList back in

	// Functions
	useEffect(() => {
		// axios.get('')
		// 	.then(res => {
		// 		console.log(res);
		// 		setItemList(res.data);
		// 	})
		// 	.catch(err => console.error(err));
	}, []);

	// DOM
	return(
		<div className='itemList'>
			{itemList.map(item => <Item item={item} key={item.id}/>)}
		</div>
	);
}

export default ItemList;
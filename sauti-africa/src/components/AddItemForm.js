import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {

	// State
	const [itemList, setItemList] = useState([]);

	// Functions
	useEffect(() => {
		axios.get('')
			.then(res => {
				console.log(res);
				setItemList(res.data);
			})
			.catch(err => console.error(err));
	}, []);

	return(
		<div clasName='itemList'>
			{itemList.map(item => <Item item={item} key={item.id}/>)}
		</div>
	);
}

export default ItemList;
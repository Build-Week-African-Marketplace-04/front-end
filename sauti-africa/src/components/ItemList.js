import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = (props) => {

	// Destructure Props
	const { selectedCategory } = props;

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

	useEffect(() => {
		axios.get('')
			.then(res => {
				console.log(res);
				const filteredList = res.data.filter(item => item.categoryId === selectedCategory);
				setItemList(filteredList);
			})
			.catch(err => console.error(err));
	}, [selectedCategory]);

	// DOM
	return(
		<div className='itemList'>
			{itemList.map(item => <Item item={item} key={item.id}/>)}
		</div>
	);
}

export default ItemList;
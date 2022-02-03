import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

// Components
import Category from './Category';

const CategoryList = (props) => {

	// Destructure Props
	const { switchCategory } = props;

	// State
	const [categories, setCategories] = useState([]);

	// Functions
	useEffect(() => {
		axiosWithAuth().get('/items/categories')
			.then(res => {
				setCategories(res.data);
			})
			.catch(err => console.error(err));
	}, []);

	// DOM
	return(
		<div className='categoryList'>
			{categories.map(category => <Category category={category} switchCategory={switchCategory} key={category.category_id}/>)}
		</div>
	);
}

export default CategoryList;
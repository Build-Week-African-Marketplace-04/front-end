import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Category from './Category';

const CategoryList = (props) => {

	// Destructure Props
	const { switchCategory } = props;

	// State
	const [categories, setCategories] = useState([]);

	// Functions
	useEffect(() => {
		axios.get('')
			.then(res => {
				console.log(res);
				setCategories(res.data);
			})
			.catch(err => console.error(err));
	}, []);

	// DOM
	return(
		<div className='categoryList'>
			{categories.map(category => <Category category={category} switchCategory={switchCategory} key={category.id}/>)}
		</div>
	);
}

export default CategoryList;
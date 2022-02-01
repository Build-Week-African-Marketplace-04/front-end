import React, { useState } from 'react';

// Components
import CategoryList from './CategoryList';
import ItemList from './ItemList';

const Marketplace = () => {
	// State
	const [selectedCategory, setSelectedCategory] = useState('');
	
	// Functions
	const switchCategory = (categoryId) => {
			setSelectedCategory(categoryId);
	}
  
	// DOM
	return(
		<div className='marketplaceWrapper'>
			<CategoryList switchCategory={switchCategory}/>
			<ItemList selectedCategory={selectedCategory}/>
		</div>
	);
}

export default Marketplace;
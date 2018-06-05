import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';


const CategoryItem = (props) => (
	<MenuItem value={props.id} primaryText={props.name} />
);
export default CategoryItem;
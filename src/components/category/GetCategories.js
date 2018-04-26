import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { getEventCategories } from '../../actions/authEvents.actions';
import CategoryItem from './CategoryItem';

const initialState = {
	categories: []
};

class Category extends Component {

	constructor(props) {
		super(props);
		this.state = {
			initialState
		};
	}

    
	componentWillMount() {
		this.props.getEventCategories();
	}
    
	render() {

		if(Object.getOwnPropertyNames(this.props.categories).length === 0){
			return (<div></div>);
		}
		const categoryNode = this.props.categories.map( ( category ) => {

			return (
				<CategoryItem key={ category.id } id={category.id} 
					name={category.category_name}/>
			);
		});
		return (
			<div>
				{ categoryNode }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.authEvent
	};
};

const mapDispathToProps = (dispatch) => {
	return {
		getEventCategories: () => dispatch(getEventCategories())
	};
};
export default connect(mapStateToProps, mapDispathToProps)(Category);
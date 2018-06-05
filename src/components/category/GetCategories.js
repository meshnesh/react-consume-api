import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { getEventCategories } from '../../actions/authEvents.actions';


const initialState = {
	categories: []
};

class Category extends Component {

	constructor(props) {
		super(props);
		this.state = {
			initialState,
			value: 1,
		};
	}
    
	componentWillMount() {
		this.props.getEventCategories();
	}

    

	render() {

		return (
			<SelectField name='event_category'
				floatingLabelText="Select event Category"
				value={this.state.value}
				onChange={this.props.handleCategoryChange }
			>
				{ 
					this.props.categories.map(category => 
						<MenuItem key={category.id} value={category.id} primaryText={category.category_name} /> ) 
				}
			</SelectField>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.authEvent[0].categories
	};
};

const mapDispachToProps = (dispatch) => {
	return {
		getEventCategories: () => dispatch(getEventCategories())
	};
};
export default connect(mapStateToProps, mapDispachToProps)(Category);
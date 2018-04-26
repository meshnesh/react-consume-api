import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
  

const styles = {
    customWidth: {
      width: 150,
    },
};

// const CategoryItem = () => (
class CategoryItem extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        value: 1,
    };
    
    handleChange = (event, index, value) => this.setState({value});
    
	render() {
        const category = this.props
		return (
			<div>
				<SelectField
					floatingLabelText="Select event Category"
					value={this.state.value}
					onChange={this.handleChange}>
					<MenuItem value={category.id} primaryText={category.name} />
					<MenuItem value={2} primaryText="Every Night" />
					<MenuItem value={3} primaryText="Weeknights" />
					<MenuItem value={4} primaryText="Weekends" />
					<MenuItem value={5} primaryText="Weekly" />
				</SelectField>
			</div>
		);
	}

}

export default CategoryItem;
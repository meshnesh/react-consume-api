import React, { Component } from 'react';

import Category from '../category/GetCategories';

const Search = (props) => {
	return (
		<div className="row search">
			<form className="col s12">
				<div className="row">
					<div className="input-field col s6">
						<input placeholder="Location" id="Location" type="text" className="validate" onChange={props.onChange}/>
						<label for="Location">Location</label>
					</div>
					<div className="input-field col s12 m6">
						<Category />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
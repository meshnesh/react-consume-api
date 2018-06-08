import React, { Component } from 'react';

const Search = (props) => {
	return (
		<div className="row search">
			<form className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<input placeholder="Location / Title" id="Location" type="text" className="validate" onChange={props.onChange}/>
						<label for="Location/Title">Location</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
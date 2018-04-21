import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const event = (props) => (

	<div className="col s12 m4">

		<div className="card">
			<div className="card-image waves-effect waves-block waves-light">

				<img className="activator" src={props.image_url}/>

			</div>

			<div className="card-content">

				<span className="card-title grey-text text-darken-4">{props.title}</span>
				<p> {props.location} </p>
				<h6> {props.date} {props.time} </h6>

				<Link className="waves-effect waves-light btn" to={`/${props.id}`}>
                    VIEW
				</Link>

			</div>
		</div>
	</div>
);
    

export default event;
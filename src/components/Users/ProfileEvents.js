import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';


const ProfileEvent = (props) => (
	<div className="collection">
		<div className="collection-item" id={ props.id }>
			<h4>{ props.title }</h4>
			<span>{ props.date } at { props.time }</span> <span className="event-rsvp">0 RSVP</span>
			<ul className="manage_tickets">
				<li>
					<a>
						<i className="fas fa-cogs"></i> Manage
					</a>
				</li>
				<li>
					<a>
						<Link to={`/edit/${props.id}`}>
							<i className="far fa-edit"></i> Edit
						</Link>
					</a>
				</li>
				<li>
					<a>
						<Modal />
					</a>
				</li>
			</ul>
		</div>
		<Link to="/addevent">
			<a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
		</Link>
	</div>
);
    

export default ProfileEvent;
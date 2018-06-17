import React from 'react';
import { Link } from 'react-router-dom';
import ModalBUtton from '../Modal';



const ProfileEvent = (props) => (
	<div className="collection">
		<div className="collection-item" id={ props.profileEvent.id }>
			<h4>{ props.profileEvent.title }</h4>
			<span>{ props.profileEvent.date } at { props.profileEvent.time }</span>
			<ul className="manage_tickets">
				<li>
					<a>
						<i className="fas fa-cogs"></i> Manage
					</a>
				</li>
				<li>
					<a>
						<Link to={`/edit/${props.profileEvent.id}`}>
							<i className="far fa-edit"></i> Edit
						</Link>
					</a>
				</li>
				<li>
					<a>
						<ModalBUtton toggleModal={props.toggleModal} id={props.profileEvent.id}/>
					</a>
				</li>
			</ul>
		</div>
		<Link to="/addevent">
			<a className="btn-floating btn-large waves-effect waves-light red"><i class="fas fa-plus fa-2x"></i></a>
		</Link>
	</div>
);
    

export default ProfileEvent;
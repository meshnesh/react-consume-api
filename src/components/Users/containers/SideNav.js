import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		
		<ul className="collection with-header col s3">
			<li className="collection-header collection-item avatar">
				<i className="material-icons circle">person</i>
				<span className="title">User Name</span>
				<p> Update Profile</p>
			</li>

			<Link to="/newProfile">
				<a class="collection-item"><i class=" material-icons">home</i><div class="secondary-content">Dashboard</div></a>
			</Link>
    
			<Link to="/AddEvent">
				<a class="collection-item"><i class="material-icons">send</i><div class="secondary-content">Create Event</div></a>
			</Link>
			
		</ul>
	);
};

export default SideNav;

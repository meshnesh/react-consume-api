import React from 'react';

const SideNav = () => {
	return (
		
		<ul className="collection with-header col s3">
			<li className="collection-header collection-item avatar">
				<i className="material-icons circle">person</i>
				<span className="title">User Name</span>
				<p> Update Profile</p>
			</li>
    
			<a class="collection-item"><i class=" material-icons">home</i><div class="secondary-content">Dashboard</div></a>
			<a class="collection-item"><i class="material-icons">send</i><div class="secondary-content">Create Event</div></a>
			<a class="collection-item"><i class="material-icons">send</i><div class="secondary-content">Alvin</div></a>
			<a class="collection-item"><i class="material-icons">send</i><div class="secondary-content">Alvin</div></a>
			<a class="collection-item"><i class="material-icons">send</i><div class="secondary-content">Alvin</div></a>
			<a class="collection-item"><i class="material-icons">send</i><div class="secondary-content">Alvin</div></a>
		</ul>
	);
};

export default SideNav;

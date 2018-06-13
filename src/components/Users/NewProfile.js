import React from 'react';
import { Link } from 'react-router-dom';

import ModalBUtton from '../Modal';

const DashboardPage = (props) => (
	
	

	<div className="col s12 l6">
		<div className="card" id={props.profileEvent.id}>
			<div className="card-image">
				<img src={props.profileEvent.image_url}/>
			</div>

			<div className="card-content">

				<span className="card-title grey-text text-darken-4">{ props.profileEvent.title }</span>
				<p> {props.profileEvent.location} </p>
				<h6> { props.profileEvent.date } at { props.profileEvent.time } </h6>

			</div>

			<div className="card-action">
				<div class="row">
					<div class="col s6">
						<Link className="waves-effect waves-light btn profile_edit" to={`/edit/${props.profileEvent.id}`}>
							<i class="fas fa-pencil-alt"></i>
						</Link>
					</div>
					<div class="col s6">
						<ModalBUtton toggleModal={props.toggleModal} id={props.profileEvent.id}/>
					</div>
				</div>
			</div>
		</div>
	</div>
					

				
          
);

export default DashboardPage;

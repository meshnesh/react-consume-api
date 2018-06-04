import React from 'react';
  
const ModalBUtton = (props) => (
	<div>
		<a className="waves-effect waves-light btn modal-trigger" onClick={() => props.toggleModal(props.id)}>
			<i className="fas fa-eye"></i> Modal
		</a>
	</div>
	
);

export default ModalBUtton;

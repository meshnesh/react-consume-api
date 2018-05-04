import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ProfileEvent from './ProfileEvents';

import { userEventsAction, deleteEventAction } from '../../actions/authEvents.actions';


class UserProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			toggle:false,
			selectedId: null,
			eventDeleted:false
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}
	componentWillMount(){
		this.props.userEventsAction();
	}

	toggleModal(id) {
		this.setState({ toggle: !this.state.toggle, selectedId: id});
	}

	onDelete(id) {
		let eventId = this.state.selectedId;
		this.props.deleteEventAction(eventId);
		this.setState({
			toogle:false,
			selectedId: id,
			eventDeleted:true
		});
		setTimeout(
			function() {
				this.props.history.push('/'); 
			}
				.bind(this), 1000);
	}


	render() {
		if(this.props.authenticatedEvent.length === 0){
			return (<div>No events yet</div>);
		}
		const eventNodes = this.props.authenticatedEvent.map( ( profileEvent ) => {
			return (
				<ProfileEvent key={ profileEvent.id } profileEvent={profileEvent} toggleModal={this.toggleModal}/>
			);
		});

		return(
			<div>
		
				<Navigation />
				{ this.state.toggle &&
					(<div id="modal1" class="modal">
						<div class="modal-content">
							<h4>Are you sure you want to delete this Event?</h4>
						</div>
						<div class="modal-footer">
							<a onClick={this.onDelete} className="btn">Accept</a>
							<a  onClick={this.toggleModal} class="modal-action modal-close waves-effect waves-green btn-flat">Decline</a>
						</div>
					</div>)
				}
				{ eventNodes }
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authenticatedEvent: state.authEvent.events
	};
	
};

const mapDispatchToProps = (dispatch) =>  ({
	userEventsAction: () => dispatch(userEventsAction()),
	deleteEventAction: (eventId) => dispatch(deleteEventAction(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
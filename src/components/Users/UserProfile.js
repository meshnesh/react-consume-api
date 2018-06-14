import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import DashboardPage from './NewProfile';


import SideNav from './containers/SideNav';

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
		this.props.deleteEventAction(eventId)
			.then(
				this.setState({
					toogle:false,
					selectedId: id,
					eventDeleted:true
				},()=>{
					this.props.history.push('/'); 
				})
			);
	
	}


	render() {
		// check if the event data brought back contains any values
		// if(this.props.authenticatedEvent.length === 0){
		// 	return (
		// 		<div className="row">
		// 			<Navigation />
		// 			<h1 className="center">No Events</h1>
		// 			<Footer />
		// 		</div>
		// 	);
		// }
		const eventNodes = this.props.authenticatedEvent.map( ( profileEvent ) => {
			return (
				<DashboardPage key={ profileEvent.id } profileEvent={profileEvent} toggleModal={this.toggleModal}/>
			);
		});

		const event = this.props.authenticatedEvent.length === 0 ? (
			<h1 className="center">No Events</h1>
		): (
			{eventNodes}
		);

		return(
			<div>
				<Navigation />
				<div className="row">

					<SideNav />

					<div className="col s9 Dashboard_main">
					
						<div className="row">
							<div className="col s12 l6">
								<h6>Profile > Dashboard</h6>
							</div>
							<div className="col s12 l6">
								<Link to="/AddEvent">
									<a class="btn right"><i class="material-icons left">add</i>Add Event</a>
								</Link>
							</div>
						</div>
					
						<div className="row">

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

							{ event }
						</div>

					</div>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authenticatedEvent: state.authEvent[0].events
	};
	
};

const mapDispatchToProps = (dispatch) =>  ({
	userEventsAction: () => dispatch(userEventsAction()),
	deleteEventAction: (eventId) => dispatch(deleteEventAction(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
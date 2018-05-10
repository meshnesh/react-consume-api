import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import  { getEventDetail } from '../../actions/eventActions';

import { rsvpEvent } from '../../actions/authEvents.actions';


export class EditEvent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			rsvp: false
		};

		this.handleRsvp = this.handleRsvp.bind(this);
	}
	
	componentWillMount = () => {
		let eventId = this.props.match.params.id
		this.props.dispatch(getEventDetail(eventId))
	}

	handleRsvp() {
		let eventId = this.props.match.params.id
		this.props.dispatch(rsvpEvent(eventId))
		this.setState({
			rsvp: true
		});
		setTimeout(
			function() {
				this.props.history.push('/'); 
			}
				.bind(this), 4000);
	}
	

	render () {
		console.log("From the event detail ",this.props.eventDetails.event);
		const eventNode = this.props.eventDetails.event
		
		
		return (
			<div>
				<Navigation />
                <div className="row event_detail">
					<div className="card horizontal">
					<div className="card-image">
					<img src={ eventNode.image_url } />
					</div>
					<div className="card-stacked">
						<div className="card-content">
							<span className="card-title grey-text text-darken-4"> { eventNode.title } </span>
							<p> <i class="fas fa-map-marker-alt"></i> { eventNode.location } </p>
							<h6><i class="far fa-calendar-alt"></i> { eventNode.date } at { eventNode.time } </h6>
							<h6> <strong>Event Category</strong>: { eventNode.event_category } </h6>
							<a onClick={this.handleRsvp} className="waves-effect waves-light btn">
								RSVP
							</a>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
				<h1 className="grey-text text-darken-4 center"> Description </h1>
					<div className="grid-example col s12">
						<span className="flow-text">
							{ eventNode.description }
						</span>
					</div>
				</div>
				
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		eventDetails:state.event
	}
}

export default connect(mapStateToProps)(EditEvent);
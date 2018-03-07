import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import  { getEventDetail } from '../../actions/eventActions'


class EditEvent extends Component {
	
	componentWillMount = () => {
		let eventId = this.props.match.params.id
		this.props.dispatch(getEventDetail(eventId))
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
							<a className="waves-effect waves-light btn">
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
				{/* <h1>Mangoes</h1>  */}
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
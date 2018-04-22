import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import  { getEventDetail } from '../../actions/eventActions';

class EditEvent extends Component{

    componentWillMount = () => {
		let eventId = this.props.match.params.id
		this.props.dispatch(getEventDetail(eventId))
	}
    
    
	render() {
        console.log("From the edit event ",this.props.editEvent.event);
        const eventData = this.props.editEvent.event;
		return(
			<div>
				<Navigation />
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="title" type="text" name="title" className="validate" value={ eventData.title } />
								<label class="active" for="title">Event Title</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="location" type="text" name="location" className="validate" value={ eventData.location } />
								<label class="active" for="location">Event Location</label>
							</div>
							<div className="input-field col s6">
								<input id="image_url" type="text" name="image_url" className="validate" value={ eventData.image_url } />
								<label class="active" for="image_url">Image url</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s4">
								<input id="date" type="text" name="date" className="validate" value={ eventData.date } />
								<label class="active" for="date">Date</label>
							</div>
							<div className="input-field col s4">
								<input id="time" type="text" name="time" className="validate" value={ eventData.time } />
								<label class="active" for="time">Time</label>
							</div>
							<div className="input-field col s4">
								<input id="event_category" type="text" name="event_category" className="validate" value={ eventData.event_category } />
								<label class="active" for="event_category">Event Category</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="description" name="description" className="materialize-textarea" value={ eventData.description } ></textarea>
								<label class="active" for="description">Event Description</label>
							</div>
						</div>
						<button className="waves-effect waves-light btn">
                            Submit
						</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		editEvent:state.event
	}
}

export default connect(mapStateToProps)(EditEvent);
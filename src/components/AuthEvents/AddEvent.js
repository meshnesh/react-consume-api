import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import { userCreateEventsAction } from '../../actions/authEvents.actions';

const initialState = {
	title: '',
	location: '',
	time: '',
	date: '',
	description: '',
	image_url:'',
	event_category:''
};

class AddEvent extends Component {
	constructor(props){
		super(props);

		this.state = {
			eventData: initialState,
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { eventData } = this.state;
		eventData[e.target.name] = e.target.value;
		this.setState(eventData);
	}

	handleSubmit(e) {
		e.preventDefault();
		const  event = this.state.eventData;
		this.props.userCreateEventsAction(event);
		this.setState({eventData: initialState});
		setTimeout(
			function() {
				this.props.history.push('/profile');
			}
				.bind(this), 1000);
	}

	render() {
		const { eventData } = this.state;
		return(
			<div>
				<Navigation />
				<div className="row">
					<form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s12">
								<input id="title" type="text" name="title" className="validate" value={ eventData.title } onChange={this.handleChange}/>
								<label for="title">Event Title</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="location" type="text" name="location" className="validate" value={ eventData.location } onChange={this.handleChange}/>
								<label for="location">Event Location</label>
							</div>
							<div className="input-field col s6">
								<input id="image_url" type="text" name="image_url" className="validate" value={ eventData.image_url } onChange={this.handleChange}/>
								<label for="image_url">Image url</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s4">
								<input id="date" type="text" name="date" className="validate" value={ eventData.date } onChange={this.handleChange}/>
								<label for="date">Date</label>
							</div>
							<div className="input-field col s4">
								<input id="time" type="text" name="time" className="validate" value={ eventData.time } onChange={this.handleChange}/>
								<label for="time">Time</label>
							</div>
							<div className="input-field col s4">
								<input id="event_category" type="text" name="event_category" className="validate" value={ eventData.event_category } onChange={this.handleChange}/>
								<label for="event_category">Event Category</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="description" name="description" className="materialize-textarea" value={ eventData.description } onChange={this.handleChange}></textarea>
								<label for="description">Event Description</label>
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
		authenticatedCreateEvent: state.authEvent
	};
	
};

const mapDispatchToProps = (dispatch) => {
	return{
		userCreateEventsAction: event =>dispatch(userCreateEventsAction(event))

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
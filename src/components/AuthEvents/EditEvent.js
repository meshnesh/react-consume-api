import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import { getEventDetail } from '../../actions/eventActions';
import { editEventAction } from '../../actions/authEvents.actions';


const initialState = {
	title: '',
	location: '',
	time: '',
	date: '',
	description: '',
	image_url:'',
	event_category:''
};


class EditEvent extends Component{

    constructor(props){
		super(props);
        this.state = {
			eventData: initialState
		};
		// console.log('Constructor',editEvent);
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps',nextProps)
		this.setState({eventData: nextProps.editEvent.event})
	}

    componentWillMount = () => {
		let eventId = this.props.match.params.id
        this.props.getEventAction(eventId)
    }
    
    handleInputChange(e) {
        const { eventData } = this.state;
        eventData[e.target.name] = e.target.value;
		this.setState(eventData);
	}


	handleSubmit(e) {
		e.preventDefault();
		const event = this.state.eventData;
		let eventId = this.props.match.params.id
		console.log('handleSubmit', this.props);
		this.props.editEventAction(eventId, event);
		this.setState({eventData: initialState});
	}
    
	render() {

		const { eventData } = this.state
		
		return(
			<div>
				<Navigation />
				<div className="row">
					<form className="col s12" onSubmit={ this.handleSubmit } >
						<div className="row">
							<div className="input-field col s12">
								<input id="title" type="text" name="title" className="validate" value={ eventData.title } onChange={ this.handleInputChange } />
								<label class="active" for="title">Event Title</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="location" type="text" name="location" className="validate" value={ eventData.location } onChange={ this.handleInputChange } />
								<label class="active" for="location">Event Location</label>
							</div>
							<div className="input-field col s6">
								<input id="image_url" type="text" name="image_url" className="validate" value={ eventData.image_url } onChange={ this.handleInputChange } />
								<label class="active" for="image_url">Image url</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s4">
								<input id="date" type="text" name="date"className="validate" value={ eventData.date } onChange={ this.handleInputChange } />
								<label class="active" for="date">Date</label>
							</div>
							<div className="input-field col s4">
								<input id="time" type="text" name="time" className="validate" value={ eventData.time } onChange={ this.handleInputChange } />
								<label class="active" for="time">Time</label>
							</div>
							<div className="input-field col s4">
								<input id="event_category" type="text" name="event_category" className="validate" value={ eventData.event_category } onChange={ this.handleInputChange } />
								<label class="active" for="event_category">Event Category</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="description" name="description" className="materialize-textarea" value={ eventData.description } onChange={ this.handleInputChange } ></textarea>
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

const mapDispatchToProps = (dispatch) =>  ({
	getEventAction: (eventId) => dispatch(getEventDetail(eventId)),
	editEventAction: (eventId, event) => dispatch(editEventAction(eventId, event))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
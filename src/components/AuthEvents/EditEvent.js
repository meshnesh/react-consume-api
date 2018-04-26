import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

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
			eventData: initialState,
			value: 1,
		};
		// console.log('Constructor',editEvent);
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
	}
    
	handleChange = (event, index, value, date) => this.setState({
		value,
	});
	

	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps',nextProps)
		this.setState({eventData: nextProps.editEvent.event})
	}

    componentWillMount = () => {
		let eventId = this.props.match.params.id
        this.props.getEventAction(eventId)
    }
    
    handleInputChange(e, index, value,) {
        const { eventData } = this.state;
        eventData[e.target.name] = e.target.value;
		this.setState({eventData,value});
	}


	handleSubmit(e) {
		e.preventDefault();
		const event = this.state.eventData;
		let eventId = this.props.match.params.id
		console.log('handleSubmit', this.props);
		this.props.editEventAction(eventId, event);
		this.setState({eventData: initialState});
		setTimeout(
			function() {
				this.props.history.push('/profile'); 
			}
				.bind(this), 1000);
	}
    
	render() {

		const { eventData } = this.state
		console.log(this.state)
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
								{/* <input id="date" type="text" name="date"className="validate" value={ eventData.date } onChange={ this.handleInputChange } />
								<label class="active" for="date">Date</label> */}
								<DatePicker hintText="Landscape Dialog" mode="landscape" />
							</div>
							<div className="input-field col s4">
								<input id="time" type="text" name="time" className="validate" value={ eventData.time } onChange={ this.handleInputChange } />
								<label class="active" for="time">Time</label>
							</div>
							<div className="input-field col s4">

								<SelectField
									floatingLabelText="Select event Category"
									value={eventData.id}
									onChange={this.handleChange}
									>
									<MenuItem value={eventData.id} primaryText={eventData.title} />
									<MenuItem value={3} primaryText="Weeknights" />
									<MenuItem value={4} primaryText="Weekends" />
									<MenuItem value={5} primaryText="Weekly" />
								</SelectField>
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
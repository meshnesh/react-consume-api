import React, { Component } from 'react';
import axios from 'axios';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

export default class EditEvent extends Component {
	constructor(props){
		super(props);
		this.state = {
		  details:''
		}
	}

	componentWillMount = () => {
		this.getEvent();
	}

	getEvent(){
		let eventId = this.props.match.params.id;
		// console.log("Event Details...id",eventId)
		axios.get(`https://bright-events.herokuapp.com/api/events/all/${eventId}`)
		  .then(response => {
			this.setState({details: response.data}, () => {
			  console.log("Event Details...data",this.state);
			})
		})
		.catch(err => console.log(err));
	}

	render () {
		return (
			<div>
				<Navigation />
                <div className="row event_detail">
					<div className="card horizontal">
					<div className="card-image">
					<img src={ this.state.details.image_url } />
					</div>
					<div className="card-stacked">
						<div className="card-content">
							<span className="card-title grey-text text-darken-4"> { this.state.details.title } </span>
							<p> <i class="fas fa-map-marker-alt"></i> { this.state.details.location } </p>
							<h6><i class="far fa-calendar-alt"></i> { this.state.details.date } at { this.state.details.time } </h6>
							<h6> <strong>Event Category</strong>: { this.state.details.event_category } </h6>
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
							{ this.state.details.description }
						</span>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
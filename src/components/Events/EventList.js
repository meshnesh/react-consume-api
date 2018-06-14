import React, { Component } from 'react';

import Event from './EventItem';
import Search from '../Search/Search';

import { fetchEvents } from '../../actions/eventActions';

class EventList extends Component {
	state = {
		search: '',
		page: 1
	}
	
	updateSearch = event => {
        this.setState({ search: event.target.value});
	}

	nextPage = () => {
		const page = this.state.page
		const limit = 2 
		console.log('nextPage', this.props)
		this.setState({page: page + 1}, () => this.props.dispatch(fetchEvents(limit, page)));
	}

	prevPage = () => {
		const page = this.state.page
		const limit = 2 
		if(page > 1){
			return this.setState({page: page - 1}, () => this.props.dispatch(fetchEvents(limit, page)));
		}
		console.log('could not decreent');
	}
	
	render(){
		const Eventz = this.props.events;
		let filteredEvents = Eventz.filter (event => {
            return event.title.toLowerCase().includes(this.state.search) ||
               event.location.toLowerCase().includes(this.state.search);
		});

		let eventNodes = [];

		eventNodes = filteredEvents.map( ( event ) => {
			return (
				<Event key={ event.id } id={event.id} image_url={ event.image_url } title={ event.title } location={ event.location }
					date={ event.date } time={ event.time } description={ event.description }
					event_category={ event.event_category } />
			);
		})


		const event = filteredEvents.length === 0 ? (
			<h1 className="center">No Events</h1>
		): (
			{eventNodes}
		);

		return (
			<div className="row">
				<h1 className="event-List"></h1>
				<Search onChange={this.updateSearch} />
				{eventNodes}
				<div class="row">
				<div class="col s12 center">
					<div class="col m6 center">
						<ul class="pagination">
							<li class="waves-effect" onClick={this.prevPage}><a ><i class="material-icons">chevron_left</i></a></li>
						</ul>
									
					</div>
					<div class="col s6 center">
						<ul class="pmgination">
							<li class="waves-effect" onClick={this.nextPage}><a ><i class="material-icons">chevron_right</i></a></li>
						</ul>
					</div>
					</div>
				</div>

			</div>
		);
	}
}

export default EventList;
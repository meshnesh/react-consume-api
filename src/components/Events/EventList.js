import React, { Component } from 'react';

import Event from './EventItem';
import Search from '../Search/Search';


class EventList extends Component {
	state = {
        search: ''
	}
	
	updateSearch = event => {
        this.setState({ search: event.target.value});
	}
	
	render(){
		const Eventz = this.props.events;
		let filteredEvents = Eventz.filter (event => {
            return event.title.toLowerCase().includes(this.state.search) ||
               event.location.toLowerCase().includes(this.state.search);
		});

		let eventNodes = [];

		if (filteredEvents.length !== 0 ) {
			eventNodes = filteredEvents.map( ( event ) => {
				return (
					<Event key={ event.id } id={event.id} image_url={ event.image_url } title={ event.title } location={ event.location }
						date={ event.date } time={ event.time } description={ event.description }
						event_category={ event.event_category } />
				);
			})
		}
		else {
			return (
				<div className="row">
					<h1 className="event-List"></h1>
					<Search onChange={this.updateSearch} />
					<h1 className="center">No Events</h1>
				</div>

			)
		}
		return (
			<div className="row">
				<h1 className="event-List"></h1>
				<Search onChange={this.updateSearch} />
				{eventNodes}
			</div>
		);
	}
}

export default EventList;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// components
import EventList from './Events/EventList';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Search from './Search/Search';

import { fetchEvents } from '../actions/eventActions';


class Main extends Component {
	componentWillMount(){

		this.props.dispatch(fetchEvents());
	}
	

	render() {
		return (
			
			<div>
				<Navigation />
				<Search />
				<EventList events ={this.props.events}/>
				<Footer />
			</div>
		
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.eventsReducer.events
	};
};

export default connect(mapStateToProps)(Main);

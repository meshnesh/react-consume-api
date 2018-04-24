import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ProfileEvent from './ProfileEvents';

import { userEventsAction } from '../../actions/authEvents.actions';


class UserProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			toggle:false
		};
	}
	componentWillMount(){
		this.props.dispatch(userEventsAction());
	}


	render() {
		if(Object.getOwnPropertyNames(this.props.authenticatedEvent).length === 0){
			return (<div>No events yet</div>);
		}
		var eventNodes = this.props.authenticatedEvent.map( ( profileEvent ) => {
			return (
				<ProfileEvent key={ profileEvent.id } id={profileEvent.id} image_url={ profileEvent.image_url } title={ profileEvent.title } location={ profileEvent.location }
					date={ profileEvent.date } time={ profileEvent.time } description={ profileEvent.description }
					event_category={ profileEvent.event_category } />
			);
		});

		return(
			<div>
				<Navigation />
				{ eventNodes }
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authenticatedEvent: state.authEvent[0].events
	};
	
};

export default connect(mapStateToProps)(UserProfile);
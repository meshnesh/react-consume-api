import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

// components
import EventList from './Events/EventList';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

import { fetchEvents } from '../actions/eventActions';

@connect((state) => {
  return {
    events: state.eventsReducer.events
  }
})

class Main extends Component {
  componentWillMount(){

    this.props.dispatch(fetchEvents());
  }

  render() {
    console.log("From the main file ",this.props.events);
    return (
      <div>
        <Navigation />
        <EventList events ={this.props.events}/>
        <Footer />
      </div>
    )
  }
}


export default Main;

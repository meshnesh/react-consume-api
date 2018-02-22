import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

// components
import EventList from './Events/EventList';
import { fetchEvents } from '../actions/eventActions';

@connect((state) => {
  // console.log("ins store",store.eventsReducer.events);
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
        <EventList events ={this.props.events}/>
      </div>
    )
  }
}

export default Main;

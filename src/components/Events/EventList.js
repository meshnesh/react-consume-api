import React, { Component } from "react";

import Event from './Event';

class EventList extends Component {
  render(){
    if(Object.getOwnPropertyNames(this.props.events).length === 0){
      return (<div></div>)
    }
    var eventNodes = this.props.events.map( function( event ) {
      return (
        <Event title={ event.title } location={ event.location }
        key={ event.id } date={ event.date }>
        {event.title}
        </Event>
      )
    });
    return (
      <div>
        <div>
          <center>
            <h1 className="event-List">Event List</h1>
            {eventNodes}
          </center>
        </div>
      </div>
    )
  }
}

export default EventList;
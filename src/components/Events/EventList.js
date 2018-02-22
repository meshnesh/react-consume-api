import React, { Component } from "react";

import Event from './Event';

class EventList extends Component {
  render(){
    if(Object.getOwnPropertyNames(this.props.events).length === 0){
      return (<div></div>)
    }
    var eventNodes = this.props.events.map( function( event ) {
      return (
        <Event key={ event.id } image_url={ event.image_url } title={ event.title } location={ event.location }
          date={ event.date } time={ event.time } description={ event.description }
          event_category={ event.event_category } />
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
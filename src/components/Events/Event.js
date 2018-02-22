import React, { Component } from "react";
import ReactDOM from "react-dom"

class Event extends Component{
  render(){
    return (
      <div>
        <div className="event">
          {this.props.title}
        </div>
        <div className="event">
        {this.props.location}
        </div>
        <div className="event">
          {this.props.date} {this.props.time}
        </div>
        <div className="event">
        {this.props.description}
        </div>
        <div className="event">
          {this.props.event_category}
        </div>
        <div className="event">
          {this.props.image_url}
        </div>
        <br />
      </div>
    )
  }
}

export default Event
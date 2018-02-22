import React, { Component } from "react";
import ReactDOM from "react-dom"

class Event extends Component{
  render(){
    return (
      <div>
        <div className="username">
          {this.props.title}
        </div>
        <div className="username">
        {this.props.location}
        </div>
        <div className="username">
          {this.props.date}
        </div>
      </div>
    )
  }
}

export default Event
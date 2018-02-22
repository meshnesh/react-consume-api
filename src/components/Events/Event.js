import React, { Component } from "react";
import ReactDOM from "react-dom"

class Event extends Component{
  render(){
    return (
        <div className="col s12 m4">

            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">

                <img className="activator" src={this.props.image_url}/>

                </div>

                <div className="card-content">

                <span className="card-title grey-text text-darken-4">{this.props.title}</span>
                <p> {this.props.location} </p>
                <h6> {this.props.date} {this.props.time} </h6>

                <a className="waves-effect waves-light btn">VIEW</a>

                </div>
            </div>
        </div>
    )
  }
}

export default Event
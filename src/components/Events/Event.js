import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';


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

                <Link to={`/${this.props.id}`}>
                    <a className="waves-effect waves-light btn">
                        VIEW
                    </a>
                </Link>

                </div>
            </div>
        </div>
    )
  }
}

export default Event;
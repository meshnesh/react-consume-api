import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

// components
import EventList from './Events/EventList';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

import { history } from '../helpers';
import { alertActions } from '../actions/alert.actions';
import { fetchEvents } from '../actions/eventActions';


@connect((state) => {
  return {
    events: state.eventsReducer.events
  }
})

class Main extends Component {
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  componentWillMount(){

    this.props.dispatch(fetchEvents());
  }

  render() {
    console.log("From the main file ",this.props.events);
    return (
      <div>
        <Navigation />
        {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <EventList events ={this.props.events}/>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

// const connectedApp = connect(mapStateToProps)(Main);
// export { connectedApp as Main }; 


export default connect(mapStateToProps)(Main);

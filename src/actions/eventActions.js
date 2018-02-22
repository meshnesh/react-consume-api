import axios from "axios";

export function fetchEvents() {

  return function(dispatch) {
    axios.get('https://bright-events.herokuapp.com/api/events/all')
        .then( (response) =>{
          dispatch({type:'FETCH_EVENTS_FULFILLED', payload:response.data});
        })
        .catch( (err) => {
          dispatch({type:'FETCH_EVENTS_REJECTED',payload:err})
        })
  }
}

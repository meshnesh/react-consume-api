import  instance from '../_services/user.service';

export const fetchEvents = () => {

	return (dispatch) => {
		instance.get('api/events/all')
			.then( (response) =>{
				dispatch({type:'FETCH_EVENTS_FULFILLED', payload:response.data});
			})
			.catch( (err) => {
				dispatch({type:'FETCH_EVENTS_REJECTED',payload:err});
			});
	};
};


export const getEventDetail = (eventId) => {
	return (dispatch) => {
		instance.get(`/api/events/all/${eventId}`)
			.then( (response) =>{
				dispatch({type:'FETCH_EVENT_ID_FULFILLED', payload:response.data});
			})
			.catch( (err) => {
				dispatch({type:'FETCH_EVENT_ID_REJECTED',payload:err});
			});
	};
};

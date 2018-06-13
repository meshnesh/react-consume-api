import * as types from './actionTypes';
import  instance from '../_services/user.service';
import toastr from 'toastr';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';

export function getEventsSuccess(payload) {
	return {
		type: types.GET_EVENTS_SUCCESS,
		payload
	};
}

export function getSingleEventSuccess(payload) {
	return {
		type: types.GET_SINGLE_EVENT_SUCCESS,
		payload
	};
}

export const fetchEvents = () => {

	return (dispatch) => {
		dispatch(beginAjaxCall());
		return instance
			.get('api/events/all')
			.then( (resp) =>{
				dispatch(getEventsSuccess(resp.data));
			})
			.catch( (err) => {
				dispatch({type:'GET_EVENTS_ERROR',payload:err});
			});
	};
};


export const getEventDetail = (eventId) => {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return instance
			.get(`/api/events/all/${eventId}`)
			.then( (response) =>{
				dispatch(getSingleEventSuccess(response.data));
			})
			.catch( (err) => {
				dispatch({type:'GET_EVENT_ID_REJECTED',payload:err});
			});
	};
};

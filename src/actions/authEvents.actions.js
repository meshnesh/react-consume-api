import * as types from './actionTypes';
import instance from '../_services/user.service';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';

export function getEventSuccess(payload) {
	return {
		type: types.GET_AUTH_EVENT_SUCCESS,
		payload
	};
}

export function editEventSuccess(payload) {
	return {
		type: types.EDIT_EVENT_SUCCESS,
		payload
	};
}

export function deleteEvent(payload) {
	return {
		type: types.DELETE_EVENT_SUCCESS,
		payload
	};
}

export function getEventCategory(payload) {
	return {
		type: types.GET_EVENT_CATEGORY,
		payload
	};
}

export function userEventsAction() {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		return instance
			.get('api/events')
			.then(resp => {
				dispatch(getEventSuccess(resp.data));
			})
			.catch(err => {
				dispatch(ajaxCallError(err));
				
			});
	};
}

export function editEventAction(eventId,event) {
	return function (dispatch){
		dispatch(beginAjaxCall());
		return instance
			.put(`api/events/${eventId}`, event)
			.then(resp => {
				dispatch(editEventSuccess(resp.data));
			})
			.catch(err => {
				dispatch(ajaxCallError(err));
			});
	};
}

export function deleteEventAction(eventId) {
	return function (dispatch){
		dispatch(beginAjaxCall());
		return instance
			.delete(`api/events/${eventId}`)
			.then(resp => {
				dispatch(deleteEvent(resp.data));
			})
			.catch(err => {
				dispatch(ajaxCallError(err));
			});
	};
}

export function getEventCategories() {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		return instance
			.get('api/category')
			.then(resp => {
				dispatch(getEventCategory(resp.data));
			})
			.catch(err => {
				dispatch(ajaxCallError(err));
				
			});
	};
}

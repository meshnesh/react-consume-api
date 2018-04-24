import * as types from './actionTypes';
import instance from '../_services/user.service';
import toastr from 'toastr';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';

export function getEventSuccess(payload) {
	return {
		type: types.GET_AUTH_EVENT_SUCCESS,
		payload
	};
}

export function createEventSuccess(payload) {
	return {
		type: types.ADD_EVENT_SUCCESS,
		payload
	};
}

export function editEventSuccess(payload) {
	return {
		type: types.EDIT_EVENT_SUCCESS,
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

export function userCreateEventsAction(event) {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		return instance
			.post('api/events', event)
			.then(resp => {
				// console.log('auth events',resp.data);
				dispatch(createEventSuccess(resp.data));
				toastr.success(resp.data.message);
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

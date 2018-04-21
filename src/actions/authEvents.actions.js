import * as types from './actionTypes';
import instance from '../_services/user.service';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';

export function getEventSuccess(payload) {
	return {
		type: types.GET_AUTH_EVENT_SUCCESS,
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

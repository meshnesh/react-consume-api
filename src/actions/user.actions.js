import * as types from './actionTypes';
import instance from '../_services/user.service';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';
import toastr from 'toastr';
import handleAuthErr from './index';
  

export function loginSuccess(payload) {
	return {
		type: types.LOGIN_SUCCESS,
		payload
	};
}

export function logOutSuccess(payload) {
	return {
		type: types.LOGOUT_SUCCESS,
		payload
	};
}

export function registrationSuccess(payload) {
	return {
		type: types.REGISTER_SUCCESS,
		payload
	};
}

export function userRegistrationActions(user) {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		return instance
			.post('api/auth/register', user)
			.then(resp => {
				dispatch(registrationSuccess(resp.data));
				toastr.success(resp.data.message);
			})
			.catch(err => {
				dispatch(handleAuthErr('signup', err.response.status));
				toastr.error(err);
			});
	};
}

export function userLoginActions(user) {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		return instance
			.post('api/auth/login', user)
			.then(resp => {
				let { access_token, message } = resp.data; 
				dispatch(loginSuccess(resp.data));
				toastr.success(message);
				localStorage.setItem('access_token', access_token);
			})
			.catch(error => {
				dispatch(ajaxCallError(error));
				toastr.error(error.response.data.error);
			});
	};
}

export function userLogoutActions() {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		return instance
			.post('api/auth/logout')
			.then(resp => {
				let message = resp.data.message; 
				dispatch(logOutSuccess(resp.data));
				toastr.success(message);
			})
			.catch(error => {
				dispatch(ajaxCallError(error));
				toastr.error(error.response.data.error);
			});
	};
}

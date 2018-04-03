import * as types from './actionTypes';
// import { userConstants } from '../constants';
import instance from '../_services/user.service';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';
import toastr from 'toastr';
  

export function loginSuccess(payload) {
  return {
      type: types.LOGIN_SUCCESS,
      payload
  }
}

export function registrationSuccess(payload) {
  return {
      type: types.REGISTER_SUCCESS,
      payload
  }
}

export function userActions(user) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return instance.post('api/auth/register', user)
    .then(resp => {
      dispatch(registrationSuccess(resp.data));
      toastr.success(resp.data.message);
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error(error.response.data.error);
    });
  }
}

export function userLoginActions(user) {
  return function (dispatch) {
      dispatch(beginAjaxCall());
      return instance
      .post('api/auth/login', user)
      .then(resp => {
          dispatch(loginSuccess(resp.data));
          toastr.success(resp.data.message);
      })
      .catch(error => {
          dispatch(ajaxCallError(error));
          toastr.error(error.response.data.error)
      })
  }
}

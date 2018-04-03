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

export function userActions(user){
  return {
      type : userConstants.REGISTER_REQUEST,
      payload :instance.post('api/auth/register', user)
      .then((response) => {
        console.log("user.register.action",response.data);
      })
      .catch((err) => {
        console.log("user.register.action",err);
      })
    }
};


// export function userLoginActions(user){
//   return {
//     type : userConstants.LOGIN_USER_REQUEST,
//     payload :instance.post('api/auth/login', user)
//     .then( (response) => {
//       dispatch(loginSuccess(resp.data));
//     })
//     .catch( (err) => {
//       console.log("user.login.action",err);
//     })
    
//   }
// };

export function userLoginActions(user) {
  return function (dispatch) {
      dispatch(beginAjaxCall());
      return instance
      .post('api/auth/login', user)
      .then(resp => {
          dispatch(loginSuccess(resp.data));
      })
      console.log("User Login",response.data)
      .then(() => toastr.success('You are loged in'))
      .catch(error => {
          dispatch(ajaxCallError(error));
          toastr.error(error.response.data.error)
      })
  }
}

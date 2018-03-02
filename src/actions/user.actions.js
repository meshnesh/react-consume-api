import { userConstants } from '../constants';
import  instance from '../_services/user.service';
                                                                       

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


export function userLoginActions(user){
  return {
    type : userConstants.LOGIN_USER_REQUEST,
    payload :instance.post('api/auth/login', user)
    .then( (response) => {
      console.log("user.login.action",response.data);
    })
    .catch( (err) => {
      console.log("user.login.action",err);
    })
    
  }
};

import { userConstants } from '../constants';
import  instance from '../_services/user.service';
                                                                       

export function userActions(user){
    return {
      type : userConstants.REGISTER_REQUEST,
      payload :instance.post('api/auth/register', user)
    }
};

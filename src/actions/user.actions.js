import { userConstants } from '../constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {

    register(user) {
        return dispatch => {
            dispatch(request(user));

            userService.register(user)
                .then(
                    user => { 
                        dispatch(success());
                        console.log("user.actions",user)
                        history.push('/login');
                        dispatch(alertActions.success('Registration successful'));
                    },
                    error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                );
        };

        request = (user) => { return { type: userConstants.REGISTER_REQUEST, user } }
        success = (user) => { return { type: userConstants.REGISTER_SUCCESS, user } }
        failure = (error) => { return { type: userConstants.REGISTER_FAILURE, error } }
    }
}

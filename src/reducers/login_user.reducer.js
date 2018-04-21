import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.authLogin, action) => {
	switch (action.type) {
	case types.LOGIN_SUCCESS:
		return { 
			...state,
			loading: true,
			token: action.payload.token,
			authenticated: true,
		};

	case types.SHOW_LOGIN:
		return {
			...state,
			login: true,
		};

	case types.REGISTER_SUCCESS:
		return { 
			...state,
			loading: true,
			login:false,
			message: action.payload.message,
			authenticated: true,
			registered:true,
		};

	default:
		return state;
	}
};

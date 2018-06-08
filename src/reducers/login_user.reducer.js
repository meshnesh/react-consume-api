import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.authLogin, action) => {
	switch (action.type) {
	case types.LOGIN_SUCCESS:
		return { 
			...state,
			token: action.payload.token,
			authenticated: true,
			isLoggedIn: true,
		};

	case types.SHOW_LOGIN:
		return {
			...state,
			login: true,
			authenticated: true,
			isLoggedIn: true,
		};

	case types.REGISTER_SUCCESS:
		return { 
			...state,
			login:false,
			message: action.payload.message,
			authenticated: true,
			registered:true,
		};
	case types.LOGOUT_SUCCESS:
		return { 
			...state,
			login:false,
			message: action.payload.message,
			authenticated: false,
			isLoggedIn: false,
		};

	default:
		return state;
	}
};

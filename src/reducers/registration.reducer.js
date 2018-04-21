import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.authRegister, action) => {
	switch (action.type) {
	case types.REGISTER_SUCCESS:
		return {
			...state,
			registering: false,
			registered:true,
			user: action.payload,
		};
   
	default:
		return state;
	}
};
  
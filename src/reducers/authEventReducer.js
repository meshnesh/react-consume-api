import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.events, action) => {
	switch (action.type) {
	case types.GET_AUTH_EVENT_SUCCESS:
		return action.payload;

	case types.EDIT_EVENT_SUCCESS:
		return action.payload;
    
	default:
		return state;
	}
};
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.events, action) => {
	switch (action.type) {
	case types.GET_AUTH_EVENT_SUCCESS:
		return [Object.assign({}, ...state, {events: action.payload})];

	case types.ADD_EVENT_SUCCESS:
		return Object.assign({}, ...state, {events: action.payload});

	case types.EDIT_EVENT_SUCCESS:
		return state;
	
	case types.DELETE_EVENT_SUCCESS:
		return Object.assign({}, ...state, {message: action.payload});

	case types.GET_EVENT_CATEGORY:
		return [Object.assign({}, state, {categories: action.payload})];
	
	case types.SUCCESSFUL_RSVP:
		return Object.assign({}, ...state, {rsvp: action.payload});
    
	default:
		return state;
	}
};

import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.events, action) => {
	switch (action.type) {
	case types.GET_AUTH_EVENT_SUCCESS:
		return [Object.assign({}, state, {events: action.payload})];

	case types.ADD_EVENT_SUCCESS:
		return [...state, {createdEvent: action.payload}];
    
	default:
		return state;
	}
};
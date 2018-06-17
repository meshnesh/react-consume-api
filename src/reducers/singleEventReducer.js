import * as types from '../actions/actionTypes';
const singleEventReducer = ( 
	state={
		event:{},
		fetching: false,
		fetched: false,
		error: null
	}, action) => {
	switch (action.type) {
	case 'FETCH_EVENT_ID':
		return {...state, fetching: true};
	case types.GET_SINGLE_EVENT_SUCCESS:
		return {
			...state,
			fetching: false,
			fetched: true,
			event: action.payload
		};
	case types.GET_EVENT_ID_REJECTED:
		return {
			...state,
			fetching: false,
			error: action.payload
		};
	default:
		return state;
	}
};

export default singleEventReducer;
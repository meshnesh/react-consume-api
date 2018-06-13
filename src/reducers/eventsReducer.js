import * as types from '../actions/actionTypes';
const reducer = ( 
	state={
		events:[],
		fetching: false,
		fetched: false,
		error: null
	}, action) => {
	switch (action.type) {
	case 'FETCH_EVENTS':
		return {...state, fetching: true};
	case types.GET_EVENTS_SUCCESS:
		return {
			...state,
			fetching: false,
			fetched: true,
			events:action.payload
		};
	case types.GET_EVENTS_ERROR:
		return {
			...state,
			fetching: false,
			error: action.payload
		};
	default:
		return state;
	}
};

export default reducer;
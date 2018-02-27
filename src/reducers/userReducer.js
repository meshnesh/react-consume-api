const reducer = ( 
    state={
        users:[],
        fetching: false,
        fetched: false,
        error: null
    }, action) => {
        switch (action.type) {
            case "REGISTER_USER":
                return {...state, fetching: true}
            case "REGISTER_USER_FULFILLED":
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    events:action.payload
                }
            case "REGISTER_USER_REJECTED":
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            default:
                return state;
        }
    }

export default reducer;
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.auth, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return { 
            ...state,
            loading: true,
            token: action.payload.token,
            message: action.payload.message,
            authenticated: true
            }

        case types.SHOW_LOGIN:
            return {
            ...state,
            login: true,
            }

        default:
            return state
    }
}

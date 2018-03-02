export const initialState = {
    user:{},
    login:false,
    logged:false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_REQUEST':
            return { 
            ...state,
            login: true,
            };
        case 'LOGIN_USER_FULLIFIED':
            return {
            ...state,
            login: true,
            logged: true,
            user: action.payload,
            }
        case 'LOGIN_USER_FAILURE':
            return {
                ...state,
                login: false,
                error: action.payload
            }
   
        default:
            return state
    }
}

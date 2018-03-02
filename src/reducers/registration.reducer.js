export const initialState = {
    user:{},
    registering:false,
    registered:false,
    error: null
  }
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case 'USERS_REGISTER_REQUEST':
          return { 
            ...state,
            registering: true,
          };
        case 'USERS_REGISTER_SUCCESS':
          return {
            ...state,
            registering: true,
            registered:true,
            user: action.payload,
          }
        case 'USERS_REGISTER_FAILURE':
          return {
              ...state,
              registering: false,
              error: action.payload
          }
   
        default:
          return state
      }
  }
  
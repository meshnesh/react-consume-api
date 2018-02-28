export const initialState = {
  registering:false
}
 
export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_REGISTER_REQUEST':
      return { 
        ...state,
        registering: true,
      };
    case 'REGISTER_USER_FULLIFIED':
      return {
        ...state,
        registering: true,
        message:action.payload.data.message,
      };
 
    default:
      return state
  }
}
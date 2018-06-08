import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import registration  from './registration.reducer';
import singleEventReducer from './singleEventReducer';
import authEventReducer from './authEventReducer';
import login from './login_user.reducer';

export default combineReducers({
	eventsReducer,
	auth:registration,
	authLogin:login,
	event:singleEventReducer,
	authEvent : authEventReducer
});

import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";
import registration  from './registration.reducer';
import singleEventReducer from './singleEventReducer'

export default combineReducers({
    eventsReducer,
    auth:registration,
    event:singleEventReducer
});

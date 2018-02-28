import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';

export default combineReducers({
    eventsReducer,
    registration,
    alert
});
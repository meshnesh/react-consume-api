import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";
import { registration } from './registration.reducer';

export default combineReducers({
    eventsReducer,
    registration
});
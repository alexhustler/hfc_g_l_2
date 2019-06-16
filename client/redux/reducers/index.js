import { combineReducers } from "redux";
import statesReducer from "./statesReducer";

export default combineReducers({
    responseState: statesReducer
});
import { combineReducers } from "redux";
import cityStore from "./reducers/cityStore";
const rootReducer = combineReducers({ cityStore });
export default rootReducer;
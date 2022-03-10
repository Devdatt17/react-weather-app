import { combineReducers } from "redux";
import reducer from './reducer'
import weatherReducer from "./weatherReducer";
export default  combineReducers({
    reducer,
    weatherReducer
})
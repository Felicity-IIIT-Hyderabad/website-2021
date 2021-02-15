import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const rootReducer =  combineReducers({
    loginState: loginReducer
});

export default rootReducer;

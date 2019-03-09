import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectreducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;
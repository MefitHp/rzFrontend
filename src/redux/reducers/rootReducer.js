import {combineReducers} from 'redux';
import {projectsReducer} from "./";
import {userReducer} from "./userReducer";
import {adminReducer} from "./adminReducer";

export const rootReducer = combineReducers({
    projects:projectsReducer,
    user: userReducer,
    admin:adminReducer
});
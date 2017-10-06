import {combineReducers} from 'redux';
import {projectsReducer} from "./";

export const rootReducer = combineReducers({
    projects:projectsReducer
});
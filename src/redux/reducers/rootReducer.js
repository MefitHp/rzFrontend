import {combineReducers} from 'redux';
import {projectsReducer} from "./";
import {userReducer} from "./userReducer";
import {userProjectsReducer} from "./userProjectsReducer";

export const rootReducer = combineReducers({
    projects:projectsReducer,
    user: userReducer,
    userProjects: userProjectsReducer
});
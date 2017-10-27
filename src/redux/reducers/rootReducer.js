import {combineReducers} from 'redux';
import {projectsReducer} from "./";
import {userReducer} from "./userReducer";
import {adminReducer} from "./adminReducer";
import {rewardsReducer} from "./rewardsReducer";

export const rootReducer = combineReducers({
    projects:projectsReducer,
    user: userReducer,
    admin:adminReducer,
    rewards:rewardsReducer
});
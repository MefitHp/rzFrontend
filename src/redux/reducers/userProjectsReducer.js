import {
    LOAD_USER_PROJECTS_SUCCESS,
    SUBMIT_NEW_PROJECT_SUCCESS
} from '../actions/userActions';

export function userProjectsReducer(state=[], action){
    switch(action.type){
        case LOAD_USER_PROJECTS_SUCCESS:
            return action.projects;
        case SUBMIT_NEW_PROJECT_SUCCESS:
            return [action.project, ...state];
        default:
            return state;
    }
}
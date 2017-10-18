import {LOAD_PROJECTS_SUCCESS} from "../actions/projectsActions";

export function projectsReducer(state=[], action){
    switch(action.type){
        case LOAD_PROJECTS_SUCCESS:
            return action.projects;
        default:
            return state;
    }
}
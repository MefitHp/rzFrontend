import {GET_UPDATES_FROM_FOLLOWED_PROJECTS_SUCCESS} from '../actions/updatesActions';

export function updatesReducer(state=[], action){
    switch(action.type){
        case GET_UPDATES_FROM_FOLLOWED_PROJECTS_SUCCESS:
            return action.updates;
        default:
            return state;
    }
}
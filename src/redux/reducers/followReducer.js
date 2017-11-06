import {GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES} from '../actions/followActions';

export function followReducer(state=[], action){
    switch(action.type){
        case GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES:
            return action.follows;
        default:
            return state;
    }
}
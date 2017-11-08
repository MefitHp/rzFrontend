import {ADD_FOLLOW, GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES, REMOVE_FOLLOW} from '../actions/followActions';

export function followReducer(state=[], action){
    switch(action.type){
        case GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES:
            return action.follows;
        case ADD_FOLLOW:
            return [...state, action.follow];
        case REMOVE_FOLLOW:
            return [ ...state.filter( f => {
                return action.follow.project.id !== f.project.id;
            })];
        default:
            return state;
    }
}
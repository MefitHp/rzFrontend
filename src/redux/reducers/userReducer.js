import {
    SET_USER_SUCCESS,
    SUBMIT_NEW_PROJECT_SUCCESS
} from '../actions/userActions';

export function userReducer(state={}, action){
    switch(action.type){
        case SET_USER_SUCCESS:
            return action.user;
        case SUBMIT_NEW_PROJECT_SUCCESS:
            return {...state, projects:[action.project, ...state.projects]};
        default:
            return state;
    }
}
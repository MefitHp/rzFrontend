import {
    SET_USER_SUCCESS
} from '../actions/userActions';

export function userReducer(state={}, action){
    switch(action.type){
        case SET_USER_SUCCESS:
            return action.user;
        default:
            return state;
    }
}
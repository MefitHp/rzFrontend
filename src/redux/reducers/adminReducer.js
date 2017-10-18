import {
    LOAD_ALL_USERS_SUCCESS
} from '../actions/adminActions';
import {combineReducers} from 'redux';


function users(state=[], action){
    switch(action.type){
        case LOAD_ALL_USERS_SUCCESS:
            return action.users;
        default:
            return state;
    }
}

function projects(state=[], action){
    switch(action.type){
        default:
            return state;
    }
}

export const adminReducer = combineReducers({
   users,
   projects
});


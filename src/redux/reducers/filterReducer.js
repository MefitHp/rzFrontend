import {
    SET_FILTER,
    RESET_FILTER,
    SEARCH,
    TOGGLE_MENU
} from "../actions/filterActions";
import {combineReducers} from 'redux';

export function category(state="todos", action){
    switch(action.type){
        case SET_FILTER:
            return action.filter;
        case RESET_FILTER:
            return "todos";
        default:
            return state;
    }
}

export function search(state=null, action){
    switch(action.type){
        case SEARCH:
            return action.value;
        default:
            return state;
    }
}

export function menu(state=true, action){
    switch(action.type){
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
}

export const filterReducer = combineReducers({
   category,
    search,
    menu
});

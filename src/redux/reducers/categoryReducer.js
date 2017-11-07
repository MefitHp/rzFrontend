import {combineReducers} from 'redux';

import {
    LOAD_CATEGORY_SUCCESS
} from '../actions/categoryActions';

export function categoryList(state = [], action){
    switch(action.type){
        case LOAD_CATEGORY_SUCCESS:
            return action.categories
        default:
            return state;
    }
}

export const categoryReducer = combineReducers({
   list:categoryList
});
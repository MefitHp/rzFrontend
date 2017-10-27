import {combineReducers} from 'redux';
import {GET_REWARD_SUCCESS} from "../actions/projectsActions";

export function currentReward(state={}, action){
    switch(action.type){
        case GET_REWARD_SUCCESS:
            return action.reward
        default:
            return state;
    }
}




export const rewardsReducer = combineReducers({
    currentReward
});
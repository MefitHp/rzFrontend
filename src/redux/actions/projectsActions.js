import api from '../../Api/Django';

export const LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS";
export const GET_REWARD_SUCCESS = "GET_REWARD_SUCCESS";


export function loadProjectsSuccess(projects){
    return {
        type:LOAD_PROJECTS_SUCCESS,
        projects
    }
}

export function getRewardSuccess(reward){
    return {
        type:GET_REWARD_SUCCESS,
        reward
    }
}

export function getReward(id){
    return async function(dispatch){
        const reward = await api.getReward(id);
        dispatch(getRewardSuccess(reward));
    }
}